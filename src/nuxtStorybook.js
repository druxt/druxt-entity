import { resolve } from 'path'
import { DrupalJsonApiParams } from 'drupal-jsonapi-params'
import { DruxtClient } from 'druxt'

// @todo - Use component naming convention for title.
const titleFn = (parts) =>
parts
  .map(
    (part) =>
      part.charAt(0).toUpperCase() + part.slice(1).replace(/_/g, ' ')
  )
  .join('/')

export default async function ({ stories }) {
  const { addTemplate, options } = this

  const druxt = new DruxtClient(options.druxt.baseUrl, options.druxt)

  // Fetch and process schemas.
  const [view, form] = (await Promise.all(['view', 'form'].map(async (type) =>
    await druxt.getCollectionAll(`entity_${type}_display--entity_${type}_display`, new DrupalJsonApiParams()
      .addFilter('status', 1)
      .addFields(`entity_${type}_display--entity_${type}_display`, [
        'bundle',
        'mode',
        'targetEntityType',
      ])
    )))).map((schema) => schema.map((collection) => collection.data.map((o) => o)).flat())
  const schemas = [...view, ...form]

  // Get Entity type and bundle data.
  const entityTypes = Array.from(new Set(schemas.map((o) => o.attributes.targetEntityType)))
    .map((entity) => ({
      entity,
      bundles: Array.from(new Set(schemas.filter((o) => o.attributes.targetEntityType === entity).map((o) => o.attributes.bundle))),
    })
  )

  // Fetch Entities for UUID controls.
  const entities = await Promise.all([
    ...entityTypes.map(({ entity, bundles }) => bundles.map(async (bundle) => {
      try {
        return {
          resourceType: `${entity}--${bundle}`,
          entities: (await druxt.getCollection(`${entity}--${bundle}`, new DrupalJsonApiParams()
            .addFilter('status', 1)
            .addFields(`${entity}--${bundle}`, ['id', 'title', 'name', 'info'])
          )).data.map((o) => ({
            id: o.id,
            title: (o.attributes || {}).title || (o.attributes || {}).name || (o.attributes || {}).info || o.id,
          })),
        }
      }
      catch(e) {
        return {
          resourceType: `${entity}--${bundle}`,
          entites: [],
        }
      }
    })).flat()
  ])

  // Build Entity Stories.
  const entityStories = entityTypes.map(({ entity, bundles }) => bundles.map((bundle) => {
    const viewDisplays = Array.from(new Set(view.filter((o) => o.attributes.targetEntityType === entity && o.attributes.bundle === bundle).map((o) => o.attributes.mode).sort((a) => (a === 'default' ? -1 : 0))))
    const formDisplays = Array.from(new Set(form.filter((o) => o.attributes.targetEntityType === entity && o.attributes.bundle === bundle).map((o) => o.attributes.mode).sort((a) => (a === 'default' ? -1 : 0))))

    const resourceType = `${entity}--${bundle}`
    
    const title = titleFn(['Druxt Entity', entity, bundle])

    addTemplate({
      src: resolve(__dirname, '../nuxt/druxt-entity.stories.js'),
      fileName: `stories/druxt-entity.${resourceType}.stories.js`,
      options: {
        druxt: options.druxt,
        entities: entities.find((o) => o.resourceType === resourceType).entities,
        formDisplays,
        resourceType,
        title,
        viewDisplays
      },
    })

    return resolve(options.buildDir, `./stories/druxt-entity.${resourceType}.stories.js`)
  })).flat()

  stories.push.apply(stories, entityStories)
}

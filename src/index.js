import { resolve } from 'path'

import * as DruxtEntityComponents from './components'
export { DruxtEntityComponents }

export * from './components'
export * from './mixins'

export default function (moduleOptions = {}) {
  // Use root level Druxt options.
  if (typeof this.options === 'undefined' || !this.options.druxt) {
    throw new TypeError('Druxt settings missing.')
  }
  const options = this.options.druxt

  // Add plugin.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/plugin.js'),
    fileName: 'druxt-entity.js',
    options
  })
}

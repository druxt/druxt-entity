import { default as DruxtEntity } from 'druxt-entity/src/components/DruxtEntity'

export default {
  title: '<%= options.title %>',
  component: DruxtEntity,
  argTypes: {
    input: {
      action: 'input',
    },
    mode: {
      control: false,
    },
    type: {
      control: false,
    },
    uuid: {
      control: {
        type: 'select',
        options: [<%= (options.entities || []).map((o) => `'${o.id}'`).join(', ') %>],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The DruxtEntity component renders Drupal content entities via the "View" displays provided by Drupal.'
      },
    },
  },
}

const Template = (args, { argTypes }) => {
  args.type = '<%= options.resourceType %>'
  args.uuid = args.uuid || <%= devalue(((options.entities || [])[0] || {}).id || false) %>
  return {
    props: Object.keys(argTypes),
    template: '<DruxtEntity v-bind="$props" v-on="$props" />',
  }
}

//<% for (mode of options.displays) { %>
export const <%= mode.charAt(0).toUpperCase() + mode.slice(1) %> = Template.bind({})
<%= mode.charAt(0).toUpperCase() + mode.slice(1) %>.storyName = '<%= mode %>'
<%= mode.charAt(0).toUpperCase() + mode.slice(1) %>.args = {
  mode: '<%= mode %>',
}
<%= mode.charAt(0).toUpperCase() + mode.slice(1) %>.parameters = {
  docs: {
    source: {
      code: '<DruxtEntity\n  mode="<%= mode %>"\n  type="<%= options.resourceType %>"\n  uuid=""\n/>'
    }
  }
}
//<% } %>

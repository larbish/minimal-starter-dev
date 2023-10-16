import { field } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    title: field({
      type: 'string',
      description: 'Website title, used as logo.',
      icon: 'i-mdi-format-title',
      default: 'My Theme'
    }),
    footer: field({
      type: 'boolean',
      description: 'Display footer.',
      icon: 'i-mdi-page-layout-footer'
    }),
    socials: {
      github: field({
        type: 'string',
        icon: 'i-mdi-github',
        description: 'GitHub username.'
      }),
      twitter: field({
        type: 'string',
        icon: 'i-mdi-twitter',
        description: 'Twitter username.'
      })
    }
  }
})

export default defineNuxtSchema({
  appConfig: {
    /**
     * Social links
     * @studioIcon i-mdi-web
     */
    socials: {
      /**
       * Twitter social handle
       * @studioIcon i-mdi-github
       */
      twitter: '',
      /**
       * Twitter social handle
       * @studioIcon i-mdi-twitter
       */
      github: ''
    },
    /**
     * Header configuration
     * @studioIcon i-mdi-page-layout-header
     */
    header: {
      /**
       * Header title to display of no icon set
       * @studioIcon i-mdi-format-title
       */
      title: '',
      /**
       * Header icon
       * @studioIcon i-mdi-image-filter-center-focus-strong-outline
       * @formtype Icon
       */
      icon: ''
    },
    /**
     * Footer configuration
     * @studioIcon i-mdi-page-layout-header
     */
    footer: {
      /**
       * Hide or display the footer
       * @studioIcon i-mdi-page-layout-he
       */
      display: true
    }
  }
})

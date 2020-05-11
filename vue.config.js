module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/azienda',
        '/contatti',
        '/checkout'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

module.exports = {
    modules: [
        'nuxt-buefy',
        '@nuxtjs/proxy'
    ],

    axios: {
        proxy: true
    },

    proxy: {
        '/api': {
            target: 'https://spacedock.info/api',
            changeOrigin: true
        }
    },

    plugins: ['~/plugins/moment'],
}
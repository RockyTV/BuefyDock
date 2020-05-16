module.exports = {
    modules: [
        'nuxt-buefy',
        '@nuxtjs/proxy'
    ],

    proxy: {
        '/api': {
            target: 'https://spacedock.info/api',
            changeOrigin: true
        }
    }
}
<template>
    <div class="columns is-multiline">
        <div class="column is-4" v-for="mod in mods">
            <nuxt-link :to="mod.url">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="'https://spacedock.info' + mod.background" alt="Placeholder image">
                        </figure>
                    </div>
                    <header class="card-header">
                        <p class="card-header-title is-centered">
                            {{ mod.name }}
                        </p>
                    </header>
                    <div class="card-content">
                        <p class="subtitle is-6 is-centered">
                            {{ mod.short_description }}
                        </p>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mods: Array
    },
    name: 'BrowseList'
}
</script>
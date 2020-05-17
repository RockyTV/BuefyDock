<template>
    <BrowseList :mods="mods" />
</template>

<script>
import BrowseList from '@/components/BrowseList'

export default {
    data() {
        return {
            mods: []
        }
    },

    async fetch() {
        const result = await fetch('https://spacedock.info/api/browse').then((res) => res.json())

        this.mods = result.result
    },

    components: {
        BrowseList
    }
}
</script>
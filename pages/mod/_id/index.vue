<template>
    <ModInfo :mod="mod" :name="mod.id" />
</template>

<script>
import ModInfo from '@/components/ModInfo';

export default {
    data() {
        return {
            mod: {}
        }
    },

    async fetch() {
        const modInfo = await fetch(`https://spacedock.info/api/mod/${this.$route.params.id}`).then((res) => res.json());

        this.mod = modInfo;
    },

    components: {
        'ModInfo': ModInfo
    }
}
</script>
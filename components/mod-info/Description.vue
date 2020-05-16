<template>
    <div>
        <br>
        <div class="content" v-html="mod.description_html">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mod: Object
    },
    name: 'ModDesc'
}
</script>
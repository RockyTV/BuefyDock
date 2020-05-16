<template>
    <div class="columns is-multiline">
        <div class="column is-4" v-for="mod in mods">
            <ListEntry :mod="mod" />
        </div>
    </div>
</template>

<script>
import BrowseListEntry from './browse-list/ListEntry'

export default {
    props: {
        mods: Array,
    },

    name: 'BrowseList',

    components: {
        'ListEntry': BrowseListEntry
    }
}
</script>
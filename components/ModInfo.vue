<template>
    <div class="box">
        <div class="media-content">
            <ModDetails :author="mod.author" :downloads="mod.downloads" :followers="mod.followers" :license="mod.license" :website="mod.url" :gameversion="mod.versions[0].game_version" :name="mod.name" :background="mod.background" />

            <b-tabs position="is-centered" class="block" :activeTab.sync="activeTab">
                <b-tab-item label="description">
                    <ModDesc :mod="mod" />
                </b-tab-item>

                <b-tab-item label="changelog">
                    <ModChangelog :versions="mod.versions" />
                </b-tab-item>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import ModDetails from './mod-info/Details'
import ModDesc from './mod-info/Description'
import ModChangelog from './mod-info/Changelog'
export default {
    props: {
        mod: Object,
        activeTab: {
            default: 0,
            type: Number
        }
    },
    name: 'ModInfo',
    components: {
        ModDesc,
        ModChangelog,
        ModDetails
    }
}
</script>
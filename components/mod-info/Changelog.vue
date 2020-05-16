<template>
    <div>
        <div class="card" v-for="version in versions">
            <div class="card-content">
                <div class="media-content">
                    <p>
                        <span class="title is-4">
                            {{ version.friendly_version }}
                        </span> 
                        <span class="subtitle">
                            for Kerbal Space Program {{ version.game_version }}
                        </span>
                    </p>

                    <p class="subtitle is-6">
                        Uploaded on {{ version.created | format_date }}
                    </p>
                </div>
                <br>
                <div class="content">
                    <p v-if="version.changelog" v-html="version.changelog"></p>
                    <p v-else><i>No changelog provided</i></p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-footer-item"><b-icon icon="download" />Download</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        versions: Array
    },

    name: 'ModChangelog'
}
</script>
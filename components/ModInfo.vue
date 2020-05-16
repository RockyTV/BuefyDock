<template>
    <div class="box">
        <div class="media media-center">
            <figure class="image" width="640">
                <img class="has-ratio" :src="'https://spacedock.info' + mod.background" alt="placeholder image" width="640" height="480" />
            </figure>
        </div>
        <div class="media-content">
            <div class="has-text-centered">
                <p class="is-size-4">
                    <strong>{{ mod.name }}</strong>
                </p>
                <p>
                    <span class="has-text-left">
                        <b-icon icon="copyright" class="has-text-info" /> <span class="has-text is-size-6">
                            License:
                        </span> 
                        <span class="is-size-5">
                            {{ mod.license }}
                        </span>
                    </span>
                    <span class="has-text-right">
                        <b-icon icon="account" class="has-text-info" /> <span class="has-text is-size-6">
                            Author:
                        </span> 
                        <span class="is-size-5">
                            {{ mod.author }}
                        </span>
                    </span>
                </p>
                <p>
                    <span class="has-text-left">
                        <b-icon icon="check" class="has-text-info" /> <span class="has-text is-size-6">
                            Game Version:
                        </span> 
                        <span class="is-size-5">
                            {{ mod.versions[0].game_version }}
                        </span>
                    </span>
                    <span class="has-text-right">
                        <b-icon icon="link" class="has-text-info" /> <span class="has-text is-size-6">
                            Website:
                        </span> 
                        <span class="is-size-5">
                            <a :href="mod.website">Click here</a>
                        </span>
                    </span>
                </p>
                <p>
                    <span class="has-text-left">
                        <b-icon icon="download" class="has-text-info" /> <span class="has-text is-size-6">
                            Downloads:
                        </span> 
                        <span class="is-size-5">
                            {{ mod.downloads }}
                        </span>
                    </span>
                    <span class="has-text-right">
                        <b-icon icon="heart" class="has-text-info" /> <span class="has-text is-size-6">
                            Followers:
                        </span> 
                        <span class="is-size-5">
                            {{ mod.followers }}
                        </span>
                    </span>
                </p>
            </div>
            <br>
            <div class="content" v-html="mod.description">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mod: Object
    },
    name: 'ModInfo'
}
</script>
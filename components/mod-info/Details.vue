<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-16by9">
                <img :src="'https://spacedock.info' + background" alt="mod background" />
            </figure>
        </div>

        <div class="card-content">
            <div class="has-text-centered">
                <p class="is-size-4">
                    <strong>{{ name }}</strong>
                </p>

                <div>
                    <span class="has-text-left">
                        <b-icon icon="copyright" class="has-text-info" />
                        <span class="has-text is-size-6">
                            License:
                        </span> 

                        <span class="is-size-5">
                            {{ license }}
                        </span>
                    </span>

                    <span class="has-text-right">
                        <b-icon icon="account" class="has-text-info" /> 
                        <span class="has-text is-size-6">
                            Author:
                        </span> 

                        <span class="is-size-5">
                            {{ author }}
                        </span>
                    </span>
                </div>

                <div>
                    <span class="has-text-left">
                        <b-icon icon="check" class="has-text-info" />
                        <span class="has-text is-size-6">
                            Game Version:
                        </span> 
                        <span class="is-size-5">
                            {{ gameversion }}
                        </span>
                    </span>
                    <span class="has-text-right">
                        <b-icon icon="link" class="has-text-info" />
                        <span class="has-text is-size-6">
                            Website:
                        </span>

                        <span class="is-size-5">
                            <a :href="website">Click here</a>
                        </span>
                    </span>
                </div>

                <div>
                    <span class="has-text-left">
                        <b-icon icon="download" class="has-text-info" />
                        <span class="has-text is-size-6">
                            Downloads:
                        </span>

                        <span class="is-size-5">
                            {{ downloads }}
                        </span>
                    </span>

                    <span class="has-text-right">
                        <b-icon icon="heart" class="has-text-info" />
                        <span class="has-text is-size-6">
                            Followers:
                        </span>

                        <span class="is-size-5">
                            {{ followers }}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        author: String,
        background: String,
        downloads: Number,
        followers: Number,
        gameversion: String,
        license: String,
        name: String,
        website: String,
    },

    name: 'ModDetails'
}
</script>
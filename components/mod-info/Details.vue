<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-16by9">
                <img :src="'https://spacedock.info' + background" alt="mod background" />
            </figure>
        </div>

        <div class="card-content">
            <p class="is-size-4 has-text-centered media-content">
                <strong>{{ name }}</strong>
            </p>

            <br>

            <div class="columns is-centered">

                <div class="column">
                    <div class="columns is-centered">
                        <div class="column is-3">
                            <div>
                                <b-icon icon="copyright" class="has-text-info" />
                                <span class="has-text is-size-6">
                                    License:
                                </span>

                                <span class="is-size-5">
                                    {{ license }}
                                </span>
                            </div>

                            <div>
                                <b-icon icon="check" class="has-text-info" />
                                <span class="has-text is-size-6">
                                    Game Version:
                                </span>
                                <span class="is-size-5">
                                    {{ gameversion }}
                                </span>
                            </div>

                            <div>
                                <b-icon icon="download" class="has-text-info" />
                                <span class="has-text is-size-6">
                                    Downloads:
                                </span>

                                <span class="is-size-5">
                                    {{ downloads }}
                                </span>
                            </div>

                        </div>

                        <div class="column is-2">
                            <div>
                                <b-icon icon="account" class="has-text-info" />
                                <span class="has-text is-size-6">
                                    Author:
                                </span>

                                <span class="is-size-5">
                                    {{ author }}
                                </span>
                            </div>
                            <div>
                                <b-icon icon="link" class="has-text-info" />
                                <span class="has-text is-size-6">
                                    Website:
                                </span>

                                <span class="is-size-5">
                                    <a :href="website">Click here</a>
                                </span>
                            </div>

                            <div>
                                <b-icon icon="heart" class="has-text-info" />
                                <span class="has-text is-size-6">
                                    Followers:
                                </span>

                                <span class="is-size-5">
                                    {{ followers }}
                                </span>
                            </div>
                        </div>
                    </div>
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
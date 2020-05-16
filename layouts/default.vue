<template>
    <section>
        <b-navbar type="is-primary">
            <template slot="brand">
                <b-navbar-item>BeaufyDock</b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#">
                    Home
                </b-navbar-item>
                <b-navbar-item href="#">
                    Browse
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-light">
                            <strong>Register</strong>
                        </a>
                        <a class="button is-dark">
                            Log in
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <div class="container">
            <br>
            <Nuxt />
            <br>
        </div>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>Made with <b-icon icon="heart" /> by Kerbal Space Program fans</p>
                <p class="has-text">
                    <b-icon icon="github" size="is-large" />
                    <b-icon icon="discord" size="is-large" />
                    <b-icon icon="chat" size="is-large" />
                    <b-icon icon="email" size="is-large" />
                </p>
            </div>
        </footer>
    </section>
</template>
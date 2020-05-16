<template>
    <section>
        <div class="container">
            <b-navbar type='is-primary'>
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
            <br>
            <Nuxt />
        </div>
    </section>
</template>
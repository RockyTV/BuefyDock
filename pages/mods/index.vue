<template>
    <section>
        <div class="columns">
            <div class="column" v-for="mod in mods">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <header class="card-header">
                        <p class="card-header-title is-centered">
                            {{ mod.name }}
                        </p>
                    </header>
                    <div class="card-content">
                        <p class="subtitle is-6 is-centered">
                            {{ mod.description }}
                        </p>
                    </div>
                </div>  
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            mods: [
                {
                    name: 'A Test Mod 1',
                    author: 'TestUser1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lorem ipsum, quis fringilla libero vulputate quis.'
                },
                {
                    name: 'A Test Mod 2',
                    author: 'TestUser2',
                    description: 'Aenean finibus est sed ante imperdiet, quis facilisis tellus tincidunt.'
                },
                {
                    name: 'A Test Mod 3',
                    author: 'TestUser3',
                    description: 'Sed et nisl ante. Morbi vitae nisl id neque eleifend varius. Aliquam in ipsum gravida, tempus felis ultrices, vulputate nisi.'
                },
            ]
        }
    }
}
</script>
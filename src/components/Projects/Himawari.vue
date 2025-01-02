<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Himawari2D"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 500, height: undefined }"
    >
    
    <h3>Himawari2D</h3>
    <p>Himawari2D is a small 2D game engine I developed as a Professional Aptitude Project (PAP) in my last year of highschool.</p>
    <div class="status-bar">
        <p class="status-bar-field">Made using: Java, C++</p>
        <p class="status-bar-field">Status: <span class="good">Released</span></p>
        <p class="status-bar-field">Source: <a href="https://github.com/Sagiri721/Himawari-2d">Github</a></p>
    </div>

    <p>Although limited, Himawari is capable of powering basic games that don't require much computational power, here are some of it's features:</p>
    <div class="columns">
        <div>
            <ul>
                <li>2D sprite/animation rendering</li>
                <li>Collision detection</li>
                <li>Basic physics</li>
                <li>Sound</li>
                <li>Input handling</li>
                <li>Entity component system</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Permanent storage with SQLite database</li>
                <li>Custom map tiler and object placer</li>
                <li>Particle emission</li>
                <li>Shader rendering</li>
                <li>Extremely bare bones multiplayer framework</li>
            </ul>
        </div>
    </div>

    <p>Himawari also comes with a basic <a href="https://github.com/Sagiri721/Himawari-SDK">GUI</a> and markdown <a href="https://github.com/Sagiri721/Himawari-Docs">markdown documentation</a></p>

    <img class="small-image bevel" src="../../assets/projects/h-example-1.png" alt="">
    <p class="legend">Fig1 - Super Mario All Stars recreated in Himawari2D</p>

    </Window>
</template>

<style scoped>

.small-image {
    width: 400px;
    height: auto;
    
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.good {
    color: green;
}

.legend {
    
    text-align: center;
    font-style: italic;
}

</style>
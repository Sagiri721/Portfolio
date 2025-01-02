<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Raylib visual novel library"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 500, height: undefined }"
    >
    
    <h3>GLVNE</h3>
    <p>GLVNE is what we are calling our <a href="https://www.raylib.com/">Raylib</a> library to allow any type of creator to easily create visual novels / sound novels / adventure games.</p>
    <div class="status-bar">
        <p class="status-bar-field">Made using: C++, Raylib</p>
        <p class="status-bar-field">Status: <span class="wip">WIP</span></p>
        <p class="status-bar-field">Source: Soon...</p>
    </div>
    
    <p>This project is inspired by the likes of <a href="https://www.renpy.org/">Renpy</a> but we aim to make it more artistically (and programmatically) customizable, with features like: </p>
    <ul>
        <li>Powerful custom scenes that use with Raylib</li>
        <li>Shader language support</li>
        <li>Custom scripting language</li>
        <li>GUI framework</li>
        <li>Powerful editor</li>
        <li>etc...</li>
    </ul>
    
    <img class="small-image bevel" src="../../assets/projects/g-example-1.png" alt="an example scene of GLVNE">
    <p class="legend">Fig1 - An example scene of GLVNE with GUI controls and text effects applied</p>

    </Window>
</template>

<style scoped>

.small-image {
    width: 450px;
    height: auto;
    
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.legend {
    
    text-align: center;
    font-style: italic;
}

</style>
<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="OpenGL 3D Renderer"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 500, height: undefined }"
    >
    
    <h3>3D Renderer</h3>
    <p>A basic 3D renderer originally made to be an extension of the Himawari game engine.</p>
    <p>In the process of optimizations, can run either fully on the CPU or use the GPU</p>
    <div class="status-bar">
        <p class="status-bar-field">Made using: Java, OpenGL</p>
        <p class="status-bar-field">Status: <span class="bad">Stalled</span></p>
        <p class="status-bar-field">Source: <a href="https://github.com/Sagiri721/Himawari3D">Github</a></p>
    </div>

    <br>
<!-- 
    <p>Due to frustrations with a bug and university work taking over my time, I never took this project to it's fullest potential, although it is still able to: </p>
    <ul>
        <li>Read and diplay simple wavefront files</li>
        <li>Sort pixels with a z-buffer</li>
        <li>Move, scale and rotate objects</li>
        <li>Render a camera view</li>
        <li>Render a direct light source</li>
        <li>Cut offscreen triangles</li>
    </ul> -->

    <img class="full-image bevel" src="../../assets/projects/r-example-1.gif" alt="two objects spinning">
    <p class="legend">Fig1 - A Utah teapot and a cube rotating and overlapping</p>

    </Window>
</template>

<style scoped>

.full-image {
    width: 470px;
    height: auto;
    
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.good {
    color: red;
}

.legend {
    
    text-align: center;
    font-style: italic;
}

</style>
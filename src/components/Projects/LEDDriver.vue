<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="LEDC68 Driver"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 300, height: undefined }"
    >
    
    <h4>LEDC68 MicroPython Driver</h4>
    <p>A MicroPython driver for the LED.C68 7 segment display (Old Gotek Display)</p>
    
    <img class="full-image" src="../../assets/projects/LEDC68.jpg" alt="LED68">
    <p class="legend">Fig1 - LEDC68 displaying the temperature from a Raspberry Pi Pico</p>

    <hr>

    <div class="status-bar">
        <p class="status-bar-field">Made using: MicroPython</p>
        <p class="status-bar-field">Status: <span class="good">Released</span></p>
        <p class="status-bar-field">Source: <a href="https://gist.github.com/Sagiri721/7b2ba704f3a814e326441402c241b6f0">Github</a></p>
    </div>
    <br>

    </Window>
</template>

<style scoped>

.full-image {
    width: 270px;
    height: auto;
    
    display: block;
    margin-left: auto;
    margin-right: auto;
}

h4 {
    text-align: center;
    font-size: 1.5em;

}

.good {
    color: red;
}

.legend {
    
    text-align: center;
    font-style: italic;
}

</style>
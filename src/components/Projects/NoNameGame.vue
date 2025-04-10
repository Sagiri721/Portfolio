<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="No name game lol"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 300, height: undefined }"
    >
    
    <h4>11th grade recycling game</h4>
    <p>It was coded as part of a high school Year 11 project on computer recycling.</p>
    <p>I worked mostly on graphics and coding, most sprites and tilesets were made by me, as well as the movement physics</p>

    
    <img class="full-image bevel" src="../../assets/projects/nonamegame.png" alt="" srcset="">

    <hr>

    <div class="status-bar">
        <p class="status-bar-field">Made with Unity</p>
        <p class="status-bar-field">C#</p>
        <a href="https://sagiri721.itch.io/nonamegamelol" class="status-bar-field">Visit itch.io page!</a>
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
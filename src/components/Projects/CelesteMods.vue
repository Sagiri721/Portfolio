<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Celeste modding"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 300, height: undefined }"
    >
    
    <h4>Static</h4>
    <p>Static is a short mod I made for the game "Celeste".</p>
    <p>The mod comprises of a custom stage which makes use of custom mechanics. I take no credit for the art, music, etc. Only the level design</p>
    
    <a href="https://gamebanana.com/mods/572524"><img class="full-image bevel" src="https://gamebanana.com/mods/embeddables/572524?type=large"/></a>

    <hr>


    <div class="status-bar">
        <p class="status-bar-field">Made for <a href="https://store.steampowered.com/app/504230/Celeste/">Celeste</a></p>
        <a href="https://gamebanana.com/mods/572524" class="status-bar-field">Visit Gamebanana page!</a>
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
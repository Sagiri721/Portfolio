<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Hunger tower"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 300, height: undefined }"
    >
    
    <h4>Hunger tower</h4>
    <p>Hunger Tower is a stealth game where you are a vampire trying to find a cure to your vampirism by exploring a tower filled with monsters.</p>
    <p>It was our submission to the FCUP GameJam 2024. Where the theme was "You are what you eat"</p>
    
    <img class="full-image bevel" src="../../assets/projects/hungertower.png" alt="" srcset="">

    <hr>

    <div class="status-bar">
        <p class="status-bar-field">Made with Unity</p>
        <p class="status-bar-field">C#</p>
        <a href="https://sagiri721.itch.io/hunger-tower" class="status-bar-field">Visit itch.io page!</a>
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
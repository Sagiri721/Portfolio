<script setup>
import Window from './../Window.vue';

const props = defineProps(['id']);    

function gotoSite() {
    window.open('https://chara-archive.firebaseapp.com/index.html', '_blank')
}

</script>

<template>
    <Window
        :id="props.id"
        title="The character archive"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 500, height: undefined }"
    >
    
    <h3>The character archive</h3>
    <p>A web application that allows writers and generally creative people to save and customize their original characters (OC), as well as related information like world building descriptions and such.</p>
    <div class="status-bar">
        <p class="status-bar-field">Made using: JQuery, Firebase</p>
        <p class="status-bar-field">Status: <span class="good">Released, frequent updates</span></p>
        <p class="status-bar-field">Source: <a href="https://github.com/MarySlaOq/character-archive">Github</a></p>
    </div>

    <br>
    <button @click="gotoSite">Open the character archive</button>
    <br><br>

    <!-- <p>The character archive currently only supports editable characters, but many of a character's attributes can be edited like their name, age, gender, birthday, likes, dislikes, etc...</p>
    <ul>
        <li>It supports multiple creators on a single character</li>
        <li>People can submit creator applications</li>
        <li>It allows both public and private world</li>
        <li>It has a relationship system between characters</li>
    </ul> -->
    
    <img class="small-image bevel" src="../../assets/projects/ca-example-1.png" alt="character archive">
    <p class="legend">Fig1 - Relationships between characters examplified</p>

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
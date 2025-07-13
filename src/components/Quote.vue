<script setup>
import { ref } from 'vue';
import { generateId } from '../data/Utils';
import Window from './Window.vue';

const data = ref({ content: "Loading", author: "Loading" });
const apiURL = "https://api.quotable.io/random";

const props = defineProps(['id']);

fetch(apiURL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(result => {
        data.value = {
            content: result.content,
            author: result.author
        };
    })
    .catch(error => {
        console.error("Error fetching quote:", error);
        data.value = { content: "Failed to load quote, try opening this and come back: " + apiURL, author: "Me" };
    }
);
    
</script>

<template>
    <Window
        :id="props.id"
        title="Inspirational Quote"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 250, height: undefined }"
    >
        <p class="quote">{{data.content}} </p>
        <hr/>
        <p>- <b>{{data.author}}</b></p>
    </Window>
</template>
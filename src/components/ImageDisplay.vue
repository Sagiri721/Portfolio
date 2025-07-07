<script setup>
import Window from './Window.vue';

const props = defineProps(['id', 'url', 'width', 'height', 'title']); 

const text = props.text || 'Image not found';
const url = props.url || '/Portfolio/img/missing.png';
const width = props.width || 20;

</script>

<template>
    <Window
        :id="props.id"
        title="Image Renderer"
        :resizeable="true"
        :closeable="true"
        :size="{ width: undefined, height: undefined }"
    >
    <div>
        <img class="bevel" :src="url" :alt="title" :style="{ width: `${width}px` }" /> 
        <p class="center">{{ title }}</p>
    </div>
    </Window>
</template>
<script setup>
import { ref, watch } from 'vue';
import Window from './Window.vue';

const props = defineProps(['id']);    
const zoom = ref(100);

watch(zoom, () => {

    document.body.style.zoom = `${zoom.value}%`;
});

</script>

<template>
    <Window
        :id="props.id"
        title="Zoom"
        :resizeable="true"
        :closeable="false"
        :size="{ width: 250, height: undefined }"
    >
    <div>
        <strong>Zoom {{ zoom }}%</strong><br>
        <hr>

        <div class="columns">
            <button @click="zoom = Math.max(50, zoom - 10)">Zoom out</button>
            <button @click="zoom = Math.min(200, zoom + 10)">Zoom in</button>
            <button @click="zoom = 100">Reset</button>
        </div>
    </div>
    </Window>
</template>
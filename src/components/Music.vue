<script setup>
import { computed, onUnmounted, ref, watch } from 'vue';
import { useMusic } from '../composables/Music';
import Window from './Window.vue';
import { formatSeconds, formatTime } from '../data/Utils';

const props = defineProps(['id']); 
const audio = useMusic();

const volume = ref(audio.globalVolume.value);
watch(volume, (value) => {
    audio.setVolume(value);
});

const queue = ref(audio.getQueue());
const current = ref(0);

const isPlaying = ref(false);

const listenedPercentage = computed(() => {
    return (audio.currentPlayTime.value / audio.audioDuration.value) * 100 + "%";
});

const play = () => {
    isPlaying.value = !isPlaying.value;

    if (isPlaying.value) audio.playSong(queue.value[current.value].song);
    else audio.pauseSong();
};

const next = () => {

    audio.stopAudio();
    isPlaying.value = true;
    
    // Get from queue circularly
    current.value = (current.value + 1) % queue.value.length;
    audio.playSong(queue.value[current.value].song);
};

const previous = () => {

    audio.stopAudio();
    isPlaying.value = true;

    // Get from queue circularly
    current.value = (current.value - 1 + queue.value.length) % queue.value.length;
    audio.playSong(queue.value[current.value].song);
};

onUnmounted(() => {
    // Stop audio when window is closed
    audio.stopAudio();
});

</script>

<template>
    <Window
        :id="props.id"
        title="Waveform Music Player"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 300, height: undefined }"
    >

    <div>
        <p class="name">{{ queue[current].name }}</p> 
        <p class="artist">{{ queue[current].artist }}</p>

        <img class="album center bevel" :src="queue[current].image" alt="album cover">
        <br>
        
        <div class="columns">
            <p> {{ formatSeconds(audio.currentPlayTime.value) }} </p>
            <p>{{ formatTime(audio.audioDuration.value) }}</p>
        </div>
        <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" :style="{ width: listenedPercentage }" />
        </div>

        <br><br>
        <div class="audio-controls">
            <button @click="previous">Previous</button>
            <button @click="play">{{ isPlaying ? "Pause" : "Play" }}</button>
            <button @click="next">Next</button>
        </div>

        <div class="field-row" style="width: 300px">
            <label for="range23">Low</label>
            <input id="range23" type="range" min="1" max="100" v-model="volume" />
            <label for="range24">High</label>
        </div>
    </div>

    </Window>
</template>

<style scoped>

.album {

    width: 270px;
    height: 270px;
    object-fit: cover;
}

.audio-controls {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.name {
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    margin-bottom: -5px;
}

.artist {
    text-align: center;
}

#range23 {

    width: 230px;
}

</style>
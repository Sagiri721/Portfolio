<script setup>

import { ref } from 'vue';
import Window from './Window.vue';
import { usePrograms } from '../composables/Programs';
import { generateId } from '../data/utils';

const program = usePrograms();

const closeAll = () => program.closeAllPrograms();

const cpuUsage = ref(Math.floor(Math.random() * 100));
const props = defineProps(['id', 'title', 'resizeable', 'closeable']);

// Open a new window with an inspirational quote
const newWindow = () => {

    program.openProgram("quote", generateId());
};

const openLinguisticQualifications = () => {
    program.openProgram("linguistics", generateId());
};

// CPU usage update
setInterval(() => {

    // Fluctuate a little
    let increment = Math.floor(Math.random() * 10) - 5;
    
    // Simulate cpu skyrocket
    let shouldSpike = Math.random() < 0.1;
    increment = shouldSpike ? Math.floor(Math.random() * 50) : increment;

    cpuUsage.value = Math.min(100, Math.max(0, cpuUsage.value + increment));

    // Clamp
    cpuUsage.value = Math.min(100, Math.max(0, cpuUsage.value));

}, 2000);

</script>

<template>
    <Window
        :id="props.id"
        :title="props.title"
        :resizeable="props.resizeable"
        :closeable="props.closeable"
        :start_position="{ x: 10, y: 10 }"
        :size="{ width: 300, height: undefined }"
    >

        <ul class="tree-view">
            <li><strong> Welcome to my universe ✨</strong></li>
            <li>
                Me!
                <ul>
                <li>About me</li>
                <li @click="openLinguisticQualifications">Linguistic qualifications</li>
                <li>Curriculum Vitae</li>
                </ul>
            </li>
            <li>
                <details open>
                <summary>Projects</summary>
                <ul>
                    <li>Himawari2D</li>
                    <li>GLVNE</li>
                    <li>Basic 3D renderer</li>
                    <li>Character archive</li>
                </ul>
                </details>
            </li>
            <li @click="newWindow">Open a window!</li>
            <li>Shoot me an email</li>
        </ul>

        <br>
        <button @click="closeAll" class="default">Close all windows</button>
        <button>Info</button><br>

        <br>
        
        <div class="status-bar">
            <p class="status-bar-field">Press F1 for source</p>
            <p class="status-bar-field">0.0.1</p>
            <p class="status-bar-field">CPU Usage: {{ cpuUsage }}%</p>
        </div>
    </Window>
</template>
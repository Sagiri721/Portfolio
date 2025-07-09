<script setup>

import { onMounted, ref } from 'vue';
import Window from './Window.vue';
import { usePrograms } from '../composables/Programs';
import { generateId, getVersion } from '../data/Utils';

const program = usePrograms();

const closeAll = () => program.closeAllPrograms();

const cpuUsage = ref(Math.floor(Math.random() * 100));
const props = defineProps(['id', 'title', 'resizeable', 'closeable']);

function openProgram(name, options = {}) {
    program.openProgram(name, generateId(), options);
}

onMounted(() => {

    openProgram("zoom", {start_position: { x: 10, y: 470 } });

    openProgram("me", {start_position: { x: 680, y: 10 } });
    openProgram("images", {
        url: "/Portfolio/img/Cropped_Image.jpg", title: "A picture of me", width: 300,
        start_position: { x:330 , y: 10 }
    });
});

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
                <li @click="openProgram('me')">About me</li>
                <li @click="openProgram('linguistics')">Linguistic qualifications</li>
                <li @click="openProgram('technical')">Technical qualifications</li>
                <li @click="openProgram('achievements')">Achievements</li>
                <li @click="openProgram('network')">Contact</li>
                <li><a href='tiagobarrossimoes_cv_09_5_2025.pdf'>Curriculum Vitae</a></li>
                </ul>
            </li>
            <li>
                <details open>
                <summary>Projects</summary>
                
                <ul>

                    <li>
                        <details open>
                        <summary>Games</summary>
                        
                        <ul>
                            <li @click="openProgram('nonamegame')">11th grade school project</li>
                            <li @click="openProgram('hungertower')">Hunger tower</li>
                            <li @click="openProgram('celestemods')">Celeste modding</li>
                        </ul>
                        </details>
                    </li>

                    <li @click="openProgram('himawari')">Himawari2D</li>
                    <li @click="openProgram('glvne')">GLVNE</li>
                    <li @click="openProgram('renderer')">Basic 3D renderer</li>
                    <li @click="openProgram('chara-arquive')">Character archive</li>
                </ul>
                </details>
            </li>
            <li>
                <details open>
                <summary>Applications</summary>
                <ul>
                    <li @click="openProgram('quote')">Quote me!</li>
                    <li @click="openProgram('music')">Waveform music player</li>
                    <!--<li @click="openProgram('explorer', {url: 'about:blank'})">Internet explorer</li>-->
                    <li @click="openProgram('prompt')">Terminal</li>
                </ul>
                </details>
            </li>
            <a href="mailto:tiagobarrossao@gmail.com">Shoot me an email!</a>
        </ul>

        <br>
        <button @click="closeAll" class="default">Close all windows</button>
        <button @click="openProgram('system')">Info</button><br>

        <br>
        
        <div class="status-bar">
            <p class="status-bar-field">Press F2 for source</p>
            <p class="status-bar-field"> {{ getVersion() }}</p>
            <p class="status-bar-field">CPU Usage: {{ cpuUsage }}%</p>
        </div>
    </Window>
</template>
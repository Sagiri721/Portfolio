<script setup>
import { usePrograms } from '../composables/Programs';
import { generateId, myAge } from '../data/Utils';
import Window from './Window.vue';

const props = defineProps(['id']);    
const program = usePrograms();

function openMusicPlayer() {
    program.openProgram('music', generateId());
}

function openInfo() {
    program.openProgram('system', generateId());
}

// Open image
/*program.openProgram("images", generateId(), {
    url: "/Portfolio/img/Cropped_Image.jpg", title: "A picture of me", width: 300,
    start_position { y: }
});*/

</script>

<template>
    <Window
        :id="props.id"
        title="Sagiri721"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 420, height: undefined }"
    >
    
        <div class="columns square">    

            <div>

                <div class="subtitle">
                    <h3>Hi! I'm Tiago </h3>
                </div>

                <p class="body">
                    I'm a {{ myAge() }}, a software engineering student focused on <strong>graphics and systems programming</strong>,
                    with a strong interest in <strong>game development</strong> and <strong>video-game modding</strong>. I am experienced in building <strong>custom engines</strong>, <strong>rendering systems</strong>, and <strong>backend services</strong>. I'm particularly interested in systems design, computer graphics, operating systems, and mathematics, and I also enjoy traditional painting and electronics outside of coding.
        
                    I learned to code with GameMaker 7 when I was around 14 and I've been making stuff ever since.
                </p>

                <p class="body">
                    <p>If anything comes up you can contact me through <a href="mailto:tiagobarrossao@gmail.com">email</a> or <a href="https://www.linkedin.com/in/tiago-barros-197aab2aa/">LinkedIn</a></p>
        
                    <p>Without further ado, Welcome to my portfolio! I hope you enjoy your stay. <br> Listen to some music while you're here!</p> 
                    <button @click="openMusicPlayer"> Open the music player </button>
                    <button @click="openInfo"> Customize your system </button>
        
                    <br><br>
                    <div class="status-bar">
                        <p class="status-bar-field">Psst! You can drag windows around to your liking. Try it out!</p>
                    </div>
                </p>

            </div>

            <!-- <img class="bevel" src="../assets/img/Cropped_Image.jpg" alt="A picture of me" /> -->
        </div>

    </Window>
</template>

<style scoped>

.subtitle {
    text-align: center;
    margin-bottom: 20px;
}

.subtitle h3 {
    margin: 0;
    font-size: 2.5em;
}

.body {
    
    text-align: justify;
    line-height: 1.5em;
}

.square {
    align-items: center;
}

.square img {
    width: 200px;
    height: 200px;
    margin: auto 30px;
    display: block;
}

</style>
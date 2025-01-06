<script setup>
import Window from './Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Achievements"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 340, height: undefined }"
    >
   
        <div>
            <!-- <ul>
                <li>ToPAS (2022)</li>
                <li>ToPAS (2023)</li>
                <li>Tecla 2023</li>
                <li>FCUP GameJam 2024</li>
            </ul> -->

            <div class="achievement-container">

                <div class="window">
                    <p><b>ToPAS (2022)</b></p>
                    <p>Programming contest for highschoolers</p>
                    <p class="bronze"><b>3rd place finish</b></p>
                </div>

                <div class="window">
                    <p><b>ToPAS (2023)</b></p>
                    <p>Programming contest for highschoolers</p>
                    <p><b>8th place finish</b></p>
                </div>

                <div class="window">
                    <p><b>Tecla 2023</b></p>
                    <p>Programming tournament for students</p>
                </div>

                <div class="window">
                    <p><b>FCUP GameJam 2024</b></p>
                    <p>Game development contest</p>
                    <p class="silver"><b>2nd place finish</b></p>
                </div>

            </div>
        </div>

    </Window>
</template>

<style scoped> 

.achievement-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.achievement-container > div {
    width: 100px;
    margin: 5px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
}

.bronze {
    text-shadow: 0 0 5px #cd7f32; 
}

.silver {
    text-shadow: 0 0 5px #494949; 
}

</style>
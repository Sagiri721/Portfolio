<script setup>
import { ref } from 'vue';
import { usePrograms } from '../composables/Programs';
import { changeBackground, getBackgroundColor, getVersion } from '../data/Utils';
import Window from './Window.vue';

const props = defineProps(['id']);
const programs = usePrograms();
const backgroundColor = ref(getBackgroundColor());

const time = ref(new Date().toLocaleTimeString());

setInterval(() => {
    time.value = new Date().toLocaleTimeString();
}, 1000);

const saveBackground = (e) => {
    changeBackground(e.target.value);
};

</script>

<template>
    <Window
        :id="props.id"
        title="System"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 500, height: undefined }"
    >

    <h3>SagiriOS 98</h3>

    <div>

        <div class="columns">
            <div>
                <p><strong>Version:</strong> {{ getVersion() }} C  </p>
                <p><strong>Registered to: </strong> 65437-OEM-0015435-345664</p>
            </div>
            <div>
                <p><strong>Authentic AMD</strong> <strong>32.0MB RAM</strong></p>
                <p><strong>Running processes:</strong> {{ programs.processCount }}</p>
            </div>

        </div>
        
        <p><b>System language</b>: <span class="fi fi-gb"></span></p>
        <p><b>System time</b>: {{ time }} {{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</p>

        <hr>

        <p>Inspired by the 1990 Cern <a href="https://worldwideweb.cern.ch/">WorldWideWeb</a> and Windows 98</p>
        <p><strong>Powered by: </strong> Vue & Vite</p>
        <p><strong>Graphics: </strong> <a href="https://jdan.github.io/98.css/">98.css</a> </p>
        <p><strong>Flags: </strong> <a href="https://github.com/lipis/flag-icons">Lipis flag icons</a> </p>

        <hr>
        <p><b>System background</b></p>
        <select @input="saveBackground" v-model="backgroundColor">
            <option>Gray</option>
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
            <option>Red</option>
        </select>

    </div>
   
    </Window>
</template>
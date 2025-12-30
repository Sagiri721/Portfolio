<script setup>
import Window from '../Window.vue';
import { ref, watch } from 'vue';
import { loadAccessibilitySettings, saveAccessibilitySettings } from '../../data/Utils';

const props = defineProps(['id']);    
const size = ref(15);
const font = ref('default');
const highContrast = ref(false);

watch(size, (newSize) => {
    document.documentElement.style.setProperty('--accessibility-font-size', `${newSize}px`);
}, { immediate: true });

watch(font, (newFont) => {
    let fontFamily = 'inherit';
    if (newFont === 'arial') fontFamily = 'Arial, sans-serif';
    else if (newFont === 'dislexyc') fontFamily = '"OpenDyslexia", Arial, sans-serif';

    document.documentElement.style.setProperty('--accessibility-font-family', fontFamily);
}, { immediate: true });

watch(highContrast, (isEnabled) => {
    if (isEnabled) {
        document.documentElement.style.setProperty('--accessibility-text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--accessibility-background-color', '#000000');
    } else {
        document.documentElement.style.setProperty('--accessibility-text-color', 'inherit');
        document.documentElement.style.setProperty('--accessibility-background-color', 'inherit');
    }
}, { immediate: true });

</script>

<template>
    <Window
        :id="props.id"
        title="Accessibility Menu"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 250, height: undefined }"
    >
    <div>
        <strong>Accessibility Options</strong><br><br>
        <div>
            <label>
                <label for="font-select">Font </label>
                <select id="font-select" v-model="font">
                    <option value="default" selected>Default</option>
                    <option value="arial" selected>Arial</option>
                    <option value="dislexyc">Open Dyslexic</option>
                </select>

            </label>
        </div>
        <hr>
        <div>
            <label>
                  <div class="field-row">
                    <input type="checkbox" id="example1" v-model="highContrast" />
                    <label for="example1"> Enable High Contrast Mode</label>
                  </div>
            </label>
        </div>
        <hr>
        <div>
            <label>
                <label for="range23">Font Size</label> <br>
                <div class="field-row" style="width: 150px">
                    <label for="range23">Normal</label>
                    <input id="range23" type="range" min="12" max="30" v-model="size" />
                    <label for="range24">High</label>
                </div>
            </label>
        </div>
    </div>
    </Window>
</template>

<style scoped>

label {
    padding-right: 10px;
}

</style>
<script setup>

import MenuBar from '../components/MenuBar.vue';
import Music from '../components/Music.vue';
import { usePrograms } from '../composables/Programs';
import { generateId, loadBackgroundColor } from '../data/Utils';

loadBackgroundColor();

// Load source code when F1 is pressed
window.addEventListener('keydown', (e) => {
    if (e.key === 'F2') {
        window.open('https://github.com/Sagiri721/Portfolio/tree/master', '_blank');
    }
});

</script>
<template>
    <div>

        <div id="desktop">

            <MenuBar 
                :id="generateId()"
                title="WordWideWeb"
                :resizeable="false"
                :closeable="false"
            />

        </div>

    </div>
</template>

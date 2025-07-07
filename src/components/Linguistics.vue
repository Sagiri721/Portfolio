<script setup>
import Window from './Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Linguistic Qualifications"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 250, height: undefined }"
    >
    <div>
        <strong><span class="fi fi-pt"></span> Portuguese</strong>, Native speaker<br>
        <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" style="width: 100%;" />
        </div>    
    </div><br>
    <div>
        <strong><span class="fi fi-gb"></span> English</strong>, C1 level<br>
        <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" style="width: 85%;" />
        </div>
    </div><br>
    <div>
        <strong><span class="fi fi-jp"></span> Japanese</strong>, N3 level<br>
        <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" style="width: 55%;" />
        </div>
    </div>
    </Window>
</template>
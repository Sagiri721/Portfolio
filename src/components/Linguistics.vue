<script setup>
import Window from './Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Inspirational Quote"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 250, height: undefined }"
    >
    <p>
        <strong><span class="fi fi-pt"></span> Portuguese</strong>, Native speaker<br>
        <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" style="width: 100%;" />
        </div>    
    </p>
    <p>
        <strong><span class="fi fi-gb"></span> English</strong>, C1 level<br>
        <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" style="width: 85%;" />
        </div>
    </p>
    <p>
        <strong><span class="fi fi-jp"></span> Japanese</strong>, N2 level<br>
        <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" style="width: 65%;" />
        </div>
    </p>
    </Window>
</template>
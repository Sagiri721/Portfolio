<script setup>
import { usePrograms } from '../composables/Programs';
import Window from './Window.vue';

const props = defineProps({
    id: String,
    title: {
        type: String,
        default: 'Warning'
    },
    message: {
        type: String,
        default: 'This is a warning message'
    },
    type: {
        type: Number,
        default: 0
    }
});

const warnings = [
    "msg_information-0.png",
    "msg_warning-0.png",
    "msg_error-0.png",
    "msg_question-0.png"
];

function closeMe() {
    
    usePrograms().closeProgram(props.id);
}

</script>

<template>
    <Window
        :id="props.id"
        title="System"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 250, height: undefined }"
    >

        <div>

            <div class="gap">
                <img class="warning-icon" :src="'icons/' + warnings[props.type]" alt="Warning icon" />
                <p>{{ props.message }}</p>
            </div>

            <br>

            <div class="right">
                <button @click="closeMe">OK</button>
                <button @click="closeMe">Cancel</button>
            </div>

        </div>

    </Window>
</template>

<style scoped>

.gap {
    display: flex;
    gap: 10px;
}

.right {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
}

</style>
<script setup>
import FriendBadge from './FriendBadge.vue';
import Window from './Window.vue';

const props = defineProps(['id']); 

</script>

<template>
    <Window
        :id="props.id"
        title="Advertisement"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 300, height: undefined }"
    >
    <div>
        <FriendBadge />
    </div>
    </Window>
</template>

<style scoped>
h4 {
    text-align: center;
    font-size: 1.5em;
}
</style>
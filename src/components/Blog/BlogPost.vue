<script setup>
import GiscusComments from './Comments.vue'
import Loading from '../Loading.vue';
import { defineAsyncComponent, ref, watch } from 'vue';
import { effectAccessibilitySettings } from '../../data/Utils';

const props = defineProps(['metadata']);
const Content = ref(null);

// Watch for file changes
watch(() => props.metadata.file, (newFile) => {

    // Reste scroll
    const postElement = document.querySelector('.post');
    if (postElement) postElement.scrollTop = 0;

    Content.value = defineAsyncComponent({
        loader: () => import(`../../assets/blog/${newFile}`),
        loadingComponent: Loading,
        delay: 200
    });
}, { immediate: true });

</script>

<template>

    <div>
        <ul class="tags">
            <li class="tag" v-for="tag in props.metadata.tags" :key="tag">{{ tag }}</li>
        </ul>

        <component :is="Content" class="post" />
        
        <GiscusComments v-if="props.metadata.allow_comments" ></GiscusComments>
    </div>

</template>

<style scoped>

.tags {
    list-style: none;
    padding: 0;
    margin: 0 0 -20px 0;
    display: flex;
    gap: 5px;
}

.tag {
    
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    text-align: center;

    background-color: var(--tag-background-color, #e0e0e0);
}

.post {

    margin: 0%;
    padding: 0%;

    overflow: scroll;
    scrollbar-color: gray transparent;
    scrollbar-width: thin;

    font-size: var(--accessibility-font-size, 15px);
    font-family: var(--accessibility-font-family, inherit) !important;
}

.markdown-body {
    color: var(--accessibility-text-color, inherit);
    background-color: var(--accessibility-background-color, inherit);
}

</style>
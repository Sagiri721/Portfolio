<script setup>
import { onMounted } from 'vue';
import Window from '../Window.vue';

const props = defineProps(['id', 'dataTerm']);    

onMounted(() => {
    // Get the base URL for your deployed site
    const baseUrl = window.location.origin;
    
    const giscusScript = document.createElement("script");
    giscusScript.src = "https://giscus.app/client.js";
    giscusScript.setAttribute("data-repo", "Sagiri721/Portfolio");
    giscusScript.setAttribute("data-repo-id", "R_kgDONkvWkw");
    giscusScript.setAttribute("data-category", "Announcements");
    giscusScript.setAttribute("data-category-id", "DIC_kwDONkvWk84CvwnE");
    giscusScript.setAttribute("data-mapping", "specific");
    giscusScript.setAttribute("data-term", props.dataTerm || "test");
    giscusScript.setAttribute("data-strict", "0");
    giscusScript.setAttribute("data-reactions-enabled", "1");
    giscusScript.setAttribute("data-emit-metadata", "0");
    giscusScript.setAttribute("data-input-position", "top");
    // Use your custom theme!
    giscusScript.setAttribute("data-theme", `${baseUrl}/giscus-98.css`);
    giscusScript.setAttribute("data-lang", "en");
    giscusScript.setAttribute("crossorigin", "anonymous");
    giscusScript.async = true;

    const giscusContainer = document.querySelector("#giscusContainer");
    giscusContainer.appendChild(giscusScript);
});
</script>

<template>
    <div id="giscusContainer" ref="giscusContainer" class="giscus-98-wrapper"></div>
</template>

<style scoped>
.giscus-98-wrapper {
    max-height: 460px;
    overflow-y: auto;
    background: silver;
    padding: 2px;
    border: 2px groove silver;
}
</style>
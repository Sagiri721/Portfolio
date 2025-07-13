<script setup>
import { onMounted } from 'vue';
import Window from './Window.vue';

const props = defineProps(['id', 'url', 'title', 'filename']); 
const url = props.url || 'img/missing.png';

const gotoPDFPage = () => {
    window.open(url, '_blank');
};

const downloadPDF = () => {

    const link = document.createElement('a');
    link.href = url;
    link.download = props.filename || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const resizeIframe = () => {
    const iframe = document.querySelector('.pdf-viewer');
    if (iframe) {

        let newHeight = window.innerHeight - 200;
        newHeight = Math.min(newHeight, 630);

        iframe.style.height = `${newHeight}px`;
    }
};

onMounted(() => {
    resizeIframe();
});

</script>

<template>
    <Window
        :id="props.id"
        title="PDF Viewer"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 600, height: 800 }"
    >
    <div>
        <h4 class="center">{{ title }}</h4>
        <div class="columns">
            <button @click="gotoPDFPage">Goto PDFPage</button>
            <button @click="downloadPDF">Download PDF</button>
        </div>
        <hr>
        <iframe class="pdf-viewer bevel" width="580px" :src="url"></iframe>
    </div>
    </Window>
</template>

<style scoped>

iframe .pdf-viewer {
    border: none;
}

</style>
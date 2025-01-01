<script setup>

import MenuBar from '../components/MenuBar.vue';
import { generateId } from '../data/utils';

</script>
<template>
    <div>

        <MenuBar 
            :id="generateId()"
            title="WordWideWeb"
            :resizeable="false"
            :closeable="false"
        />

        <div id="desktop">

        </div>

    </div>
</template>

<script setup>
import BlogPost from './BlogPost.vue';
import Window from '../Window.vue';
import { onMounted, ref } from 'vue';
import { usePrograms } from '../../composables/Programs';
import { generateId } from '../../data/Utils';

const props = defineProps(['id']);    
const programs = usePrograms();

// Get all blog files
const blogPages = [
    { 
        file: "intro.md",
        icon: "icons/help_book_cool-4.png",
        date: ["2025/09/22"],
        author: "Tiago Barros",
        language: "gb",
        allow_comments: false
    },
    { 
        file: "tilemapping_is_cool.md",
        icon: "icons/paint_file-4.png",
        date: ["wip"],
        author: "Tiago Barros",
        language: "gb",
        allow_comments: true,
        tags: ["Game Dev", "Art"]
    }, 
    {
        file: "generating_surrealist_text_with_maths.md",
        icon: "icons/file_gears-2.png",
        date: ["18/10/2025", "19/10/2025"],
        author: "Tiago Barros",
        language: "gb",
        allow_comments: true,
        tags: ["Maths", "Art"]
    }
];

const openAccessibilitySettings = () => {

    var buttonPos = document.querySelector('.status-bar-field a').getBoundingClientRect();

    programs.openProgram("accessibility_settings", generateId(), {
        start_position: { x: buttonPos.left, y: buttonPos.top }
    });
};

const currentfile = ref(blogPages[0]);
const setFile = (file) => {
    currentfile.value = blogPages.find(f => f.file === file);
};

</script>

<template>
    <Window
        :id="props.id"
        title="Blog"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 1020, height: 720 }"
    >

        <div class="blog-table">
    
            <aside class="bevel dock">
                <p class="title"><strong>Welcome to my blog!</strong></p>
                <img class="banner" src="/img/under_construction.gif" alt="under construction"></img>
                <ul class="tree-view list">
                    <li v-for="file in blogPages" :key="file" @click="setFile(file.file)">
                        <img :src="file.icon" alt="icon"/>
                        <span>
                            {{ file.file.replaceAll('_', ' ').capitalize() }}
                            <small class="date"> ({{ file.date[file.date.length - 1] }})</small>
                        </span>
                    </li>
                </ul>
                
                <p class="footer">
                    All content on this website is licensed under a <a href=" https://creativecommons.org/licenses/by-sa/4.0/ ">Creative Commons Attribution-ShareAlike 4.0 International license</a>
                </p>
            </aside>

            <main class="content">

                <div class="post-wrapper">
                  
                    <BlogPost class="post" :metadata="currentfile"></BlogPost>

                  <div class="metadata">                                    
                    <div class="status-bar">
                        <p class="status-bar-field">Authorship: <strong> {{ currentfile.author }} </strong> </p>
                        <p class="status-bar-field">Last update: <strong> {{ currentfile.date[currentfile.date.length - 1]}} </strong> </p>
                        <p class="status-bar-field">Language: <span :class="'flag fi fi-' + currentfile.language"></span></p>
                        <p class="status-bar-field"><a @click="openAccessibilitySettings">Accessibility</a></p>
                    </div>
                  </div>
                </div>
              </main>
        </div>

    </Window>
</template>

<style scoped>

.blog-table {
    display: flex;
    height: 680px;
    overflow: hidden;
}

.dock {
    width: 240px !important;
}

.content {
    width: calc(100% - 240px);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.post-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}
  
.post {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 1rem;
}
    
  
.metadata {
    flex-shrink: 0;
    padding: 1rem;
}

.banner  {
    width: 180px;
    height: auto;

    display: block;
    margin-left: auto;
    margin-right: auto;
}

.title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
}

.list {
    margin: 10px;
}

.list li {
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 12px;
}

.list img {
    vertical-align: middle;
    margin-right: 8px;

    width: 16px;
    height: 16px;
}

.date {

    font-size: 10px;
    color: gray;
    margin-left: 5px;
}

.footer {
    text-align: center;
    padding: 10px;
}

</style>
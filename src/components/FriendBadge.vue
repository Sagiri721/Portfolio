<script setup>
const people = {
    Mary: {
        url: "https://www.canva.com/design/DAGoFoYc6WU/fJjpup-oI8ynK0ZqOYNEPg/edit?utm_content=DAGoFoYc6WU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        img: "mary-add.png"
    }, 
};

const props = defineProps(["list"]);

</script>

<template>
    <div class="list">
        <div v-for="value in (props.list || Object.keys(people) )">
            <a :href="people[value].url">
                <img class="bevel" :src="`badges/${people[value].img}`" alt="a badge of one of my friends">
            </a>
        </div>
    </div>
</template>

<style scoped>

.list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: space-between;
}

</style>
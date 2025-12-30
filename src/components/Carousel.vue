<script setup>
import { ref, watch } from 'vue';
import { usePrograms } from '../composables/Programs';
import { generateId } from '../data/Utils';

const props = defineProps({
  slides: Array,
  width: {
    type: Number,
    default: 400
  }
});

const currentSlide = ref(0);
const isLoading = ref(false);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + props.slides.length) % props.slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const program = usePrograms();
function openProgram(name, options = {}) {
    program.openProgram(name, generateId(), options);
}

const openImage = (url, title) => {
    openProgram("images", {
        url: url, title: title, width: 980
    });
};

</script>

<template>
    <div>
    
        <div class="carousel">
            <button class="carousel-btn prev" @click="prevSlide">◄</button>
            
            <div class="carousel-content">
                <img
                    v-if="isLoading"
                    src="/icons/loading.gif"
                    alt="Loading"
                    class="loader full-image bevel car-img"
                    :style="{ width: width + 'px' }"
                />
                <img
                    @click="() => openImage(slides[currentSlide].src, slides[currentSlide].alt)"
                    class="full-image bevel car-img" 
                    :src="slides[currentSlide].src" 
                    :alt="slides[currentSlide].alt"
                    :style="{ width: width + 'px' }"
                >
                <p v-if="slides[currentSlide].legend" class="legend">{{ slides[currentSlide].legend }}</p>
            </div>
            
            <button class="carousel-btn next" @click="nextSlide">►</button>
        </div>
    
        <div class="carousel-dots">
            <button 
                v-for="(slide, index) in slides" 
                :key="index"
                class="dot"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
            >
            </button>
        </div>
    </div>

</template>

<style scoped>
.carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
}

.carousel-content {
    flex: 1;
    text-align: center;
}

.carousel-btn {
    background: silver;
    border: 2px outset silver;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 16px;
    min-width: 40px;
    font-family: 'MS Sans Serif', sans-serif;

    margin: 0 -5px;
}

.carousel-btn:active {
    border-style: inset;
}

.carousel-btn:hover {
    background: #c0c0c0;
}

.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 15px 0;
}

.dot {
    width: 12px;
    height: 12px;
    background: silver;
    border: 2px outset silver;
    cursor: pointer;
    padding: 0;
}

.dot.active {
    background: #000080;
    border-style: inset;
}

.dot:hover {
    background: #c0c0c0;
}

.car-img {
    cursor: pointer;
}

</style>
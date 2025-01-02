<script setup>
import { onMounted, ref, watch } from 'vue'
import { Rectangle } from '../data/Rectangle';
import { usePrograms } from '../composables/Programs';

// Constants
const MARGIN = 32;
const HALF_MARGIN = MARGIN / 2;
const MINIMIZE_OVERLAP_THRESHOLD = 10;
const windowToRectangle = () => {

    const windowElement = document.getElementById(props.id + '-window');

    const thisWindowWidth = (dimensions.value.width? dimensions.value.width : windowElement.clientWidth + windowElement.offsetWidth) - HALF_MARGIN;
    const thisWindowHeight = (dimensions.value.height? dimensions.value.height : windowElement.clientHeight + windowElement.offsetHeight) - HALF_MARGIN;

    return new Rectangle(
        position.value.x - HALF_MARGIN, 
        position.value.y - HALF_MARGIN, 
        thisWindowWidth,
        thisWindowHeight
  );
}

const programs = usePrograms();

// Hindow handling
const closeMe = () => programs.closeProgram(props.id);
const isColliding = () => false; // TODO: Implement this function

// Window defining props
const props = defineProps(['id', 'title', 'body', 'resizeable', 'closeable', 'start_position', 'size', 'data']);

const minimized = ref(false);

// Window draggability
const isDragging = ref(false);
const position = ref({ x: 100, y: 100 });
const dimensions = ref({ width: props.size? props.size.width : 250, height: props.size? props.size.height : 80});
const mouse = ref({ x: 0, y: 0 });

window.addEventListener('mousemove', (event) => {

    if (isDragging.value) {
        // Handle dragging event
        const xx = event.clientX - mouse.value.x;
        const yy = event.clientY - mouse.value.y;
        position.value.x += xx;
        position.value.y += yy;
    }
    
    // Always update mouse positions
    mouse.value.x = event.clientX;
    mouse.value.y = event.clientY;
});

window.addEventListener('mouseup', () => {
    isDragging.value = false;
});

onMounted(() => {

  const calculateRandomPosition = () => {

    const windowElement = document.getElementById(props.id + '-window');

    const thisWindowWidth = (dimensions.value.width? dimensions.value.width : windowElement.clientWidth) + MARGIN;
    const thisWindowHeight = (dimensions.value.height? dimensions.value.height : windowElement.clientHeight) + MARGIN;

    const windowXX = window.innerWidth - thisWindowWidth;
    const windowYY = window.innerHeight - thisWindowHeight;

    return {
        x: Math.floor(Math.random() * windowXX),
        y: Math.floor(Math.random() * windowYY)
    };
  };

  // Find a non-colliding position (if possible)
  position.value = props.start_position || calculateRandomPosition();
  if (!props.start_position) {
    
    let tries = 0;
    while (isColliding() && tries < MINIMIZE_OVERLAP_THRESHOLD) {

        position.value = calculateRandomPosition();
        tries++;
    }
  }

  // Put html if needed
  if (props.data && props.data.html) {
    document.getElementById(props.id).innerHTML = props.data.html;
  }

});
</script>

<template>
  <div>
      <div
          :id="props.id + '-window'"
          class="window"
          :style="{
              display: minimized ? 'none' : 'block',
              position: 'absolute',
              margin: MARGIN + 'px',
              width: dimensions.width? dimensions.width + 'px' : 'auto',
              height: dimensions.height? dimensions.height + 'px' : 'auto',
              left: position.x + 'px',
              top: position.y + 'px'
          }"
      >
          <div class="title-bar" draggable="false" @mousedown="isDragging = true" :style="{ cursor: isDragging ? 'grabbing' : 'grab' }">
              <div class="title-bar-text">{{ props.title }}</div>

              <div class="title-bar-controls">
                  <button aria-label="Minimize" @click="minimized = !minimized"></button>
                  <button v-if="props.closeable" aria-label="Close" @click="closeMe"></button>
              </div>
          </div>
          <div class="window-body" draggable="false">
              <span :id="props.id">
                {{ props.body}}
                <slot></slot>
            </span>
          </div>
      </div>
  </div>
  <div
      :style="{
          display: minimized ? 'block' : 'none',
          position: 'absolute',
          margin: MARGIN + 'px',
          width: dimensions.width? dimensions.width + 'px' : 'auto',
          height: dimensions.height? dimensions.height + 'px' : 'auto',
          left: position.x + 'px',
          top: position.y + 'px'
      }"
  >
      <div class="window">
          <div class="title-bar inactive" draggable="false" @mousedown="isDragging = true" :style="{ cursor: isDragging ? 'grabbing' : 'grab' }">
              <div class="title-bar-text">{{ props.title }}</div>

              <div class="title-bar-controls">
                  <button aria-label="Restore" @click="minimized = !minimized"></button>
                  <button v-if="props.closeable" aria-label="Close" @click="closeMe"></button>
              </div>
          </div>
      </div>
  </div>
</template>


<style scoped>

.window {
    position: absolute !important;
}

</style>
<script setup>
import { onMounted, ref } from 'vue';
import Window from './Window.vue';
import { usePrograms } from '../composables/Programs';

const props = defineProps(['id']); 
const canvas = ref(null);

const programs = usePrograms();

const tileSize = 10;
const ctx = ref(null);

var gameMatrix = ref([]);
var gameState = ref({
    started: false,
    drawing: false,
    brush: -1,
    generation: 0,
    population: 0,
    timeStep: 5, // milliseconds, 5 generations per second
    loop: null
});

const DEAD = 0, ALIVE = 1;

onMounted(() => {

    ctx.value = canvas.value?.getContext('2d');
    if (ctx) setupCells();
});

function setupCells() {
    
    ctx.value.fillStyle = '#555555';
    ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height);

    gameMatrix.value = [];
    const rows = Math.floor(canvas.value.width / tileSize);
    const cols = Math.floor(canvas.value.height / tileSize);

    for (let x = 0; x < rows; x++) {
        gameMatrix.value[x] = [];
        for (let y = 0; y < cols; y++) {
            gameMatrix.value[x][y] = DEAD; // Initialize all cells as dead
        }
    }

    // Draw a random pattern in the middle
    const drawArea = 5;

    for (let x = Math.floor(rows / 2) - drawArea; x < Math.floor(rows / 2) + drawArea; x++) {
        for (let y = Math.floor(cols / 2) - drawArea; y < Math.floor(cols / 2) + drawArea; y++) {
            if (Math.random() < 0.5) { // Randomly set some cells to alive
                gameMatrix.value[x][y] = ALIVE;
                gameState.value.population++;
            }
        }
    }

    render();
}

function handleGame() {

    // Handle stopping
    if (gameState.value.started) {

        gameState.value.started = false;
        gameState.value.generation = 0;
        gameState.value.population = 0;
        setupCells();
        return;
    }

    // Start the game
    gameState.value.started = true;
    if (gameState.value.population === 0) 
        // If no cells are alive, start with a random pattern
        setupCells();

    gameLoop();
}

function gameLoop() {

    if (!gameState.value.started){
        // Cancel the next loop if the game done
        clearTimeout(gameState.value.loop);
        return;
    }

    // Apply the Game of Life rules
    var newMatrix = copyMatrix(gameMatrix.value);

    for (let x = 0; x < gameMatrix.value.length; x++) {
        for (let y = 0; y < gameMatrix.value[0].length; y++) {

            let cellStatus = gameMatrix.value[x][y];
            let neighbours = getNeighbours(x, y);

            if (cellStatus == ALIVE) {
                // Alive cell behaviour:
                /*
                    - Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                    - Any live cell with two or three live neighbours lives on to the next generation.
                    - Any live cell with more than three live neighbours dies, as if by overpopulation.
                */
                if (neighbours < 2 || neighbours > 3)
                    toggleCell(x, y, newMatrix);
                
            } else {
                // Dead cell behaviour:
                /*
                    - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                */
               if (neighbours == 3) toggleCell(x, y, newMatrix);
            }
        }
    }

    // Update the game matrix and state
    gameMatrix.value = newMatrix;
    gameState.value.generation++;

    render();

    // Call the game loop again after the specified time step
    gameState.value.loop = setTimeout(gameLoop, 1000 / gameState.value.timeStep);
}

function getNeighbours(x, y) {

    let neighbours = 0;

    // Check all 8 possible neighbours
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
        
            if (dx === 0 && dy === 0) continue; // Skip the cell itself

            let nx = (x + dx + gameMatrix.value.length) % gameMatrix.value.length; // Wrap around horizontally
            let ny = (y + dy + gameMatrix.value[0].length) % gameMatrix.value[0].length; // Wrap around vertically

            if (gameMatrix.value[nx][ny] === ALIVE) {
                neighbours++;
            }
        }
    }

    return neighbours;
}

function copyMatrix(matrix) {
    return matrix.map(row => row.slice());
}

function render(){

    ctx.value.fillStyle = '#555555';
    ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height);
    
    for (let x = 0; x < gameMatrix.value.length; x++) {
        for (let y = 0; y < gameMatrix.value[0].length; y++) {
            
            ctx.value.fillStyle = (gameMatrix.value[x][y] === ALIVE) ? '#ffffff' : '#000000';
            ctx.value.fillRect(x * tileSize, y * tileSize, tileSize - 1, tileSize - 1);
        }
    }
}

const toggleCell = (x, y, matrix) => {
    if (matrix[x][y] === ALIVE) {
        matrix[x][y] = DEAD;
        gameState.value.population--;
    } else {
        matrix[x][y] = ALIVE;
        gameState.value.population++;
    }
    render();
};

onMounted(() => {
    
    document.getElementById("lifeCanvas").onmousedown = function(event) {
        if (event.button !== 0 || gameState.value.started) return;
        gameState.value.drawing = true;
    };
    
    document.getElementById("lifeCanvas").onmouseup = function(event) {
        if (event.button !== 0 || gameState.value.started) return;

        // Delete brush if it was set
        if (gameState.value.brush !== -1) gameState.value.brush = -1;
        gameState.value.drawing = false;
    }
    
    document.getElementById("lifeCanvas").onmousemove = function(event) {
        if (event.button !== 0 || gameState.value.started) return;
    
        if (gameState.value.drawing) {

            
            const rect = canvas.value.getBoundingClientRect();
            const x = Math.floor((event.clientX - rect.left) / tileSize);
            const y = Math.floor((event.clientY - rect.top) / tileSize);
            
            // Set brush to the opposite of the current cell state if not set
            if (gameState.value.brush === -1) gameState.value.brush = (gameMatrix.value[x][y] === DEAD ? ALIVE : DEAD);

            if (gameMatrix.value[x][y] === gameState.value.brush) return;
            toggleCell(x, y, gameMatrix.value);
        }
    };
});

</script>

<template>
    <Window
        :id="props.id"
        title="Conway's game of life"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 515, height: undefined }"
    >
    <div>
        <canvas
            ref="canvas"
            id="lifeCanvas"
            width="500"
            height="450"
        ></canvas>
        <p> 
            <b>Life</b> or <b><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conways's Game of Life</a></b>
            is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
            <p>Note: The original game of life works on a theoretical infinite grid of cells. For this replica, we will make the grid wrap around itself at the edges, to emulate infinity</p>
            <p>«Drag your mouse around to draw more live cells»</p>
            <div class="columns left">
                <span><i>Generation: {{gameState.generation}}</i></span>
                <span><i>Population: {{gameState.population}}</i></span>
            </div>
            <br>
            <div class="columns">
                <button @click="handleGame">{{ gameState.started ? "Stop" : "Start" }}</button>
                <div v-if="!gameState.started" class="field-row" style="width: 300px">
                    <label for="range23">1 Gs⁻¹</label>
                    <input id="range23" type="range" min="1" max="10" v-model="gameState.timeStep" />
                    <label for="range24">10 Gs⁻¹</label>
                </div>
            </div>
        </p>
    </div>
    </Window>
</template>
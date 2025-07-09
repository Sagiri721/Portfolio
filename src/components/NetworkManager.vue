<script setup>
import Window from './Window.vue';

const props = defineProps(['id']);    
</script>

<template>
    <Window
        :id="props.id"
        title="Network Overview"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 480, height: undefined }"
    >
    <div>
 
        <div class="network">

            <div class="network-node" style="left: 10px; top: 30px;">
                <img src="/Portfolio/icons/computer-4.png" alt="">
                <p>Github</p>
                <a href="https://github.com/Sagiri721">@Sagiri721</a>
            </div>

            <div class="network-node" style="left: 330px; top: 10;">
                <img src="/Portfolio/icons/world-2.png" alt="">
                <p>LinkedIn</p>
                <a href="https://www.linkedin.com/in/tiago-barros-197aab2aa/">Tiago</a>
                <a href="https://www.linkedin.com/in/tiago-barros-197aab2aa/">Barros</a>
            </div>

            <div class="network-node" style="left: 150px; top: 50px;">
                <img src="/Portfolio/icons/computer-4.png" alt="">
                <p>Youtube</p>
                <a href="https://www.youtube.com/@sagiri721">@sagiri721</a>
            </div>

            <div class="network-node" style="left: 20px; top: 150px;">
                <img src="/Portfolio/icons/modem-4.png" alt="">
                <p>Email</p>
                <a href="mailto:tiagobarrossao@gmail.com">tiagobarrossao@gmail.com</a>
            </div>


            <div class="network-node" style="left: 170px; top: 230px;">
                <img src="/Portfolio/icons/joystick-5.png" alt="">
                <p>Itch.io</p>
                <a href="https://sagiri721.itch.io/">Sagiri721</a>
            </div>

            <div class="network-node" style="left: 320px; top: 190px;">
                <img src="/Portfolio/icons/modem-4.png" alt="">
                <p>Discord</p>
                <a href="#">@llamezine</a>
            </div>
            
            <!-- Connect them with lines -->
            <svg class="network-lines">
                <line x1="70" y1="70" x2="78" y2="200" stroke="black" />
                <line x1="70" y1="70" x2="200" y2="100" stroke="black" />
                <line x1="200" y1="100" x2="400" y2="70" stroke="black" />
                <line x1="390" y1="70" x2="370" y2="240" stroke="black" />
                <line x1="370" y1="240" x2="220" y2="290" stroke="black" />
            </svg>
        </div>

        <br>
        <div class="status-bar">
            <p class="status-bar-field">Nodes connected: 6</p>
            <p class="status-bar-field">Status: UP</p>
        </div>

        </div>
    </Window>
</template>
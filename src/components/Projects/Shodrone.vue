<script setup>
    import Window from './../Window.vue';
    
    const props = defineProps(['id']);    
    </script>
    
    <template>
        <Window
            :id="props.id"
            title="OpenGL 3D Renderer"
            :resizeable="true"
            :closeable="true"
            :size="{ width: 500, height: undefined }"
        >
        
        <h3>Shodrone Back-Office</h3>
        <p>A a back-office for a fictional Drone Company, to manage drone multimedia displays, client exclusivity contracts, and proprietary figure collections.</p>
        <p>With a plugin-based architecture, using ANTLR, that accepts external DSL scripts, allowing for human accessible development of drone flight routines.</p>
        <p>Works with a client service architecture and has a simulation server in C which takes drone instructions to simulate translations and rotations using quaternions and swept continuous collision detection. It uses my custom 3D engine to render them so the company can verify if the expect results are up to their standards</p>
        <div class="status-bar">
            <p class="status-bar-field">Made using: Java, C, ANTLR, MySQL</p>
            <p class="status-bar-field">Status: <span class="good">Finished</span></p>
        </div>
    
        <br>
    
        <img class="full-image bevel" src="../../assets/projects/shodrone.gif" alt="a line of boxes representing drones move and rotate">
        <p class="legend">Fig1 - The rendered output of a figure using drone flight instruction</p>
    
        </Window>
    </template>
    
    <style scoped>
    
    .full-image {
        width: 470px;
        height: auto;
        
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    .good {
        color: green;
    }
    
    .legend {
        
        text-align: center;
        font-style: italic;
    }
    
    </style>
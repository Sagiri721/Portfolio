<script setup>
import { ref } from 'vue';
import Window from './Window.vue';

const props = defineProps(['id']);    
const tab = ref('pl');

</script>

<template>
    <Window
        :id="props.id"
        title="Technical Qualifications"
        :resizeable="true"
        :closeable="true"
        :size="{ width: 550, height: undefined }"
    >
    <div class="window-body">      
        <menu role="tablist">
          <li @click="tab = 'pl'" role="tab" :aria-selected="tab == 'pl'"><a href="#tabs">Programming languages</a></li>
          <li @click="tab = 'gd'" role="tab" :aria-selected="tab == 'gd'"><a href="#tabs">Game development</a></li>
          <li @click="tab = 'la'" role="tab" :aria-selected="tab == 'la'"><a href="#tabs">Libraries and applications</a></li>
          <li @click="tab = 'db'" role="tab" :aria-selected="tab == 'db'"><a href="#tabs">Databases</a></li>
        </menu>
        <div class="window" role="tabpanel">

          <div v-if="tab == 'pl'" class="window-body">

            <div class="columns group-container">

                <div>

                    <div class="group">
                        <div class="icon-group">
                            <p>Java</p>
                            <img src="../assets/java.png" alt="Java icon">
                        </div>
                    </div>
    
                    <div class="group">
                        <div class="icon-group">
                            <p>C#</p>
                            <img src="../assets/csharp.png" alt="C# icon">
                        </div>
                    </div>
    
                    <div class="group">
                        <div class="icon-group">
                            <p>Python</p>
                            <img src="../assets/python.png" alt="Python icon">
                        </div>
                    </div>
    
                    <div class="group">
                        <div class="icon-group">
                            <p>C / C++</p>
                            <img src="../assets/c.png" alt="C++ icon">
    
                        </div>
                    </div>
    
                    <div class="group">
                        <div class="icon-group">
                            <p>JavaScript</p>
                            <img src="../assets/js.png" alt="JavaScript icon">
                        </div>
                    </div>
    
                </div>
                
                <hr>
                    
                <div class="pad-me">

                    <p>
                        Some other languages I've learned but don't have enough experience to confidently list here are:                    
                    </p>

                        <ul>
                            <li>PHP</li>
                            <li>Assembly x86</li>
                            <li>Pascal</li>
                            <li>VBA</li>
                            <li>GLSL</li>
                        </ul>
                </div>
            </div>

          </div>

          <div v-else-if="tab == 'gd'" class="window-body">
            
            <div class="game-group-container">

                <div class="game-group">
                    <div class="game-icon-group ">
                        <p>Raylib</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Raylib_logo.png" alt="Raylib icon">
                    </div>
                </div>

                <div class="game-group">
                    <div class="game-icon-group ">
                        <p>Unity</p>
                        <img src="https://static-00.iconduck.com/assets.00/unity-icon-999x1024-kgzo1ar1.png" alt="Unity icon">
                    </div>
                </div>

                <div class="game-group">
                    <div class="game-icon-group ">
                        <p>Godot</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg" alt="Godot icon">
                    </div>
                </div>

                <div class="game-group">
                    <div class="game-icon-group ">
                        <p>LibGDX</p>
                        <img src="https://libgdx.com/assets/brand/stacked.png" alt="LibGDX icon">
                    </div>
                </div>
            </div>

          </div>

            <div v-else-if="tab == 'la'" class="window-body">

                <div class="columns lib-container">

                    <div>
    
                        <div class="group">
                            <div class="icon-group">
                                <img src="../assets/java.png" alt="Java icon">

                                <ul>
                                    <div class="columns close">

                                        <div>
                                            <li>Jsoup</li>
                                            <li>JDBC</li>
                                            <li>Swing & JavaFX</li>
                                        </div>
                                        <div>
                                            <li>LWJGL</li>
                                        </div>

                                    </div>
                                </ul>
                            </div>
                        </div>
        
                        <div class="group">
                            <div class="icon-group">
                                <img src="../assets/csharp.png" alt="C# icon">

                                <ul>
                                    <li>.NET</li>
                                    <li>Windows Forms</li>
                                </ul>
                            </div>
                        </div>
        
                        <div class="group">
                            <div class="icon-group">
                                <img src="../assets/python.png" alt="Python icon">

                                <ul>
                                    <div class="columns close">
                                        <div>
                                            <li>Discord.py</li>
                                            <li>PIL</li>
                                            <li>BeautifulSoup</li>
                                        </div>
                                        <div>
                                            <li>Pandas</li>
                                            <li>Scipy</li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
        
                        <div class="group">
                            <div class="icon-group">
                                <img src="../assets/c.png" alt="C++ icon">
        
                                <ul>
                                    <li>SDL 2</li>
                                    <li>Crow</li>
                                    <li>Detours</li>
                                </ul>

                                <ul>
                                    <li>OpenGL</li>
                                    <li>Unity</li>
                                </ul>

                            </div>
                        </div>
        
                        <div class="group">
                            <div class="icon-group">
                                <img src="../assets/js.png" alt="JavaScript icon">

                                <ul>
                                    <div class="columns close">
                                        <div>
                                            <li>Electron</li>
                                            <li>Express</li>
                                        </div>
                                        <div>
                                            <li>React</li>
                                            <li>Vue</li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
        
                    </div>
                    
                    <hr>
                        
                    <div class="pad-me">
                        <p>
                            
                            <div>
                                <div>
                                    <p><b>Git</b></p>
                                    <p>Version control tool</p>
                                </div>

                                <div>
                                    <p><b>PlantUML</b></p>
                                    <p>UML diagramming tool</p>
                                </div>

                                <div>
                                    <p><b>GnuPlot</b></p>
                                    <p>Plotting library</p>
                                </div>

                                <div>
                                    <p><b>Make & CMake</b></p>
                                    <p>Build automation tools</p>
                                </div>

                                <div>
                                    <p><b>Maven</b></p>
                                    <p>Build automation tool</p>
                                </div>

                                <div>
                                    <p><b>Node.js</b></p>
                                    <p>Runtime environment</p>
                                </div>

                            </div>

                        </p>
                    </div>
                </div>

            </div>

            <div v-else-if="tab == 'db'" class="window-body">
                
                <div class="game-group-container">

                    <div class="game-group">
                        <div class="game-icon-group ">
                            <p>SQLite3</p>
                            <img src="../assets/sqlite.png" alt="SQLite icon">
                        </div>
                    </div>
    
                    <div class="game-group">
                        <div class="game-icon-group ">
                            <p>MySQL</p>
                            <img src="../assets/mysql.png" alt="MySQL icon">
                        </div>
                    </div>
    
                    <div class="game-group">
                        <div class="game-icon-group ">
                            <p>Oracle database</p>
                            <img src="../assets/oracle.png" alt="Oracle icon">
                        </div>
                    </div>
    
                    <div class="game-group">
                        <div class="game-icon-group ">
                            <p>MongoDB</p>
                            <img src="../assets/mongo.png" alt="MongoDB icon">
                        </div>
                    </div>
                </div>

            </div>
    
        </div>
      </div>

    </Window>
</template>

<style scoped>

.group {
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-group {
    display: flex;
    align-items: center;
    justify-content: center;
}

.lib-container > div:first-child {
    width: 100%;
}

.lib-container > div:first-child > div .icon-group{
    width: 100%;
}

.lib-container > div:first-child > div .icon-group ul{
    width: 80%;
    padding-left: 20px;
}

.icon-group img {
    width: 20px;
    height: auto;
    margin: 0 10px;

    margin-top: auto;
    margin-bottom: auto;

    image-rendering: pixelated;
}

.icon-group p {

    font-weight: bold;
    font-size: 1.2em;
}

.group-container {

    margin-left: 20px;
    margin-right: 20px;
}

.pad-me {
    
    padding: 0 20px 0px 20px;
    margin: auto;

    width: 100%;
}

.close {
    
    float: left;
}

.close div {
    margin-right: 30px;
}

.game-group-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 20px;

    margin-top: 20px;
    margin-bottom: 20px;
}

.game-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.game-group p {
    font-weight: bold;
    font-size: 1.2em;
    padding: 10px;
    padding-bottom: 0;
    margin: 0;
}

.game-group img {
    width: 80px;
    height: auto;
    display: block;
    margin: auto;

    image-rendering: pixelated;
}
</style>
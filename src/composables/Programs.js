import { computed, createApp, ref, watch } from "vue";
import Quote from "../components/Quote.vue";
import Linguistics from "../components/Linguistics.vue";
import Info from "../components/Info.vue";
import Terminal from "../components/Terminal.vue";
import Music from "../components/Music.vue";
import Himawari from "../components/Projects/Himawari.vue";
import CharaArchive from "../components/Projects/CharaArchive.vue";
import Renderer from "../components/Projects/Renderer.vue";
import GLVNE from "../components/Projects/GLVNE.vue";
import Technical from "../components/Technical.vue";
import Warning from "../components/Warning.vue";
import Achievements from "../components/Achievements.vue";
import Me from "../components/Me.vue";

const programMapping = ref({});
const processes = ref([]);
const registerApplication = (name, program, options = { singleton: false }) => {
    programMapping.value[name] = { program, options };
}

// Add programs to memory
registerApplication("quote", Quote);
registerApplication("linguistics", Linguistics);
registerApplication("system", Info);
registerApplication("prompt", Terminal);
registerApplication("music", Music, { singleton: true });
registerApplication("himawari", Himawari);
registerApplication("chara-arquive", CharaArchive);
registerApplication("renderer", Renderer);
registerApplication("glvne", GLVNE);
registerApplication("technical", Technical);
registerApplication("warning", Warning);
registerApplication("achievements", Achievements);
registerApplication("me", Me);

const doesProgramExist = (name) => {
    return programMapping.value[name] !== undefined;
}

const openProgram = (name, pid, props = {}) => {

    const program = programMapping.value[name].program;
    const options = programMapping.value[name].options;

    if (program == undefined) {
        console.error("Program not found: ", name);
        return;
    }

    const mountEl = document.createElement("div");
    document.getElementById("desktop").appendChild(mountEl);

    if (options?.singleton) {

        // Remove all other instances of the program
        processes.value.forEach(process => {

            if (process.name === name) {
                closeProgram(process.pid);
            }
        });
    }

    console.log("Opening program: ", name, pid, props);
    console.log({id: pid, ...props });
    const dialog = createApp(program, 
        {id: pid, ...props }
    );
    dialog.mount(mountEl);

    processes.value.push({pid: pid, dialog: dialog, element: mountEl, name: name, focus: false});
}

const requestFocus = (pid) => {
    
    processes.value.forEach(process => {
        process.focus = process.pid == pid;
    });

    updateWindowZIndex();
}

const closeProgram = (pid) => {

    const process = processes.value.find(process => process.pid === pid);
    if (process == undefined) return;

    process.dialog.unmount();
    document.getElementById("desktop").removeChild(process.element);

    processes.value = processes.value.filter(process => process.pid !== pid);
}

const closeAllPrograms = () => {
    processes.value.forEach(process => {
        process.dialog.unmount();
        document.getElementById("desktop").removeChild(process.element);
    });

    processes.value = [];
}

const processCount = computed(() => processes.value.length);

// Monitor focus state of programs reactivilly
const updateWindowZIndex = () => {

    processes.value.forEach((process) => {
        
        let z = process.focus ? 1 : 0;

        let window = (process.element.getElementsByClassName("window")[0]);
        window.style.zIndex = z;
    });
}

const isFocused = (pid) => {

    const process = processes.value.find(process => process.pid === pid);
    if (process == undefined) return true;
    return process.focus;
}

export const usePrograms = () => {
    return {
        programMapping: programMapping.value,
        processes: processes.value,
        registerApplication,
        openProgram,
        closeProgram,
        closeAllPrograms,
        processCount,
        doesProgramExist,
        getProgramNames: () => Object.keys(programMapping.value),
        requestFocus,
        isFocused,
    }
}
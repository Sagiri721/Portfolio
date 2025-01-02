import { computed, createApp, ref } from "vue";
import Quote from "../components/Quote.vue";
import Linguistics from "../components/Linguistics.vue";
import Info from "../components/Info.vue";
import Terminal from "../components/Terminal.vue";
import Music from "../components/Music.vue";

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

const doesProgramExist = (name) => {
    return programMapping.value[name] !== undefined;
}

const openProgram = (name, pid) => {

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

    const dialog = createApp(program, {id: pid});
    dialog.mount(mountEl);

    processes.value.push({pid: pid, dialog: dialog, element: mountEl, name: name});
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
        getProgramNames: () => Object.keys(programMapping.value)
    }
}
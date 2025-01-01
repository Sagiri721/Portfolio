import { computed, createApp, ref } from "vue";
import Quote from "../components/Quote.vue";
import Linguistics from "../components/Linguistics.vue";
import Info from "../components/Info.vue";
import Terminal from "../components/Terminal.vue";

const programMapping = ref({});
const processes = ref([]);
const registerApplication = (name, program) => {
    programMapping.value[name] = program;
}

// Add programs to memory
registerApplication("quote", Quote);
registerApplication("linguistics", Linguistics);
registerApplication("system", Info);
registerApplication("prompt", Terminal);

const doesProgramExist = (name) => {
    return programMapping.value[name] !== undefined;
}

const openProgram = (name, pid) => {
    const program = programMapping.value[name];
    if (program == undefined) {
        console.error("Program not found: ", name);
        return;
    }

    const mountEl = document.createElement("div");
    document.getElementById("desktop").appendChild(mountEl);

    const dialog = createApp(program, {id: pid});
    dialog.mount(mountEl);

    processes.value.push({pid: pid, dialog: dialog, element: mountEl});
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
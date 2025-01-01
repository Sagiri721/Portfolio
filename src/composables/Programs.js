import { createApp, ref } from "vue";
import Quote from "../components/Quote.vue";
import Linguistics from "../components/Linguistics.vue";

const programMapping = ref({});
const processes = ref([]);
const registerApplication = (name, program) => {
    programMapping.value[name] = program;
}

// Add programs to memory
registerApplication("quote", Quote);
registerApplication("linguistics", Linguistics);

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

export const usePrograms = () => {
    return {
        programMapping,
        registerApplication,
        openProgram,
        closeProgram,
        closeAllPrograms
    }
}
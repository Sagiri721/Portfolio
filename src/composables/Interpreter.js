import { generateId } from "../data/Utils";
import { usePrograms } from "./Programs";

var programs = null;

const commandList = [
    {
        name: "help",
        description: "List of available commands.",
        args: []
    },
    {
        name: "run",
        description: "Run a given program.",
        args: ["program name"]
    },
    {
        name: "programs",
        description: "List of available programs.",
        args: []
    }
];

const isValidCommand = (command) => {
    return commandList.some(c => c.name === command);
}

async function interpret(command) {

    if (programs === null) programs = usePrograms();
    
    command = command.trim().toLowerCase();
    const commandParts = command.split(" ");
    if (commandParts.length === 0) return "Invalid syntax, no command given.";

    const commandName = commandParts[0];
    const args = commandParts.slice(1);

    if (!isValidCommand(commandName)) return "Invalid command.";

    switch (commandName) {
        case "help":
            return `Available commands: \n${
                commandList.map(command => command.name + ": " + command.description + " Args: " + (command.args.join(", ") || "None")).join("\n")
            }`;
        case "run":
            
            if (args.length === 0) return "Invalid syntax, no program given.";
            const program = args[0];

            if (!programs.doesProgramExist(program)) return "Program not found.";
            programs.openProgram(program, generateId());

            return program + " opened.";

        case "programs":

            const programNames = programs.getProgramNames();
            return `Available programs: \n${programNames.join("\n")}`;

        default:
            return "Invalid command.";
    }
}

const getCommands = () => {
    return commandList.map(command => command.name);
}

export const useInterpreter = () => {
    return {
        interpret,
        getCommands
    }
}
import { generateId } from "../data/Utils";
import { usePrograms } from "./Programs";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

var programs = null;

const commandList = [
    {
        name: "help",
        description: "List of available commands.",
        args: []
    },
    {
        name: "call",
        description: "Run a given program.",
        args: ["program name"]
    },
    {
        name: "programs",
        description: "List of available programs.",
        args: []
    },
    {
        name: "date",
        description: "Display the current date.",
        args: []
    },
    {
        name: "echo",
        description: "Echo the given message.",
        args: ["message"]
    },
    {
        name: "confetti",
        description: "Drop confetti.",
        args: []
    },
    {
        name: "warn",
        description: "Display a warning message.",
        args: ["message", "type (number from 0 to 3)"]
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
        case "call":
            
            if (args.length === 0) return "Invalid syntax, no program given.";
            const program = args[0];

            if (!programs.doesProgramExist(program)) return "Program not found.";
            programs.openProgram(program, generateId());

            return program + " opened.";

        case "programs":

            const programNames = programs.getProgramNames();
            return `Available programs: \n${programNames.join("\n")}`;

        case "date":
            return new Date().toDateString();
        case "echo":

            if (args.length === 0) return "Invalid syntax, no message given.";
            return args.join(" ");

        case "confetti":

            confetti({
                particleCount: 130,
                spread: 70,
            });

            return "Yippie!";

        case "warn":

            if (args.length === 0) return "Invalid syntax, no message given.";

            let lastIndex = args.length - 1;

            const type = args[lastIndex] || 0;
            if (isNaN(type)) return "Invalid type, must be a number from 0 to 3.";

            const message = args.slice(0, lastIndex).join(" ");

            if (type < 0 || type > 3) return "Invalid type, must be a number from 0 to 3.";

            programs.openProgram("warning", generateId(), { message: message, type: type });

            return "Warning displayed.";

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
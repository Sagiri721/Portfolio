<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Window from './Window.vue';
import { useInterpreter } from '../composables/Interpreter';
import { getVersion } from '../data/Utils';

const interpreter = useInterpreter();
const props = defineProps(['id']);

const terminalHistory = ref([]);
const currentCommand = ref('');
const historyIndex = ref(-1);
const terminalRef = ref(null);

const executeCommand = async () => {
    const command = currentCommand.value.trim();
    if (!command) return;

    terminalHistory.value.push({
        type: 'command',
        content: `> ${command}`
    });

    // Response
    const response = await interpreter.interpret(command);
    terminalHistory.value.push({
        type: 'response',
        content: response || 'Command executed'
    });

    currentCommand.value = '';
    historyIndex.value = -1;
    await nextTick();
    scrollToBottom();
};

const onKeyDown = (e) => {

    switch (e.key) {
    case 'Enter':
        e.preventDefault();
        executeCommand();
        break;
    case 'ArrowUp':
        e.preventDefault();
        navigateHistory('up');
        break;
    case 'ArrowDown':
        e.preventDefault();
        navigateHistory('down');
        break;
    case 'Tab':
        e.preventDefault();
        handleTabCompletion();
        break;
    }

    scrollToBottom();    
};

const navigateHistory = (direction) => {

    const commandHistory = terminalHistory.value
        .filter(entry => entry.type === 'command')
        .map(entry => entry.content.substring(2));

    if (direction === 'up' && historyIndex.value < commandHistory.length - 1) {

        historyIndex.value++;
        currentCommand.value = commandHistory[commandHistory.length - 1 - historyIndex.value];

    } else if (direction === 'down' && historyIndex.value >= 0) {

        historyIndex.value--;
        currentCommand.value = historyIndex.value >= 0 
            ? commandHistory[commandHistory.length - 1 - historyIndex.value]
            : '';
    }
};

// Basic tab completion
const handleTabCompletion = () => {
  
    const commands = interpreter.getCommands();
    const partial = currentCommand.value;

    const matches = commands.filter(cmd => cmd.startsWith(partial));
    if (matches.length === 1) {
    currentCommand.value = matches[0];
    }
};

const scrollToBottom = () => {
  if (terminalRef.value) {
    terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
  }
};

// Initialize terminal
onMounted(() => {
  terminalHistory.value.push({
    type: 'system',
    content: 'Welcome to SagiriDOS Prompt ' + getVersion() + ' \nType "help" for available commands.'
  });

  // Focus input automatically
  const input = terminalRef.value.querySelector('input');
  if (input) input.focus();

});
</script>

<template>
  <Window
    :id="props.id"
    title="SagiriDOS Terminal"
    :resizeable="true"
    :closeable="true"
    :size="{ width: 600, height: 400 }"
  >
    <div class="terminal-container">
      <div ref="terminalRef" class="terminal-output">
        <div
          v-for="(entry, index) in terminalHistory"
          :key="index"
          :class="['terminal-line', entry.type]"
        >
          {{ entry.content }}
        </div>
        <div class="terminal-input-line">
          <span class="prompt">></span>
          <input
            v-model="currentCommand"
            @keydown="onKeyDown"
            type="text"
            spellcheck="false"
            autocomplete="off"
          />
        </div>
      </div>
    </div>
  </Window>
</template>
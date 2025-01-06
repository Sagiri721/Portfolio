import { ViteSSG } from "vite-ssg";
import { createMemoryHistory, createRouter } from "vue-router";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext, ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, unref, withDirectives, vModelSelect, onMounted, openBlock, createBlock, Fragment, renderList, vModelText, nextTick, computed, watch, onUnmounted, createCommentVNode, createApp as createApp$1 } from "vue";
import confetti from "canvas-confetti";
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
const getVersion = () => {
  return "0.1.0";
};
const loadBackgroundColor = () => {
  const color = localStorage.getItem("sagiri-portfolio-bg-color");
  if (color)
    document.body.style.backgroundColor = backgroundColors[color];
};
const getBackgroundColor = () => {
  return localStorage.getItem("sagiri-portfolio-bg-color");
};
const backgroundColors = {
  "Gray": "#555",
  "Black": "#000000",
  "White": "#DCDCDC ",
  "Blue": "#778899",
  "Red": "#AA98A9"
};
const changeBackground = (color) => {
  document.body.style.backgroundColor = backgroundColors[color];
  localStorage.setItem("sagiri-portfolio-bg-color", color);
};
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
const formatSeconds = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  remainingSeconds = Math.floor(remainingSeconds);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
const myAge = () => {
  const birthdate = /* @__PURE__ */ new Date("2005-07-19");
  const today = /* @__PURE__ */ new Date();
  const age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || month === 0 && today.getDate() < birthdate.getDate()) {
    return age - 1;
  }
  return age;
};
const apiURL = "https://api.quotable.io/random";
const _sfc_main$g = {
  __name: "Quote",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const data = ref({ content: "Loading", author: "Loading" });
    const props = __props;
    fetch(apiURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((response) => response.json()).then((result) => {
      data.value = {
        content: result.content,
        author: result.author
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Inspirational Quote",
        resizeable: true,
        closeable: true,
        size: { width: 250, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="quote"${_scopeId}>${ssrInterpolate(data.value.content)}</p><hr${_scopeId}><p${_scopeId}>- <b${_scopeId}>${ssrInterpolate(data.value.author)}</b></p>`);
          } else {
            return [
              createVNode("p", { class: "quote" }, toDisplayString(data.value.content), 1),
              createVNode("hr"),
              createVNode("p", null, [
                createTextVNode("- "),
                createVNode("b", null, toDisplayString(data.value.author), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Quote.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Linguistics",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Linguistic Qualifications",
        resizeable: true,
        closeable: true,
        size: { width: 250, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><strong${_scopeId}><span class="fi fi-pt"${_scopeId}></span> Portuguese</strong>, Native speaker<br${_scopeId}><div class="progress-indicator segmented"${_scopeId}><span class="progress-indicator-bar" style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId}></span></div></div><br${_scopeId}><div${_scopeId}><strong${_scopeId}><span class="fi fi-gb"${_scopeId}></span> English</strong>, C1 level<br${_scopeId}><div class="progress-indicator segmented"${_scopeId}><span class="progress-indicator-bar" style="${ssrRenderStyle({ "width": "85%" })}"${_scopeId}></span></div></div><br${_scopeId}><div${_scopeId}><strong${_scopeId}><span class="fi fi-jp"${_scopeId}></span> Japanese</strong>, N2 level<br${_scopeId}><div class="progress-indicator segmented"${_scopeId}><span class="progress-indicator-bar" style="${ssrRenderStyle({ "width": "65%" })}"${_scopeId}></span></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("strong", null, [
                  createVNode("span", { class: "fi fi-pt" }),
                  createTextVNode(" Portuguese")
                ]),
                createTextVNode(", Native speaker"),
                createVNode("br"),
                createVNode("div", { class: "progress-indicator segmented" }, [
                  createVNode("span", {
                    class: "progress-indicator-bar",
                    style: { "width": "100%" }
                  })
                ])
              ]),
              createVNode("br"),
              createVNode("div", null, [
                createVNode("strong", null, [
                  createVNode("span", { class: "fi fi-gb" }),
                  createTextVNode(" English")
                ]),
                createTextVNode(", C1 level"),
                createVNode("br"),
                createVNode("div", { class: "progress-indicator segmented" }, [
                  createVNode("span", {
                    class: "progress-indicator-bar",
                    style: { "width": "85%" }
                  })
                ])
              ]),
              createVNode("br"),
              createVNode("div", null, [
                createVNode("strong", null, [
                  createVNode("span", { class: "fi fi-jp" }),
                  createTextVNode(" Japanese")
                ]),
                createTextVNode(", N2 level"),
                createVNode("br"),
                createVNode("div", { class: "progress-indicator segmented" }, [
                  createVNode("span", {
                    class: "progress-indicator-bar",
                    style: { "width": "65%" }
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Linguistics.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Info",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    const programs2 = usePrograms();
    const backgroundColor = ref(getBackgroundColor());
    const time = ref((/* @__PURE__ */ new Date()).toLocaleTimeString());
    setInterval(() => {
      time.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    }, 1e3);
    const saveBackground = (e) => {
      changeBackground(e.target.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "System",
        resizeable: true,
        closeable: true,
        size: { width: 500, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3${_scopeId}>SagiriOS 98</h3><div${_scopeId}><div class="columns"${_scopeId}><div${_scopeId}><p${_scopeId}><strong${_scopeId}>Version:</strong> ${ssrInterpolate(unref(getVersion)())} C </p><p${_scopeId}><strong${_scopeId}>Registered to: </strong> 65437-OEM-0015435-345664</p></div><div${_scopeId}><p${_scopeId}><strong${_scopeId}>Authentic AMD</strong> <strong${_scopeId}>32.0MB RAM</strong></p><p${_scopeId}><strong${_scopeId}>Running processes:</strong> ${ssrInterpolate(unref(programs2).processCount)}</p></div></div><p${_scopeId}><b${_scopeId}>System language</b>: <span class="fi fi-gb"${_scopeId}></span></p><p${_scopeId}><b${_scopeId}>System time</b>: ${ssrInterpolate(time.value)} ${ssrInterpolate(Intl.DateTimeFormat().resolvedOptions().timeZone)}</p><p${_scopeId}><b${_scopeId}>Source code: </b> <a href="https://github.com/Sagiri721/Portfolio"${_scopeId}>https://github.com/Sagiri721/Portfolio</a></p><hr${_scopeId}><p${_scopeId}>Inspired by the 1990 Cern <a href="https://worldwideweb.cern.ch/"${_scopeId}>WorldWideWeb</a> and Windows 98</p><p${_scopeId}><strong${_scopeId}>Powered by: </strong> Vue &amp; Vite</p><p${_scopeId}><strong${_scopeId}>Graphics: </strong> <a href="https://jdan.github.io/98.css/"${_scopeId}>98.css</a></p><p${_scopeId}><strong${_scopeId}>Flags: </strong> <a href="https://github.com/lipis/flag-icons"${_scopeId}>Lipis flag icons</a></p><hr${_scopeId}><p${_scopeId}><b${_scopeId}>System background</b></p><select${_scopeId}><option${ssrIncludeBooleanAttr(Array.isArray(backgroundColor.value) ? ssrLooseContain(backgroundColor.value, null) : ssrLooseEqual(backgroundColor.value, null)) ? " selected" : ""}${_scopeId}>Gray</option><option${ssrIncludeBooleanAttr(Array.isArray(backgroundColor.value) ? ssrLooseContain(backgroundColor.value, null) : ssrLooseEqual(backgroundColor.value, null)) ? " selected" : ""}${_scopeId}>Black</option><option${ssrIncludeBooleanAttr(Array.isArray(backgroundColor.value) ? ssrLooseContain(backgroundColor.value, null) : ssrLooseEqual(backgroundColor.value, null)) ? " selected" : ""}${_scopeId}>White</option><option${ssrIncludeBooleanAttr(Array.isArray(backgroundColor.value) ? ssrLooseContain(backgroundColor.value, null) : ssrLooseEqual(backgroundColor.value, null)) ? " selected" : ""}${_scopeId}>Blue</option><option${ssrIncludeBooleanAttr(Array.isArray(backgroundColor.value) ? ssrLooseContain(backgroundColor.value, null) : ssrLooseEqual(backgroundColor.value, null)) ? " selected" : ""}${_scopeId}>Red</option></select></div>`);
          } else {
            return [
              createVNode("h3", null, "SagiriOS 98"),
              createVNode("div", null, [
                createVNode("div", { class: "columns" }, [
                  createVNode("div", null, [
                    createVNode("p", null, [
                      createVNode("strong", null, "Version:"),
                      createTextVNode(" " + toDisplayString(unref(getVersion)()) + " C ", 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Registered to: "),
                      createTextVNode(" 65437-OEM-0015435-345664")
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("p", null, [
                      createVNode("strong", null, "Authentic AMD"),
                      createTextVNode(),
                      createVNode("strong", null, "32.0MB RAM")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Running processes:"),
                      createTextVNode(" " + toDisplayString(unref(programs2).processCount), 1)
                    ])
                  ])
                ]),
                createVNode("p", null, [
                  createVNode("b", null, "System language"),
                  createTextVNode(": "),
                  createVNode("span", { class: "fi fi-gb" })
                ]),
                createVNode("p", null, [
                  createVNode("b", null, "System time"),
                  createTextVNode(": " + toDisplayString(time.value) + " " + toDisplayString(Intl.DateTimeFormat().resolvedOptions().timeZone), 1)
                ]),
                createVNode("p", null, [
                  createVNode("b", null, "Source code: "),
                  createTextVNode(),
                  createVNode("a", { href: "https://github.com/Sagiri721/Portfolio" }, "https://github.com/Sagiri721/Portfolio")
                ]),
                createVNode("hr"),
                createVNode("p", null, [
                  createTextVNode("Inspired by the 1990 Cern "),
                  createVNode("a", { href: "https://worldwideweb.cern.ch/" }, "WorldWideWeb"),
                  createTextVNode(" and Windows 98")
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Powered by: "),
                  createTextVNode(" Vue & Vite")
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Graphics: "),
                  createTextVNode(),
                  createVNode("a", { href: "https://jdan.github.io/98.css/" }, "98.css")
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Flags: "),
                  createTextVNode(),
                  createVNode("a", { href: "https://github.com/lipis/flag-icons" }, "Lipis flag icons")
                ]),
                createVNode("hr"),
                createVNode("p", null, [
                  createVNode("b", null, "System background")
                ]),
                withDirectives(createVNode("select", {
                  onInput: saveBackground,
                  "onUpdate:modelValue": ($event) => backgroundColor.value = $event
                }, [
                  createVNode("option", null, "Gray"),
                  createVNode("option", null, "Black"),
                  createVNode("option", null, "White"),
                  createVNode("option", null, "Blue"),
                  createVNode("option", null, "Red")
                ], 40, ["onUpdate:modelValue"]), [
                  [vModelSelect, backgroundColor.value]
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Info.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
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
  return commandList.some((c) => c.name === command);
};
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
      return `Available commands: 
${commandList.map((command2) => command2.name + ": " + command2.description + " Args: " + (command2.args.join(", ") || "None")).join("\n")}`;
    case "call":
      if (args.length === 0) return "Invalid syntax, no program given.";
      const program = args[0];
      if (!programs.doesProgramExist(program)) return "Program not found.";
      programs.openProgram(program, generateId());
      return program + " opened.";
    case "programs":
      const programNames = programs.getProgramNames();
      return `Available programs: 
${programNames.join("\n")}`;
    case "date":
      return (/* @__PURE__ */ new Date()).toDateString();
    case "echo":
      if (args.length === 0) return "Invalid syntax, no message given.";
      return args.join(" ");
    case "confetti":
      confetti({
        particleCount: 130,
        spread: 70
      });
      return "Yippie!";
    case "warn":
      if (args.length === 0) return "Invalid syntax, no message given.";
      let lastIndex = args.length - 1;
      const type = args[lastIndex] || 0;
      if (isNaN(type)) return "Invalid type, must be a number from 0 to 3.";
      const message = args.slice(0, lastIndex).join(" ");
      if (type < 0 || type > 3) return "Invalid type, must be a number from 0 to 3.";
      programs.openProgram("warning", generateId(), { message, type });
      return "Warning displayed.";
    default:
      return "Invalid command.";
  }
}
const getCommands = () => {
  return commandList.map((command) => command.name);
};
const useInterpreter = () => {
  return {
    interpret,
    getCommands
  };
};
const _sfc_main$d = {
  __name: "Terminal",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const interpreter = useInterpreter();
    const props = __props;
    const terminalHistory = ref([]);
    const currentCommand = ref("");
    const historyIndex = ref(-1);
    const terminalRef = ref(null);
    const executeCommand = async () => {
      const command = currentCommand.value.trim();
      if (!command) return;
      terminalHistory.value.push({
        type: "command",
        content: `> ${command}`
      });
      const response = await interpreter.interpret(command);
      terminalHistory.value.push({
        type: "response",
        content: response || "Command executed"
      });
      currentCommand.value = "";
      historyIndex.value = -1;
      await nextTick();
      scrollToBottom();
    };
    const onKeyDown = (e) => {
      switch (e.key) {
        case "Enter":
          e.preventDefault();
          executeCommand();
          break;
        case "ArrowUp":
          e.preventDefault();
          navigateHistory("up");
          break;
        case "ArrowDown":
          e.preventDefault();
          navigateHistory("down");
          break;
        case "Tab":
          e.preventDefault();
          handleTabCompletion();
          break;
      }
    };
    const navigateHistory = (direction) => {
      const commandHistory = terminalHistory.value.filter((entry) => entry.type === "command").map((entry) => entry.content.substring(2));
      if (direction === "up" && historyIndex.value < commandHistory.length - 1) {
        historyIndex.value++;
        currentCommand.value = commandHistory[commandHistory.length - 1 - historyIndex.value];
      } else if (direction === "down" && historyIndex.value >= 0) {
        historyIndex.value--;
        currentCommand.value = historyIndex.value >= 0 ? commandHistory[commandHistory.length - 1 - historyIndex.value] : "";
      }
    };
    const handleTabCompletion = () => {
      const commands = interpreter.getCommands();
      const partial = currentCommand.value;
      const matches = commands.filter((cmd) => cmd.startsWith(partial));
      if (matches.length === 1) {
        currentCommand.value = matches[0];
      }
    };
    const scrollToBottom = () => {
      if (terminalRef.value) {
        terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
      }
    };
    onMounted(() => {
      terminalHistory.value.push({
        type: "system",
        content: "Welcome to SagiriDOS Prompt " + getVersion() + ' \nType "help" for available commands.'
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "SagiriDOS Terminal",
        resizeable: true,
        closeable: true,
        size: { width: 600, height: 400 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="terminal-container"${_scopeId}><div class="terminal-output"${_scopeId}><!--[-->`);
            ssrRenderList(terminalHistory.value, (entry, index) => {
              _push2(`<div class="${ssrRenderClass(["terminal-line", entry.type])}"${_scopeId}>${ssrInterpolate(entry.content)}</div>`);
            });
            _push2(`<!--]--><div class="terminal-input-line"${_scopeId}><span class="prompt"${_scopeId}>&gt;</span><input${ssrRenderAttr("value", currentCommand.value)} type="text" spellcheck="false" autocomplete="off"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "terminal-container" }, [
                createVNode("div", {
                  ref_key: "terminalRef",
                  ref: terminalRef,
                  class: "terminal-output"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(terminalHistory.value, (entry, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: ["terminal-line", entry.type]
                    }, toDisplayString(entry.content), 3);
                  }), 128)),
                  createVNode("div", { class: "terminal-input-line" }, [
                    createVNode("span", { class: "prompt" }, ">"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => currentCommand.value = $event,
                      onKeydown: onKeyDown,
                      type: "text",
                      spellcheck: "false",
                      autocomplete: "off"
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, currentCommand.value]
                    ])
                  ])
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Terminal.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const status = Object.freeze({
  PLAYING: "playing",
  PAUSED: "paused",
  STOPED: "stopped"
});
const globalVolume = ref(30);
const currentAudio = ref(null);
const audioStatus = ref(status.STOPPED);
const audioDuration = ref(0);
const songCollection = [
  {
    name: "Everyone Knows",
    artist: "Slowdive",
    image: "covers/slowdive.jpg",
    song: "songs/everyone-knows.mp3"
  },
  {
    name: "Hold on",
    artist: "John Lennon",
    image: "covers/plastic-ono-band.jpg",
    song: "songs/hold-on.mp3"
  },
  {
    name: "Chocolate Matter",
    artist: "Sweet Trip",
    image: "covers/velocity-design-comfort.png",
    song: "songs/chocolatte-matter.mp3"
  },
  {
    name: "Dear Prudence",
    artist: "Siouxsie and the Banshees",
    image: "covers/hyaena.jpg",
    song: "songs/dear-prudence.mp3"
  },
  {
    name: "Mayonaise",
    artist: "The Smashing Pumpkins",
    image: "covers/siamese-dream.jpg",
    song: "songs/mayonaise.mp3"
  },
  {
    name: "Pictures of You",
    artist: "The Cure",
    image: "covers/disintegration.jpg",
    song: "songs/pictures-of-you.mp3"
  }
];
const getQueue = () => {
  let currentIndex = songCollection.length;
  let queue = [...songCollection];
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    let temp = queue[currentIndex];
    queue[currentIndex] = queue[randomIndex];
    queue[randomIndex] = temp;
  }
  return queue;
};
const playSong = (song) => {
  if (currentAudio.value !== null && audioStatus.value === status.PAUSED) {
    currentAudio.value.play();
    audioStatus.value = status.PLAYING;
    return;
  }
  if (currentAudio.value !== null) {
    currentAudio.value.pause();
  }
  const audio = new Audio(song);
  currentAudio.value = audio;
  currentAudio.value.play();
  audioStatus.value = status.PLAYING;
  currentAudio.value.volume = globalVolume.value / 100;
  audio.addEventListener("loadedmetadata", () => {
    audioDuration.value = audio.duration;
  });
};
const pauseSong = () => {
  if (currentAudio.value === null) return;
  if (audioStatus.value === status.PAUSED) return;
  currentAudio.value.pause();
  audioStatus.value = status.PAUSED;
};
const stopAudio = () => {
  if (currentAudio.value === null) return;
  currentAudio.value.pause();
  audioStatus.value = status.STOPPED;
  currentAudio.value = null;
  audioDuration.value = 0;
  currentPlayTime.value = 0;
};
const currentPlayTime = ref(0);
setInterval(() => {
  if (currentAudio.value === null) return;
  currentPlayTime.value = currentAudio.value.currentTime;
}, 1e3);
const setVolume = (volume) => {
  globalVolume.value = volume;
  if (currentAudio.value === null) return;
  currentAudio.value.volume = globalVolume.value / 100;
};
stopAudio();
const useMusic = () => {
  return {
    getQueue,
    playSong,
    pauseSong,
    stopAudio,
    audioDuration: computed(() => audioDuration.value),
    currentPlayTime: computed(() => currentPlayTime.value),
    setVolume,
    globalVolume: computed(() => globalVolume.value)
  };
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {
  __name: "Music",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    const audio = useMusic();
    const volume = ref(audio.globalVolume.value);
    watch(volume, (value) => {
      audio.setVolume(value);
    });
    const queue = ref(audio.getQueue());
    const current = ref(0);
    const isPlaying = ref(false);
    const listenedPercentage = computed(() => {
      return audio.currentPlayTime.value / audio.audioDuration.value * 100 + "%";
    });
    const play = () => {
      isPlaying.value = !isPlaying.value;
      if (isPlaying.value) audio.playSong(queue.value[current.value].song);
      else audio.pauseSong();
    };
    const next = () => {
      audio.stopAudio();
      isPlaying.value = true;
      current.value = (current.value + 1) % queue.value.length;
      audio.playSong(queue.value[current.value].song);
    };
    const previous = () => {
      audio.stopAudio();
      isPlaying.value = true;
      current.value = (current.value - 1 + queue.value.length) % queue.value.length;
      audio.playSong(queue.value[current.value].song);
    };
    onUnmounted(() => {
      audio.stopAudio();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Waveform Music Player",
        resizeable: true,
        closeable: true,
        size: { width: 300, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-5dc4ebe1${_scopeId}><p class="name" data-v-5dc4ebe1${_scopeId}>${ssrInterpolate(queue.value[current.value].name)}</p><p class="artist" data-v-5dc4ebe1${_scopeId}>${ssrInterpolate(queue.value[current.value].artist)}</p><img class="album center bevel"${ssrRenderAttr("src", queue.value[current.value].image)} alt="album cover" data-v-5dc4ebe1${_scopeId}><br data-v-5dc4ebe1${_scopeId}><div class="columns" data-v-5dc4ebe1${_scopeId}><p data-v-5dc4ebe1${_scopeId}>${ssrInterpolate(unref(formatSeconds)(unref(audio).currentPlayTime.value))}</p><p data-v-5dc4ebe1${_scopeId}>${ssrInterpolate(unref(formatTime)(unref(audio).audioDuration.value))}</p></div><div class="progress-indicator segmented" data-v-5dc4ebe1${_scopeId}><span class="progress-indicator-bar" style="${ssrRenderStyle({ width: listenedPercentage.value })}" data-v-5dc4ebe1${_scopeId}></span></div><br data-v-5dc4ebe1${_scopeId}><br data-v-5dc4ebe1${_scopeId}><div class="audio-controls" data-v-5dc4ebe1${_scopeId}><button data-v-5dc4ebe1${_scopeId}>Previous</button><button data-v-5dc4ebe1${_scopeId}>${ssrInterpolate(isPlaying.value ? "Pause" : "Play")}</button><button data-v-5dc4ebe1${_scopeId}>Next</button></div><div class="field-row" style="${ssrRenderStyle({ "width": "300px" })}" data-v-5dc4ebe1${_scopeId}><label for="range23" data-v-5dc4ebe1${_scopeId}>Low</label><input id="range23" type="range" min="1" max="100"${ssrRenderAttr("value", volume.value)} data-v-5dc4ebe1${_scopeId}><label for="range24" data-v-5dc4ebe1${_scopeId}>High</label></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "name" }, toDisplayString(queue.value[current.value].name), 1),
                createVNode("p", { class: "artist" }, toDisplayString(queue.value[current.value].artist), 1),
                createVNode("img", {
                  class: "album center bevel",
                  src: queue.value[current.value].image,
                  alt: "album cover"
                }, null, 8, ["src"]),
                createVNode("br"),
                createVNode("div", { class: "columns" }, [
                  createVNode("p", null, toDisplayString(unref(formatSeconds)(unref(audio).currentPlayTime.value)), 1),
                  createVNode("p", null, toDisplayString(unref(formatTime)(unref(audio).audioDuration.value)), 1)
                ]),
                createVNode("div", { class: "progress-indicator segmented" }, [
                  createVNode("span", {
                    class: "progress-indicator-bar",
                    style: { width: listenedPercentage.value }
                  }, null, 4)
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("div", { class: "audio-controls" }, [
                  createVNode("button", { onClick: previous }, "Previous"),
                  createVNode("button", { onClick: play }, toDisplayString(isPlaying.value ? "Pause" : "Play"), 1),
                  createVNode("button", { onClick: next }, "Next")
                ]),
                createVNode("div", {
                  class: "field-row",
                  style: { "width": "300px" }
                }, [
                  createVNode("label", { for: "range23" }, "Low"),
                  withDirectives(createVNode("input", {
                    id: "range23",
                    type: "range",
                    min: "1",
                    max: "100",
                    "onUpdate:modelValue": ($event) => volume.value = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, volume.value]
                  ]),
                  createVNode("label", { for: "range24" }, "High")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Music.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Music = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-5dc4ebe1"]]);
const _imports_0$4 = "/assets/h-example-1-VXQaCb40.png";
const _sfc_main$b = {
  __name: "Himawari",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Himawari2D",
        resizeable: true,
        closeable: true,
        size: { width: 500, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-1f7df68d${_scopeId}>Himawari2D</h3><p data-v-1f7df68d${_scopeId}>Himawari2D is a small 2D game engine I developed as a Professional Aptitude Project (PAP) in my last year of highschool.</p><p data-v-1f7df68d${_scopeId}>Although limited, Himawari is capable of powering basic games that don&#39;t require much computational power</p><div class="status-bar" data-v-1f7df68d${_scopeId}><p class="status-bar-field" data-v-1f7df68d${_scopeId}>Made using: Java, C++</p><p class="status-bar-field" data-v-1f7df68d${_scopeId}>Status: <span class="good" data-v-1f7df68d${_scopeId}>Released</span></p><p class="status-bar-field" data-v-1f7df68d${_scopeId}>Source: <a href="https://github.com/Sagiri721/Himawari-2d" data-v-1f7df68d${_scopeId}>Github</a></p></div><br data-v-1f7df68d${_scopeId}><p data-v-1f7df68d${_scopeId}>Himawari also comes with a basic <a href="https://github.com/Sagiri721/Himawari-SDK" data-v-1f7df68d${_scopeId}>GUI</a> and markdown <a href="https://github.com/Sagiri721/Himawari-Docs" data-v-1f7df68d${_scopeId}>markdown documentation</a></p><img class="small-image bevel"${ssrRenderAttr("src", _imports_0$4)} alt="" data-v-1f7df68d${_scopeId}><p class="legend" data-v-1f7df68d${_scopeId}>Fig1 - Super Mario All Stars recreated in Himawari2D</p>`);
          } else {
            return [
              createVNode("h3", null, "Himawari2D"),
              createVNode("p", null, "Himawari2D is a small 2D game engine I developed as a Professional Aptitude Project (PAP) in my last year of highschool."),
              createVNode("p", null, "Although limited, Himawari is capable of powering basic games that don't require much computational power"),
              createVNode("div", { class: "status-bar" }, [
                createVNode("p", { class: "status-bar-field" }, "Made using: Java, C++"),
                createVNode("p", { class: "status-bar-field" }, [
                  createTextVNode("Status: "),
                  createVNode("span", { class: "good" }, "Released")
                ]),
                createVNode("p", { class: "status-bar-field" }, [
                  createTextVNode("Source: "),
                  createVNode("a", { href: "https://github.com/Sagiri721/Himawari-2d" }, "Github")
                ])
              ]),
              createVNode("br"),
              createVNode("p", null, [
                createTextVNode("Himawari also comes with a basic "),
                createVNode("a", { href: "https://github.com/Sagiri721/Himawari-SDK" }, "GUI"),
                createTextVNode(" and markdown "),
                createVNode("a", { href: "https://github.com/Sagiri721/Himawari-Docs" }, "markdown documentation")
              ]),
              createVNode("img", {
                class: "small-image bevel",
                src: _imports_0$4,
                alt: ""
              }),
              createVNode("p", { class: "legend" }, "Fig1 - Super Mario All Stars recreated in Himawari2D")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Projects/Himawari.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Himawari = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1f7df68d"]]);
const _imports_0$3 = "/assets/ca-example-1-DvPhaMht.png";
const _sfc_main$a = {
  __name: "CharaArchive",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    function gotoSite() {
      window.open("https://chara-archive.firebaseapp.com/index.html", "_blank");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "The character archive",
        resizeable: true,
        closeable: true,
        size: { width: 500, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-6bd3f081${_scopeId}>The character archive</h3><p data-v-6bd3f081${_scopeId}>A web application that allows writers and generally creative people to save and customize their original characters (OC), as well as related information like world building descriptions and such.</p><div class="status-bar" data-v-6bd3f081${_scopeId}><p class="status-bar-field" data-v-6bd3f081${_scopeId}>Made using: JQuery, Firebase</p><p class="status-bar-field" data-v-6bd3f081${_scopeId}>Status: <span class="good" data-v-6bd3f081${_scopeId}>Released, frequent updates</span></p><p class="status-bar-field" data-v-6bd3f081${_scopeId}>Source: <a href="https://github.com/MarySlaOq/character-archive" data-v-6bd3f081${_scopeId}>Github</a></p></div><br data-v-6bd3f081${_scopeId}><button data-v-6bd3f081${_scopeId}>Open the character archive</button><br data-v-6bd3f081${_scopeId}><br data-v-6bd3f081${_scopeId}><img class="small-image bevel"${ssrRenderAttr("src", _imports_0$3)} alt="character archive" data-v-6bd3f081${_scopeId}><p class="legend" data-v-6bd3f081${_scopeId}>Fig1 - Relationships between characters examplified</p>`);
          } else {
            return [
              createVNode("h3", null, "The character archive"),
              createVNode("p", null, "A web application that allows writers and generally creative people to save and customize their original characters (OC), as well as related information like world building descriptions and such."),
              createVNode("div", { class: "status-bar" }, [
                createVNode("p", { class: "status-bar-field" }, "Made using: JQuery, Firebase"),
                createVNode("p", { class: "status-bar-field" }, [
                  createTextVNode("Status: "),
                  createVNode("span", { class: "good" }, "Released, frequent updates")
                ]),
                createVNode("p", { class: "status-bar-field" }, [
                  createTextVNode("Source: "),
                  createVNode("a", { href: "https://github.com/MarySlaOq/character-archive" }, "Github")
                ])
              ]),
              createVNode("br"),
              createVNode("button", { onClick: gotoSite }, "Open the character archive"),
              createVNode("br"),
              createVNode("br"),
              createVNode("img", {
                class: "small-image bevel",
                src: _imports_0$3,
                alt: "character archive"
              }),
              createVNode("p", { class: "legend" }, "Fig1 - Relationships between characters examplified")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Projects/CharaArchive.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CharaArchive = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-6bd3f081"]]);
const _imports_0$2 = "/assets/r-example-1-Cly7j3YO.gif";
const _sfc_main$9 = {
  __name: "Renderer",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "SDL 3D Renderer",
        resizeable: true,
        closeable: true,
        size: { width: 500, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-a9ca8b4a${_scopeId}>3D Renderer</h3><p data-v-a9ca8b4a${_scopeId}>A basic 3D renderer originally made to be an extension of the Himawari game engine.</p><div class="status-bar" data-v-a9ca8b4a${_scopeId}><p class="status-bar-field" data-v-a9ca8b4a${_scopeId}>Made using: Java, SDL2</p><p class="status-bar-field" data-v-a9ca8b4a${_scopeId}>Status: <span class="bad" data-v-a9ca8b4a${_scopeId}>Stalled</span></p><p class="status-bar-field" data-v-a9ca8b4a${_scopeId}>Source: Unavailable</p></div><br data-v-a9ca8b4a${_scopeId}><img class="full-image bevel"${ssrRenderAttr("src", _imports_0$2)} alt="two objects spinning" data-v-a9ca8b4a${_scopeId}><p class="legend" data-v-a9ca8b4a${_scopeId}>Fig1 - A Utah teapot and a cube rotating and overlapping</p>`);
          } else {
            return [
              createVNode("h3", null, "3D Renderer"),
              createVNode("p", null, "A basic 3D renderer originally made to be an extension of the Himawari game engine."),
              createVNode("div", { class: "status-bar" }, [
                createVNode("p", { class: "status-bar-field" }, "Made using: Java, SDL2"),
                createVNode("p", { class: "status-bar-field" }, [
                  createTextVNode("Status: "),
                  createVNode("span", { class: "bad" }, "Stalled")
                ]),
                createVNode("p", { class: "status-bar-field" }, "Source: Unavailable")
              ]),
              createVNode("br"),
              createVNode("img", {
                class: "full-image bevel",
                src: _imports_0$2,
                alt: "two objects spinning"
              }),
              createVNode("p", { class: "legend" }, "Fig1 - A Utah teapot and a cube rotating and overlapping")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Projects/Renderer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Renderer = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-a9ca8b4a"]]);
const _imports_0$1 = "/assets/g-example-1-D9-I7S88.png";
const _sfc_main$8 = {
  __name: "GLVNE",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Raylib visual novel library",
        resizeable: true,
        closeable: true,
        size: { width: 500, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-ad9ba4b5${_scopeId}>GLVNE</h3><p data-v-ad9ba4b5${_scopeId}>GLVNE is what we are calling our <a href="https://www.raylib.com/" data-v-ad9ba4b5${_scopeId}>Raylib</a> library to allow any type of creator to easily create visual novels / sound novels / adventure games.</p><p data-v-ad9ba4b5${_scopeId}>This project is inspired by the likes of <a href="https://www.renpy.org/" data-v-ad9ba4b5${_scopeId}>Renpy</a> but we aim to make it more artistically (and programmatically) customizable, with features like: </p><div class="status-bar" data-v-ad9ba4b5${_scopeId}><p class="status-bar-field" data-v-ad9ba4b5${_scopeId}>Made using: C++, Raylib</p><p class="status-bar-field" data-v-ad9ba4b5${_scopeId}>Status: <span class="wip" data-v-ad9ba4b5${_scopeId}>WIP</span></p><p class="status-bar-field" data-v-ad9ba4b5${_scopeId}>Source: Soon...</p></div><br data-v-ad9ba4b5${_scopeId}><img class="small-image bevel"${ssrRenderAttr("src", _imports_0$1)} alt="an example scene of GLVNE" data-v-ad9ba4b5${_scopeId}><p class="legend" data-v-ad9ba4b5${_scopeId}>Fig1 - An example scene of GLVNE with GUI controls and text effects applied</p>`);
          } else {
            return [
              createVNode("h3", null, "GLVNE"),
              createVNode("p", null, [
                createTextVNode("GLVNE is what we are calling our "),
                createVNode("a", { href: "https://www.raylib.com/" }, "Raylib"),
                createTextVNode(" library to allow any type of creator to easily create visual novels / sound novels / adventure games.")
              ]),
              createVNode("p", null, [
                createTextVNode("This project is inspired by the likes of "),
                createVNode("a", { href: "https://www.renpy.org/" }, "Renpy"),
                createTextVNode(" but we aim to make it more artistically (and programmatically) customizable, with features like: ")
              ]),
              createVNode("div", { class: "status-bar" }, [
                createVNode("p", { class: "status-bar-field" }, "Made using: C++, Raylib"),
                createVNode("p", { class: "status-bar-field" }, [
                  createTextVNode("Status: "),
                  createVNode("span", { class: "wip" }, "WIP")
                ]),
                createVNode("p", { class: "status-bar-field" }, "Source: Soon...")
              ]),
              createVNode("br"),
              createVNode("img", {
                class: "small-image bevel",
                src: _imports_0$1,
                alt: "an example scene of GLVNE"
              }),
              createVNode("p", { class: "legend" }, "Fig1 - An example scene of GLVNE with GUI controls and text effects applied")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Projects/GLVNE.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const GLVNE = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ad9ba4b5"]]);
const _imports_0 = "/assets/java-3BrQNTur.png";
const _imports_1 = "/assets/csharp-Cph4xaIV.png";
const _imports_2 = "/assets/python-B5HzG9ud.png";
const _imports_3 = "/assets/c-dbBhczqp.png";
const _imports_4 = "/assets/js-Bu6ZFjaT.png";
const _imports_5 = "/assets/sqlite-DQ_xhjbk.png";
const _imports_6 = "/assets/mysql-B2ZPO8Ol.png";
const _imports_7 = "/assets/oracle-a0jTg6Al.png";
const _imports_8 = "/assets/mongo-DRXOb1WL.png";
const _sfc_main$7 = {
  __name: "Technical",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    const tab = ref("pl");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Technical Qualifications",
        resizeable: true,
        closeable: true,
        size: { width: 550, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="window-body" data-v-6ad7e6d8${_scopeId}><menu role="tablist" data-v-6ad7e6d8${_scopeId}><li role="tab"${ssrRenderAttr("aria-selected", tab.value == "pl")} data-v-6ad7e6d8${_scopeId}><a href="#tabs" data-v-6ad7e6d8${_scopeId}>Programming languages</a></li><li role="tab"${ssrRenderAttr("aria-selected", tab.value == "gd")} data-v-6ad7e6d8${_scopeId}><a href="#tabs" data-v-6ad7e6d8${_scopeId}>Game development</a></li><li role="tab"${ssrRenderAttr("aria-selected", tab.value == "la")} data-v-6ad7e6d8${_scopeId}><a href="#tabs" data-v-6ad7e6d8${_scopeId}>Libraries and applications</a></li><li role="tab"${ssrRenderAttr("aria-selected", tab.value == "db")} data-v-6ad7e6d8${_scopeId}><a href="#tabs" data-v-6ad7e6d8${_scopeId}>Databases</a></li></menu><div class="window" role="tabpanel" data-v-6ad7e6d8${_scopeId}>`);
            if (tab.value == "pl") {
              _push2(`<div class="window-body" data-v-6ad7e6d8${_scopeId}><div class="columns group-container" data-v-6ad7e6d8${_scopeId}><div data-v-6ad7e6d8${_scopeId}><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>Java</p><img${ssrRenderAttr("src", _imports_0)} alt="Java icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>C#</p><img${ssrRenderAttr("src", _imports_1)} alt="C# icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>Python</p><img${ssrRenderAttr("src", _imports_2)} alt="Python icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>C / C++</p><img${ssrRenderAttr("src", _imports_3)} alt="C++ icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>JavaScript</p><img${ssrRenderAttr("src", _imports_4)} alt="JavaScript icon" data-v-6ad7e6d8${_scopeId}></div></div></div><hr data-v-6ad7e6d8${_scopeId}><div class="pad-me" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}> Some other languages I&#39;ve learned but don&#39;t have enough experience to confidently list here are: </p><ul data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>PHP</li><li data-v-6ad7e6d8${_scopeId}>Assembly x86</li><li data-v-6ad7e6d8${_scopeId}>Lua</li><li data-v-6ad7e6d8${_scopeId}>Rust</li><li data-v-6ad7e6d8${_scopeId}>Pascal</li><li data-v-6ad7e6d8${_scopeId}>VBA</li></ul></div></div></div>`);
            } else if (tab.value == "gd") {
              _push2(`<div class="window-body" data-v-6ad7e6d8${_scopeId}><div class="game-group-container" data-v-6ad7e6d8${_scopeId}><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>Raylib</p><img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Raylib_logo.png" alt="Raylib icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>Unity</p><img src="https://static-00.iconduck.com/assets.00/unity-icon-999x1024-kgzo1ar1.png" alt="Unity icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>Godot</p><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg" alt="Godot icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>LibGDX</p><img src="https://libgdx.com/assets/brand/stacked.png" alt="LibGDX icon" data-v-6ad7e6d8${_scopeId}></div></div></div></div>`);
            } else if (tab.value == "la") {
              _push2(`<div class="window-body" data-v-6ad7e6d8${_scopeId}><div class="columns lib-container" data-v-6ad7e6d8${_scopeId}><div data-v-6ad7e6d8${_scopeId}><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Java icon" data-v-6ad7e6d8${_scopeId}><ul data-v-6ad7e6d8${_scopeId}><div class="columns close" data-v-6ad7e6d8${_scopeId}><div data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>JUnit</li><li data-v-6ad7e6d8${_scopeId}>Jsoup</li><li data-v-6ad7e6d8${_scopeId}>JDBC</li></div><div data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>Swing &amp; JavaFX</li><li data-v-6ad7e6d8${_scopeId}>Guava</li></div></div></ul></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="C# icon" data-v-6ad7e6d8${_scopeId}><ul data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>.NET</li><li data-v-6ad7e6d8${_scopeId}>Windows Forms</li></ul></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="Python icon" data-v-6ad7e6d8${_scopeId}><ul data-v-6ad7e6d8${_scopeId}><div class="columns close" data-v-6ad7e6d8${_scopeId}><div data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>Discord.py</li><li data-v-6ad7e6d8${_scopeId}>PIL</li><li data-v-6ad7e6d8${_scopeId}>BeautifulSoup</li></div><div data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>Pandas</li><li data-v-6ad7e6d8${_scopeId}>Scipy</li></div></div></ul></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="C++ icon" data-v-6ad7e6d8${_scopeId}><ul data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>SDL 2</li><li data-v-6ad7e6d8${_scopeId}>Crow</li><li data-v-6ad7e6d8${_scopeId}>Detours</li></ul></div></div><div class="group" data-v-6ad7e6d8${_scopeId}><div class="icon-group" data-v-6ad7e6d8${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="JavaScript icon" data-v-6ad7e6d8${_scopeId}><ul data-v-6ad7e6d8${_scopeId}><div class="columns close" data-v-6ad7e6d8${_scopeId}><div data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>Electron</li><li data-v-6ad7e6d8${_scopeId}>Express</li></div><div data-v-6ad7e6d8${_scopeId}><li data-v-6ad7e6d8${_scopeId}>React</li><li data-v-6ad7e6d8${_scopeId}>Vue</li></div></div></ul></div></div></div><hr data-v-6ad7e6d8${_scopeId}><div class="pad-me" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}><div data-v-6ad7e6d8${_scopeId}><div data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}><b data-v-6ad7e6d8${_scopeId}>Git</b></p><p data-v-6ad7e6d8${_scopeId}>Version control tool</p></div><div data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}><b data-v-6ad7e6d8${_scopeId}>PlantUML</b></p><p data-v-6ad7e6d8${_scopeId}>UML diagramming tool</p></div><div data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}><b data-v-6ad7e6d8${_scopeId}>GnuPlot</b></p><p data-v-6ad7e6d8${_scopeId}>Plotting library</p></div><div data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}><b data-v-6ad7e6d8${_scopeId}>Make &amp; CMake</b></p><p data-v-6ad7e6d8${_scopeId}>Build automation tools</p></div><div data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}><b data-v-6ad7e6d8${_scopeId}>Maven</b></p><p data-v-6ad7e6d8${_scopeId}>Build automation tool</p></div><div data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}><b data-v-6ad7e6d8${_scopeId}>Node.js</b></p><p data-v-6ad7e6d8${_scopeId}>Runtime environment</p></div></div></p></div></div></div>`);
            } else if (tab.value == "db") {
              _push2(`<div class="window-body" data-v-6ad7e6d8${_scopeId}><div class="game-group-container" data-v-6ad7e6d8${_scopeId}><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>SQLite3</p><img${ssrRenderAttr("src", _imports_5)} alt="SQLite icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>MySQL</p><img${ssrRenderAttr("src", _imports_6)} alt="MySQL icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>Oracle database</p><img${ssrRenderAttr("src", _imports_7)} alt="Oracle icon" data-v-6ad7e6d8${_scopeId}></div></div><div class="game-group" data-v-6ad7e6d8${_scopeId}><div class="game-icon-group" data-v-6ad7e6d8${_scopeId}><p data-v-6ad7e6d8${_scopeId}>MongoDB</p><img${ssrRenderAttr("src", _imports_8)} alt="MongoDB icon" data-v-6ad7e6d8${_scopeId}></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "window-body" }, [
                createVNode("menu", { role: "tablist" }, [
                  createVNode("li", {
                    onClick: ($event) => tab.value = "pl",
                    role: "tab",
                    "aria-selected": tab.value == "pl"
                  }, [
                    createVNode("a", { href: "#tabs" }, "Programming languages")
                  ], 8, ["onClick", "aria-selected"]),
                  createVNode("li", {
                    onClick: ($event) => tab.value = "gd",
                    role: "tab",
                    "aria-selected": tab.value == "gd"
                  }, [
                    createVNode("a", { href: "#tabs" }, "Game development")
                  ], 8, ["onClick", "aria-selected"]),
                  createVNode("li", {
                    onClick: ($event) => tab.value = "la",
                    role: "tab",
                    "aria-selected": tab.value == "la"
                  }, [
                    createVNode("a", { href: "#tabs" }, "Libraries and applications")
                  ], 8, ["onClick", "aria-selected"]),
                  createVNode("li", {
                    onClick: ($event) => tab.value = "db",
                    role: "tab",
                    "aria-selected": tab.value == "db"
                  }, [
                    createVNode("a", { href: "#tabs" }, "Databases")
                  ], 8, ["onClick", "aria-selected"])
                ]),
                createVNode("div", {
                  class: "window",
                  role: "tabpanel"
                }, [
                  tab.value == "pl" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "window-body"
                  }, [
                    createVNode("div", { class: "columns group-container" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("p", null, "Java"),
                            createVNode("img", {
                              src: _imports_0,
                              alt: "Java icon"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("p", null, "C#"),
                            createVNode("img", {
                              src: _imports_1,
                              alt: "C# icon"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("p", null, "Python"),
                            createVNode("img", {
                              src: _imports_2,
                              alt: "Python icon"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("p", null, "C / C++"),
                            createVNode("img", {
                              src: _imports_3,
                              alt: "C++ icon"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("p", null, "JavaScript"),
                            createVNode("img", {
                              src: _imports_4,
                              alt: "JavaScript icon"
                            })
                          ])
                        ])
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "pad-me" }, [
                        createVNode("p", null, " Some other languages I've learned but don't have enough experience to confidently list here are: "),
                        createVNode("ul", null, [
                          createVNode("li", null, "PHP"),
                          createVNode("li", null, "Assembly x86"),
                          createVNode("li", null, "Lua"),
                          createVNode("li", null, "Rust"),
                          createVNode("li", null, "Pascal"),
                          createVNode("li", null, "VBA")
                        ])
                      ])
                    ])
                  ])) : tab.value == "gd" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "window-body"
                  }, [
                    createVNode("div", { class: "game-group-container" }, [
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "Raylib"),
                          createVNode("img", {
                            src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Raylib_logo.png",
                            alt: "Raylib icon"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "Unity"),
                          createVNode("img", {
                            src: "https://static-00.iconduck.com/assets.00/unity-icon-999x1024-kgzo1ar1.png",
                            alt: "Unity icon"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "Godot"),
                          createVNode("img", {
                            src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
                            alt: "Godot icon"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "LibGDX"),
                          createVNode("img", {
                            src: "https://libgdx.com/assets/brand/stacked.png",
                            alt: "LibGDX icon"
                          })
                        ])
                      ])
                    ])
                  ])) : tab.value == "la" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "window-body"
                  }, [
                    createVNode("div", { class: "columns lib-container" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "Java icon"
                            }),
                            createVNode("ul", null, [
                              createVNode("div", { class: "columns close" }, [
                                createVNode("div", null, [
                                  createVNode("li", null, "JUnit"),
                                  createVNode("li", null, "Jsoup"),
                                  createVNode("li", null, "JDBC")
                                ]),
                                createVNode("div", null, [
                                  createVNode("li", null, "Swing & JavaFX"),
                                  createVNode("li", null, "Guava")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "C# icon"
                            }),
                            createVNode("ul", null, [
                              createVNode("li", null, ".NET"),
                              createVNode("li", null, "Windows Forms")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("img", {
                              src: _imports_2,
                              alt: "Python icon"
                            }),
                            createVNode("ul", null, [
                              createVNode("div", { class: "columns close" }, [
                                createVNode("div", null, [
                                  createVNode("li", null, "Discord.py"),
                                  createVNode("li", null, "PIL"),
                                  createVNode("li", null, "BeautifulSoup")
                                ]),
                                createVNode("div", null, [
                                  createVNode("li", null, "Pandas"),
                                  createVNode("li", null, "Scipy")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("img", {
                              src: _imports_3,
                              alt: "C++ icon"
                            }),
                            createVNode("ul", null, [
                              createVNode("li", null, "SDL 2"),
                              createVNode("li", null, "Crow"),
                              createVNode("li", null, "Detours")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "icon-group" }, [
                            createVNode("img", {
                              src: _imports_4,
                              alt: "JavaScript icon"
                            }),
                            createVNode("ul", null, [
                              createVNode("div", { class: "columns close" }, [
                                createVNode("div", null, [
                                  createVNode("li", null, "Electron"),
                                  createVNode("li", null, "Express")
                                ]),
                                createVNode("div", null, [
                                  createVNode("li", null, "React"),
                                  createVNode("li", null, "Vue")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "pad-me" }, [
                        createVNode("p", null, [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode("p", null, [
                                createVNode("b", null, "Git")
                              ]),
                              createVNode("p", null, "Version control tool")
                            ]),
                            createVNode("div", null, [
                              createVNode("p", null, [
                                createVNode("b", null, "PlantUML")
                              ]),
                              createVNode("p", null, "UML diagramming tool")
                            ]),
                            createVNode("div", null, [
                              createVNode("p", null, [
                                createVNode("b", null, "GnuPlot")
                              ]),
                              createVNode("p", null, "Plotting library")
                            ]),
                            createVNode("div", null, [
                              createVNode("p", null, [
                                createVNode("b", null, "Make & CMake")
                              ]),
                              createVNode("p", null, "Build automation tools")
                            ]),
                            createVNode("div", null, [
                              createVNode("p", null, [
                                createVNode("b", null, "Maven")
                              ]),
                              createVNode("p", null, "Build automation tool")
                            ]),
                            createVNode("div", null, [
                              createVNode("p", null, [
                                createVNode("b", null, "Node.js")
                              ]),
                              createVNode("p", null, "Runtime environment")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])) : tab.value == "db" ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "window-body"
                  }, [
                    createVNode("div", { class: "game-group-container" }, [
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "SQLite3"),
                          createVNode("img", {
                            src: _imports_5,
                            alt: "SQLite icon"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "MySQL"),
                          createVNode("img", {
                            src: _imports_6,
                            alt: "MySQL icon"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "Oracle database"),
                          createVNode("img", {
                            src: _imports_7,
                            alt: "Oracle icon"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "game-group" }, [
                        createVNode("div", { class: "game-icon-group" }, [
                          createVNode("p", null, "MongoDB"),
                          createVNode("img", {
                            src: _imports_8,
                            alt: "MongoDB icon"
                          })
                        ])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Technical.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Technical = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6ad7e6d8"]]);
const _sfc_main$6 = {
  __name: "Warning",
  __ssrInlineRender: true,
  props: {
    id: String,
    title: {
      type: String,
      default: "Warning"
    },
    message: {
      type: String,
      default: "This is a warning message"
    },
    type: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const warnings = [
      "msg_information-0.png",
      "msg_warning-0.png",
      "msg_error-0.png",
      "msg_question-0.png"
    ];
    function closeMe() {
      usePrograms().closeProgram(props.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "System",
        resizeable: true,
        closeable: true,
        size: { width: 250, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e1f35ff5${_scopeId}><div class="gap" data-v-e1f35ff5${_scopeId}><img${ssrRenderAttr("src", "icons/" + warnings[props.type])} alt="Warning icon" data-v-e1f35ff5${_scopeId}><p data-v-e1f35ff5${_scopeId}>${ssrInterpolate(props.message)}</p></div><br data-v-e1f35ff5${_scopeId}><div class="right" data-v-e1f35ff5${_scopeId}><button data-v-e1f35ff5${_scopeId}>OK</button><button data-v-e1f35ff5${_scopeId}>Cancel</button></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "gap" }, [
                  createVNode("img", {
                    src: "icons/" + warnings[props.type],
                    alt: "Warning icon"
                  }, null, 8, ["src"]),
                  createVNode("p", null, toDisplayString(props.message), 1)
                ]),
                createVNode("br"),
                createVNode("div", { class: "right" }, [
                  createVNode("button", { onClick: closeMe }, "OK"),
                  createVNode("button", { onClick: closeMe }, "Cancel")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Warning.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Warning = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e1f35ff5"]]);
const _sfc_main$5 = {
  __name: "Achievements",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Achievements",
        resizeable: true,
        closeable: true,
        size: { width: 340, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-7d213b8e${_scopeId}><div class="achievement-container" data-v-7d213b8e${_scopeId}><div class="window" data-v-7d213b8e${_scopeId}><p data-v-7d213b8e${_scopeId}><b data-v-7d213b8e${_scopeId}>ToPAS (2022)</b></p><p data-v-7d213b8e${_scopeId}>Programming contest for highschoolers</p><p class="bronze" data-v-7d213b8e${_scopeId}><b data-v-7d213b8e${_scopeId}>3rd place finish</b></p></div><div class="window" data-v-7d213b8e${_scopeId}><p data-v-7d213b8e${_scopeId}><b data-v-7d213b8e${_scopeId}>ToPAS (2023)</b></p><p data-v-7d213b8e${_scopeId}>Programming contest for highschoolers</p><p data-v-7d213b8e${_scopeId}><b data-v-7d213b8e${_scopeId}>8th place finish</b></p></div><div class="window" data-v-7d213b8e${_scopeId}><p data-v-7d213b8e${_scopeId}><b data-v-7d213b8e${_scopeId}>Tecla 2023</b></p><p data-v-7d213b8e${_scopeId}>Programming tournament for students</p></div><div class="window" data-v-7d213b8e${_scopeId}><p data-v-7d213b8e${_scopeId}><b data-v-7d213b8e${_scopeId}>FCUP GameJam 2024</b></p><p data-v-7d213b8e${_scopeId}>Game development contest</p><p class="silver" data-v-7d213b8e${_scopeId}><b data-v-7d213b8e${_scopeId}>2nd place finish</b></p></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "achievement-container" }, [
                  createVNode("div", { class: "window" }, [
                    createVNode("p", null, [
                      createVNode("b", null, "ToPAS (2022)")
                    ]),
                    createVNode("p", null, "Programming contest for highschoolers"),
                    createVNode("p", { class: "bronze" }, [
                      createVNode("b", null, "3rd place finish")
                    ])
                  ]),
                  createVNode("div", { class: "window" }, [
                    createVNode("p", null, [
                      createVNode("b", null, "ToPAS (2023)")
                    ]),
                    createVNode("p", null, "Programming contest for highschoolers"),
                    createVNode("p", null, [
                      createVNode("b", null, "8th place finish")
                    ])
                  ]),
                  createVNode("div", { class: "window" }, [
                    createVNode("p", null, [
                      createVNode("b", null, "Tecla 2023")
                    ]),
                    createVNode("p", null, "Programming tournament for students")
                  ]),
                  createVNode("div", { class: "window" }, [
                    createVNode("p", null, [
                      createVNode("b", null, "FCUP GameJam 2024")
                    ]),
                    createVNode("p", null, "Game development contest"),
                    createVNode("p", { class: "silver" }, [
                      createVNode("b", null, "2nd place finish")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Achievements.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Achievements = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7d213b8e"]]);
const _sfc_main$4 = {
  __name: "Me",
  __ssrInlineRender: true,
  props: ["id"],
  setup(__props) {
    const props = __props;
    const program = usePrograms();
    function openMusicPlayer() {
      program.openProgram("music", generateId());
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: "Sagiri721",
        resizeable: true,
        closeable: true,
        size: { width: 700, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns square" data-v-6b0d242a${_scopeId}><div data-v-6b0d242a${_scopeId}><div class="subtitle" data-v-6b0d242a${_scopeId}><h3 data-v-6b0d242a${_scopeId}>Hi! I&#39;m Tiago </h3><p data-v-6b0d242a${_scopeId}>Also known as Sagiri721 on the net</p></div><p class="body" data-v-6b0d242a${_scopeId}> I&#39;m a ${ssrInterpolate(unref(myAge)())} years old Computer Science student. I&#39;m passionate about <b data-v-6b0d242a${_scopeId}>game development</b>, <b data-v-6b0d242a${_scopeId}>graphics programming</b>, and old computers and consoles. <br data-v-6b0d242a${_scopeId}> I learned to code with Gamemaker studio when I was 14 and I&#39;ve been making stuff ever since. </p><p class="body" data-v-6b0d242a${_scopeId}><br data-v-6b0d242a${_scopeId}><p data-v-6b0d242a${_scopeId}>If anything comes up you can contact me through <a href="mailto:tiagobarrossao@gmail.com" data-v-6b0d242a${_scopeId}>email</a> or <a href="https://www.linkedin.com/in/tiago-barros-197aab2aa/" data-v-6b0d242a${_scopeId}>LinkedIn</a></p><p data-v-6b0d242a${_scopeId}>Without further ado, Welcome to my portfolio! I hope you enjoy your stay. <br data-v-6b0d242a${_scopeId}> Listen to some music while you&#39;re here!</p><button data-v-6b0d242a${_scopeId}> Open the music player </button><br data-v-6b0d242a${_scopeId}><br data-v-6b0d242a${_scopeId}><div class="status-bar" data-v-6b0d242a${_scopeId}><p class="status-bar-field" data-v-6b0d242a${_scopeId}>Psst! You can drag windows around to your liking. Try it out!</p></div></p></div><img class="bevel" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="A picture of me" data-v-6b0d242a${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "columns square" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "subtitle" }, [
                    createVNode("h3", null, "Hi! I'm Tiago "),
                    createVNode("p", null, "Also known as Sagiri721 on the net")
                  ]),
                  createVNode("p", { class: "body" }, [
                    createTextVNode(" I'm a " + toDisplayString(unref(myAge)()) + " years old Computer Science student. I'm passionate about ", 1),
                    createVNode("b", null, "game development"),
                    createTextVNode(", "),
                    createVNode("b", null, "graphics programming"),
                    createTextVNode(", and old computers and consoles. "),
                    createVNode("br"),
                    createTextVNode(" I learned to code with Gamemaker studio when I was 14 and I've been making stuff ever since. ")
                  ]),
                  createVNode("p", { class: "body" }, [
                    createVNode("br"),
                    createVNode("p", null, [
                      createTextVNode("If anything comes up you can contact me through "),
                      createVNode("a", { href: "mailto:tiagobarrossao@gmail.com" }, "email"),
                      createTextVNode(" or "),
                      createVNode("a", { href: "https://www.linkedin.com/in/tiago-barros-197aab2aa/" }, "LinkedIn")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Without further ado, Welcome to my portfolio! I hope you enjoy your stay. "),
                      createVNode("br"),
                      createTextVNode(" Listen to some music while you're here!")
                    ]),
                    createVNode("button", { onClick: openMusicPlayer }, " Open the music player "),
                    createVNode("br"),
                    createVNode("br"),
                    createVNode("div", { class: "status-bar" }, [
                      createVNode("p", { class: "status-bar-field" }, "Psst! You can drag windows around to your liking. Try it out!")
                    ])
                  ])
                ]),
                createVNode("img", {
                  class: "bevel",
                  src: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
                  alt: "A picture of me"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Me.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Me = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6b0d242a"]]);
const programMapping = ref({});
const processes = ref([]);
const registerApplication = (name, program, options = { singleton: false }) => {
  programMapping.value[name] = { program, options };
};
registerApplication("quote", _sfc_main$g);
registerApplication("linguistics", _sfc_main$f);
registerApplication("system", _sfc_main$e);
registerApplication("prompt", _sfc_main$d);
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
  return programMapping.value[name] !== void 0;
};
const openProgram = (name, pid, props = {}) => {
  const program = programMapping.value[name].program;
  const options = programMapping.value[name].options;
  if (program == void 0) {
    console.error("Program not found: ", name);
    return;
  }
  const mountEl = document.createElement("div");
  document.getElementById("desktop").appendChild(mountEl);
  if (options == null ? void 0 : options.singleton) {
    processes.value.forEach((process) => {
      if (process.name === name) {
        closeProgram(process.pid);
      }
    });
  }
  console.log("Opening program: ", name, pid, props);
  console.log({ id: pid, ...props });
  const dialog = createApp$1(
    program,
    { id: pid, ...props }
  );
  dialog.mount(mountEl);
  processes.value.push({ pid, dialog, element: mountEl, name, focus: false });
};
const requestFocus = (pid) => {
  processes.value.forEach((process) => {
    process.focus = process.pid == pid;
  });
  updateWindowZIndex();
};
const closeProgram = (pid) => {
  const process = processes.value.find((process2) => process2.pid === pid);
  if (process == void 0) return;
  process.dialog.unmount();
  document.getElementById("desktop").removeChild(process.element);
  processes.value = processes.value.filter((process2) => process2.pid !== pid);
};
const closeAllPrograms = () => {
  processes.value.forEach((process) => {
    process.dialog.unmount();
    document.getElementById("desktop").removeChild(process.element);
  });
  processes.value = [];
};
const processCount = computed(() => processes.value.length);
const updateWindowZIndex = () => {
  processes.value.forEach((process) => {
    let z = process.focus ? 1 : 0;
    let window2 = process.element.getElementsByClassName("window")[0];
    window2.style.zIndex = z;
  });
};
const isFocused = (pid) => {
  const process = processes.value.find((process2) => process2.pid === pid);
  if (process == void 0) return true;
  return process.focus;
};
const usePrograms = () => {
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
    isFocused
  };
};
const MARGIN = 32;
const _sfc_main$3 = {
  __name: "Window",
  __ssrInlineRender: true,
  props: ["id", "title", "body", "resizeable", "closeable", "start_position", "size", "data"],
  setup(__props) {
    const programs2 = usePrograms();
    const isColliding = () => false;
    const props = __props;
    const minimized = ref(false);
    const isDragging = ref(false);
    const position = ref({ x: 100, y: 100 });
    const dimensions = ref({ width: props.size ? props.size.width : 250, height: props.size ? props.size.height : 80 });
    const mouse = ref({ x: 0, y: 0 });
    window.addEventListener("mousemove", (event) => {
      if (isDragging.value) {
        const xx = event.clientX - mouse.value.x;
        const yy = event.clientY - mouse.value.y;
        position.value.x += xx;
        position.value.y += yy;
      }
      mouse.value.x = event.clientX;
      mouse.value.y = event.clientY;
    });
    window.addEventListener("mouseup", () => {
      isDragging.value = false;
    });
    onMounted(() => {
      const calculateRandomPosition = () => {
        const windowElement = document.getElementById(props.id + "-window");
        const thisWindowWidth = (dimensions.value.width ? dimensions.value.width : windowElement.clientWidth) + MARGIN;
        const thisWindowHeight = (dimensions.value.height ? dimensions.value.height : windowElement.clientHeight) + MARGIN;
        const windowXX = window.innerWidth - thisWindowWidth;
        const windowYY = window.innerHeight - thisWindowHeight;
        return {
          x: Math.floor(Math.random() * windowXX),
          y: Math.floor(Math.random() * windowYY)
        };
      };
      position.value = props.start_position || calculateRandomPosition();
      if (!props.start_position) {
        while (isColliding()) {
          position.value = calculateRandomPosition();
        }
      }
      if (props.data && props.data.html) {
        document.getElementById(props.id).innerHTML = props.data.html;
      }
      programs2.requestFocus(props.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-c60c8e31><div${ssrRenderAttr("id", props.id + "-window")} class="window window-shadow" style="${ssrRenderStyle({
        display: minimized.value ? "none" : "block",
        position: "absolute",
        margin: MARGIN + "px",
        width: dimensions.value.width ? dimensions.value.width + "px" : "auto",
        height: dimensions.value.height ? dimensions.value.height + "px" : "auto",
        left: position.value.x + "px",
        top: position.value.y + "px"
      })}" data-v-c60c8e31><div class="${ssrRenderClass("title-bar " + (unref(programs2).isFocused() ? "" : "inactive"))}" draggable="false" style="${ssrRenderStyle({ cursor: isDragging.value ? "grabbing" : "grab" })}" data-v-c60c8e31><div class="title-bar-text" data-v-c60c8e31>${ssrInterpolate(props.title)}</div><div class="title-bar-controls" data-v-c60c8e31><button aria-label="Minimize" data-v-c60c8e31></button>`);
      if (props.closeable) {
        _push(`<button aria-label="Close" data-v-c60c8e31></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="window-body" draggable="false" data-v-c60c8e31><span${ssrRenderAttr("id", props.id)} data-v-c60c8e31>${ssrInterpolate(props.body)} `);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></div></div></div><div style="${ssrRenderStyle({
        display: minimized.value ? "block" : "none",
        position: "absolute",
        margin: MARGIN + "px",
        width: dimensions.value.width ? dimensions.value.width + "px" : "auto",
        height: dimensions.value.height ? dimensions.value.height + "px" : "auto",
        left: position.value.x + "px",
        top: position.value.y + "px"
      })}" data-v-c60c8e31><div class="window" data-v-c60c8e31><div class="${ssrRenderClass("title-bar " + (unref(programs2).isFocused() ? "" : "inactive"))}" draggable="false" style="${ssrRenderStyle({ cursor: isDragging.value ? "grabbing" : "grab" })}" data-v-c60c8e31><div class="title-bar-text" data-v-c60c8e31>${ssrInterpolate(props.title)}</div><div class="title-bar-controls" data-v-c60c8e31><button aria-label="Restore" data-v-c60c8e31></button>`);
      if (props.closeable) {
        _push(`<button aria-label="Close" data-v-c60c8e31></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Window.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Window = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c60c8e31"]]);
const _sfc_main$2 = {
  __name: "MenuBar",
  __ssrInlineRender: true,
  props: ["id", "title", "resizeable", "closeable"],
  setup(__props) {
    const program = usePrograms();
    const closeAll = () => program.closeAllPrograms();
    const cpuUsage = ref(Math.floor(Math.random() * 100));
    const props = __props;
    function openProgram2(name, options = {}) {
      program.openProgram(name, generateId(), options);
    }
    setInterval(() => {
      let increment = Math.floor(Math.random() * 10) - 5;
      let shouldSpike = Math.random() < 0.1;
      increment = shouldSpike ? Math.floor(Math.random() * 50) : increment;
      cpuUsage.value = Math.min(100, Math.max(0, cpuUsage.value + increment));
      cpuUsage.value = Math.min(100, Math.max(0, cpuUsage.value));
    }, 2e3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Window, mergeProps({
        id: props.id,
        title: props.title,
        resizeable: props.resizeable,
        closeable: props.closeable,
        start_position: { x: 10, y: 10 },
        size: { width: 300, height: void 0 }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="tree-view"${_scopeId}><li${_scopeId}><strong${_scopeId}> Welcome to my universe ✨</strong></li><li${_scopeId}> Me! <ul${_scopeId}><li${_scopeId}>About me</li><li${_scopeId}>Linguistic qualifications</li><li${_scopeId}>Technical qualifications</li><li${_scopeId}>Achievements</li><li${_scopeId}>Curriculum Vitae</li></ul></li><li${_scopeId}><details open${_scopeId}><summary${_scopeId}>Projects</summary><ul${_scopeId}><li${_scopeId}><details open${_scopeId}><summary${_scopeId}>Games</summary><ul${_scopeId}><li${_scopeId}>11th grade school project</li><li${_scopeId}>Hunger tower</li></ul></details></li><li${_scopeId}>Himawari2D</li><li${_scopeId}>GLVNE</li><li${_scopeId}>Basic 3D renderer</li><li${_scopeId}>Character archive</li></ul></details></li><li${_scopeId}><details open${_scopeId}><summary${_scopeId}>Applications</summary><ul${_scopeId}><li${_scopeId}>Quote me!</li><li${_scopeId}>Waveform music player</li><li${_scopeId}>Terminal</li></ul></details></li><a href="mailto:tiagobarrossao@gmail.com"${_scopeId}>Shoot me an email!</a></ul><br${_scopeId}><button class="default"${_scopeId}>Close all windows</button><button${_scopeId}>Info</button><br${_scopeId}><br${_scopeId}><div class="status-bar"${_scopeId}><p class="status-bar-field"${_scopeId}>Press F2 for source</p><p class="status-bar-field"${_scopeId}>${ssrInterpolate(unref(getVersion)())}</p><p class="status-bar-field"${_scopeId}>CPU Usage: ${ssrInterpolate(cpuUsage.value)}%</p></div>`);
          } else {
            return [
              createVNode("ul", { class: "tree-view" }, [
                createVNode("li", null, [
                  createVNode("strong", null, " Welcome to my universe ✨")
                ]),
                createVNode("li", null, [
                  createTextVNode(" Me! "),
                  createVNode("ul", null, [
                    createVNode("li", {
                      onClick: ($event) => openProgram2("me")
                    }, "About me", 8, ["onClick"]),
                    createVNode("li", {
                      onClick: ($event) => openProgram2("linguistics")
                    }, "Linguistic qualifications", 8, ["onClick"]),
                    createVNode("li", {
                      onClick: ($event) => openProgram2("technical")
                    }, "Technical qualifications", 8, ["onClick"]),
                    createVNode("li", {
                      onClick: ($event) => openProgram2("achievements")
                    }, "Achievements", 8, ["onClick"]),
                    createVNode("li", {
                      onClick: ($event) => openProgram2("warning", { message: "Coming soon", type: 0 })
                    }, "Curriculum Vitae", 8, ["onClick"])
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("details", { open: "" }, [
                    createVNode("summary", null, "Projects"),
                    createVNode("ul", null, [
                      createVNode("li", null, [
                        createVNode("details", { open: "" }, [
                          createVNode("summary", null, "Games"),
                          createVNode("ul", null, [
                            createVNode("li", {
                              onClick: ($event) => openProgram2("warning", { message: "Tive preguiça!", type: 1 })
                            }, "11th grade school project", 8, ["onClick"]),
                            createVNode("li", {
                              onClick: ($event) => openProgram2("warning", { message: "Tive preguiça!", type: 1 })
                            }, "Hunger tower", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      createVNode("li", {
                        onClick: ($event) => openProgram2("himawari")
                      }, "Himawari2D", 8, ["onClick"]),
                      createVNode("li", {
                        onClick: ($event) => openProgram2("glvne")
                      }, "GLVNE", 8, ["onClick"]),
                      createVNode("li", {
                        onClick: ($event) => openProgram2("renderer")
                      }, "Basic 3D renderer", 8, ["onClick"]),
                      createVNode("li", {
                        onClick: ($event) => openProgram2("chara-arquive")
                      }, "Character archive", 8, ["onClick"])
                    ])
                  ])
                ]),
                createVNode("li", null, [
                  createVNode("details", { open: "" }, [
                    createVNode("summary", null, "Applications"),
                    createVNode("ul", null, [
                      createVNode("li", {
                        onClick: ($event) => openProgram2("quote")
                      }, "Quote me!", 8, ["onClick"]),
                      createVNode("li", {
                        onClick: ($event) => openProgram2("music")
                      }, "Waveform music player", 8, ["onClick"]),
                      createVNode("li", {
                        onClick: ($event) => openProgram2("prompt")
                      }, "Terminal", 8, ["onClick"])
                    ])
                  ])
                ]),
                createVNode("a", { href: "mailto:tiagobarrossao@gmail.com" }, "Shoot me an email!")
              ]),
              createVNode("br"),
              createVNode("button", {
                onClick: closeAll,
                class: "default"
              }, "Close all windows"),
              createVNode("button", {
                onClick: ($event) => openProgram2("system")
              }, "Info", 8, ["onClick"]),
              createVNode("br"),
              createVNode("br"),
              createVNode("div", { class: "status-bar" }, [
                createVNode("p", { class: "status-bar-field" }, "Press F2 for source"),
                createVNode("p", { class: "status-bar-field" }, toDisplayString(unref(getVersion)()), 1),
                createVNode("p", { class: "status-bar-field" }, "CPU Usage: " + toDisplayString(cpuUsage.value) + "%", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MenuBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    loadBackgroundColor();
    window.addEventListener("keydown", (e) => {
      if (e.key === "F2") {
        window.open("https://github.com/Sagiri721/Portfolio/tree/master", "_blank");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="desktop">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: unref(generateId)(),
        title: "WordWideWeb",
        resizeable: false,
        closeable: false
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  { path: "/", component: () => Promise.resolve().then(() => Home) }
  // Add other routes as needed
];
const history = createMemoryHistory();
const router = createRouter({
  history,
  routes
  // Ensure this is passed correctly
});
const createApp = ViteSSG(_sfc_main, { router }, (ctx) => {
  const { app } = ctx;
  return app;
});
export {
  createApp
};

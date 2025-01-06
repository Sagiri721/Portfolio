import { computed, ref, watch } from "vue";

const status = Object.freeze({
    PLAYING: "playing",
    PAUSED: "paused",
    STOPED: "stopped"
});

const globalVolume = ref(30);

// Keep track of the current audio element
const currentAudio = ref(null);
const audioStatus = ref(status.STOPPED);
const audioDuration = ref(0);

const songCollection = [
    {
        name: "Everyone Knows",
        artist: "Slowdive",
        image: "covers/slowdive.jpg",
        song: "songs/everyone-knows.mp3",
    },
    {
        name: "Hold on",
        artist: "John Lennon",
        image: "covers/plastic-ono-band.jpg",
        song: "songs/hold-on.mp3",
    },
    {
        name: "Chocolate Matter",
        artist: "Sweet Trip",
        image: "covers/velocity-design-comfort.png",
        song: "songs/chocolatte-matter.mp3",
    },
    {
        name: "Dear Prudence",
        artist: "Siouxsie and the Banshees",
        image: "covers/hyaena.jpg",
        song: "songs/dear-prudence.mp3",
    },
    {
        name: "Mayonaise",
        artist: "The Smashing Pumpkins",
        image: "covers/siamese-dream.jpg",
        song: "songs/mayonaise.mp3",
    },
    {
        name: "Pictures of You",
        artist: "The Cure",
        image: "covers/disintegration.jpg",
        song: "songs/pictures-of-you.mp3",
    }
];

const getQueue = () => {

    // Randomize queue
    let currentIndex = songCollection.length;
    let queue = [...songCollection];

    while (currentIndex !== 0) {

        // Pick a random element
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap
        let temp = queue[currentIndex];
        queue[currentIndex] = queue[randomIndex];
        queue[randomIndex] = temp;
    }

    return queue;
}

const playSong = (song) => {

    // Resume if paused
    if (currentAudio.value !== null && audioStatus.value === status.PAUSED) {
        currentAudio.value.play();
        audioStatus.value = status.PLAYING;
        return;
    }

    // Stop current audio
    if (currentAudio.value !== null) {
        currentAudio.value.pause();
    }

    // Otherwise play the song
    const audio = new Audio(song);
    currentAudio.value = audio;
    
    currentAudio.value.play();
    audioStatus.value = status.PLAYING;
    
    // Set volume
    currentAudio.value.volume = globalVolume.value / 100;

    // Get the duration of the song
    audio.addEventListener("loadedmetadata", () => {
        audioDuration.value = audio.duration;
    });
}

const pauseSong = () => {
    
    if (currentAudio.value === null) return;
    if (audioStatus.value === status.PAUSED) return;

    currentAudio.value.pause();
    audioStatus.value = status.PAUSED;
}

// Stop all audio
const stopAudio = () => {

    if (currentAudio.value === null) return;

    currentAudio.value.pause();
    audioStatus.value = status.STOPPED;

    // Reset the current audio
    currentAudio.value = null;
    audioDuration.value = 0;
    currentPlayTime.value = 0;
}

// Track current play time of the audio AT ALL TIMES
const currentPlayTime = ref(0);
setInterval(() => {
    if (currentAudio.value === null) return;
    currentPlayTime.value = currentAudio.value.currentTime;
}, 1000);

const setVolume = (volume) => {

    globalVolume.value = volume;

    if (currentAudio.value === null) return;
    currentAudio.value.volume = globalVolume.value / 100;
}

stopAudio();

export const useMusic = () => {
    return {
        getQueue,
        playSong,
        pauseSong,
        stopAudio,
        audioDuration: computed(() => audioDuration.value),
        currentPlayTime: computed(() => currentPlayTime.value),
        setVolume,
        globalVolume: computed(() => globalVolume.value)
    }
}
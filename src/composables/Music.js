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
        credit: "https://open.spotify.com/album/1qDA0jVhj4ZTjGHmpbmmwa?si=wbA5ZVzDTPS1bGLs8yqRJg",
        image: "covers/slowdive.jpg",
        song: "songs/everyone-knows.mp3",
    },
    {
        name: "Hold on",
        artist: "John Lennon",
        credit: "https://open.spotify.com/album/0DFYbYCcHCEJPcN1hODG6K?si=xwcXeudDT4e0XBI2sBTi4w",
        image: "covers/plastic-ono-band.jpg",
        song: "songs/hold-on.mp3",
    },
    {
        name: "Chocolate Matter",
        artist: "Sweet Trip",
        credit: "https://open.spotify.com/album/0eUUQ4rly8Q8PyJPWLgde2?si=wa0E7nNsRUCHIHTS8RNixA",
        image: "covers/velocity-design-comfort.png",
        song: "songs/chocolatte-matter.mp3",
    },
    {
        name: "Dear Prudence",
        artist: "Siouxsie and the Banshees",
        credit: "https://open.spotify.com/album/0PF97T9K2E95PV4AbICNjr?si=nClOO4dUS6G6tZI0JEgA9A",
        image: "covers/hyaena.jpg",
        song: "songs/dear-prudence.mp3",
    },
    {
        name: "Mayonaise",
        artist: "The Smashing Pumpkins",
        credit: "https://open.spotify.com/album/2Qs2SpclDToB087fLolhCN?si=4LLJN1XMQky_gAPO16Lepg",
        image: "covers/siamese-dream.jpg",
        song: "songs/mayonaise.mp3",
    },
    {
        name: "Pictures of You",
        artist: "The Cure",
        credit: "https://open.spotify.com/album/6DZNOsLXIU2zOQfQDwDpIS?si=5-NB35xbSZ-iMDNAiJiTJA",
        image: "covers/disintegration.jpg",
        song: "songs/pictures-of-you.mp3",
    },
    {
        name: "The great gig in the sky",
        artist: "Pink Floyd",
        credit: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=wyXw1x71TGyp0Ac6xWNRBw",
        image: "covers/dark-side-of-the-moon.png",
        song: "songs/the-great-gig-in-the-sky.mp3",
    },
    {
        name: "Xtal",
        artist: "Aphex Twin",
        credit: "https://open.spotify.com/album/7aNclGRxTysfh6z0d8671k?si=EVKLeV-_Tdm87NrmUvjNVQ",
        image: "covers/selected-ambient-works.png",
        song: "songs/xtal.mp3",
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
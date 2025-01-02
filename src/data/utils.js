const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
}

const getVersion = () => {
    return '0.1.0';
}

const loadBackgroundColor = () => {
    const color = localStorage.getItem("sagiri-portfolio-bg-color");
    
    if (color) 
        document.body.style.backgroundColor = backgroundColors[color];
}

const getBackgroundColor = () => {
    return localStorage.getItem("sagiri-portfolio-bg-color");
}

const backgroundColors = {
    "Gray": "#555",
    "Black": "#000000",
    "White": "#DCDCDC ",
    "Blue": "#778899",
    "Red": "#AA98A9"
}

const changeBackground = (color) => {

    document.body.style.backgroundColor = backgroundColors[color];
    localStorage.setItem("sagiri-portfolio-bg-color", color);
}

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
}

export { generateId, getVersion, changeBackground, loadBackgroundColor, getBackgroundColor, formatTime, formatSeconds };
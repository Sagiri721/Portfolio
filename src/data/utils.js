const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
}

const getVersion = () => {
    return '1.3.5';
}

const loadBackgroundColor = () => {
    const color = localStorage.getItem("sagiri-portfolio-bg-color");
    
    if (color) 
        changeBackground(color);
}

const getBackgroundColor = () => {
    return localStorage.getItem("sagiri-portfolio-bg-color");
}

const backgroundColors = {
    "Gray": "#555",
    "Black": "#000000",
    "White": "#DCDCDC ",
    "Blue": "#778899",
    "Red": "#AA98A9",
    "Biblically accurate": "#008080",
    "Wrong era": {
        "url": "windows_xp_bliss-wide.jpg",
        "colour": "#87CEEB"
    },
    "Frutiger Aero": {
        "url": "asadal_stock_79.jpg",
        "colour": "darkblue"
    },
    "Wrong company?": {
        "url": "10-12--thumb.jpg",
        "colour": "brown"
    },
}

const changeBackground = (color) => {

    if (backgroundColors[color] === undefined) {
        console.error("Invalid background color:", color);
        document.body.style.backgroundColor = "#555";
        return;
    }

    if (typeof backgroundColors[color] == 'object'){

        const assetPath = `backgrounds/${backgroundColors[color].url}`;

        document.body.style.backgroundImage = `url(${assetPath})`;
        document.body.style.backgroundColor = backgroundColors[color].colour || "#555";
    }
    else {

        document.body.style.backgroundColor = backgroundColors[color];
        document.body.style.backgroundImage = "none";
    }

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

const myAge = () => {

    const birthdate = new Date("2005-07-21");
    const today = new Date();

    const age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        return age - 1;
    }

    return age;
}

export { generateId, getVersion, changeBackground, loadBackgroundColor, getBackgroundColor, formatTime, formatSeconds, myAge };
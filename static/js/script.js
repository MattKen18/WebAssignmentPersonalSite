let video = document.getElementById("background-vid");

// replays background video when it stops
setInterval(() => {
    video.currentTime = 0;
}, 80000)

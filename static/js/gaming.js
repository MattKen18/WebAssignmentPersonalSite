const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const vidsArr = Array.from(document.getElementsByClassName('gaming-vid'));

nextBtn.addEventListener('click', () => {
    vidsArr[0].removeAttribute("id");
    vidsArr[0].load();
    vidsArr[0].pause();
    vidsArr.push(vidsArr.shift());
    vidsArr[0].play();
    vidsArr[0].setAttribute("id", "showing");

    console.log(vidsArr.pause);
})

prevBtn.addEventListener('click', () => {
    vidsArr[0].removeAttribute("id");
    vidsArr[0].load();
    vidsArr[0].pause();
    vidsArr.unshift(vidsArr.pop());
    vidsArr[0].play();
    vidsArr[0].setAttribute("id", "showing");

})

setInterval(() => {
    const curVideo = document.getElementById('showing');
    if (curVideo.ended) {
        nextBtn.click();
    }
}, 1000);
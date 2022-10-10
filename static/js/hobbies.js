AOS.init();

const hobbies = document.getElementsByClassName("hobbie-item");
const borderColors = ['#10EF45', '#C1CB34', '#CA5C35', '#6655AA', '#E91916', '#50AF87', '#E619E3', '#0AD0F5'];

document.querySelectorAll('.hobbie-item').forEach(item => {
    item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value")})`;

    item.addEventListener('click', () => {
        let bgImageisGif = getComputedStyle(item).backgroundImage.split('.').slice(-1)[0].slice(0, 3) === 'gif' ;
        console.log(bgImageisGif);

        if (bgImageisGif) {
            item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value")})`;
        } else {
            item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value").split('.')[0]}-gif.gif)`;
        }

    })

    item.addEventListener('mouseout', () => {
        item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value")})`;

    })
  })

const hobbies = document.getElementsByClassName("hobbie-item");
const borderColors = ['#10EF45', '#C1CB34', '#CA5C35', '#6655AA', '#E91916', '#50AF87', '#E619E3', '#0AD0F5'];

document.querySelectorAll('.hobbie-item').forEach(item => {
    item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value")})`;

    item.addEventListener('mouseover', () => {
        document.getElementById("hover-instruct").innerHTML = "";
        item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value").split('.')[0]}-gif.gif)`;

        document.getElementById("hobbie-populate-name").innerHTML = item.firstChild.textContent;
        // document.getElementById("hobbie-populate-name").style.borderLeft = "8px solid #10EF45";
        // document.getElementById("hobbie-populate-name").style.borderBottom = "2px solid #10EF45";



        const color = borderColors[Math.floor(Math.random()*borderColors.length)];
        // document.getElementById("hobbie-populate-name").style.borderColor = color;
        document.getElementById("hobbie-populate-name").style.color = color;

    })

    item.addEventListener('mouseout', () => {
        item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value")})`;


        document.getElementById("hobbie-populate-name").innerHTML = "";
        document.getElementById("hobbie-populate-name").style.borderLeft = "none";
        document.getElementById("hobbie-populate-name").style.borderBottom = "none";

    })
    
    // item.addEventListener('mouseover', event => {
    //     item.style.backgroundImage = `url(../static/images/${item.getAttribute("data-value")})`;
    //     item.firstChild.style.display = "none";
    // })
    // item.addEventListener('mouseout', event => {
    //     item.style.backgroundImage = "";
    //     item.firstChild.style.display = "block";

    // })
  })
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const scrollDownIcon = document.getElementById('scroll-down');
    const scrollDownIconStyle = getComputedStyle(scrollDownIcon);
    
    if (scrollPos > 100) {
        scrollDownIcon.style.display = "none";        
    } else {
        if (scrollDownIconStyle.display === "" || scrollDownIconStyle.display === "none") {
            scrollDownIcon.style.display = "inline-block";       
        }
    }
})


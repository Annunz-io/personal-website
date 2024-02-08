init()

function init() {
    //init to light
    //set a listener
    document.getElementById("icon-sun").style.display = "none";
    document.getElementById("icon-moon").style.display = "block";
    document.querySelector('.theme-container').addEventListener('click', switchTheme)

    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme')
    let oppositeComputedThemeColor = getComputedStyle(document.querySelector(":root[data-theme='" + dataTheme + "']"));
    //we need to init the moon icon to the light theme and then switch the sun to dark theme upon click
    let color = oppositeComputedThemeColor.getPropertyValue('--primary-text-color')
    let hoverColor = oppositeComputedThemeColor.getPropertyValue('--hover-color')
    const moonIcon = document.getElementById('icon-moon')
    moonIcon.style.fill = color
    moonIcon.addEventListener("mouseenter", function () {
        this.style.fill = hoverColor
    })
    moonIcon.addEventListener("mouseleave", function () {
        this.style.fill = color
    })
}

function switchTheme() {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme')
    let newTheme = (dataTheme === 'light') ? 'dark' : 'light'
    rootElem.setAttribute('data-theme', newTheme)
    let computedStyle = getComputedStyle(document.querySelector(":root[data-theme='" + newTheme + "']"));
    // let selectedElement = document.querySelector(`[data-theme="${newTheme}"]`);
    // let computedStyle = getComputedStyle(selectedElement)
    let iconColor = computedStyle.getPropertyValue('--primary-text-color')
    let hoverColor = computedStyle.getPropertyValue('--hover-color')

    //get computed style for dark icon

    switchIcon(newTheme, iconColor)
    onIconHover(hoverColor, iconColor)
}

function switchIcon(newTheme, color) {
    let sunIcon = document.getElementById('icon-sun')
    let moonIcon = document.getElementById('icon-moon')

    if (newTheme === 'light') {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        moonIcon.style.fill = color;
    } else if (newTheme === 'dark') {
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
        sunIcon.style.fill = color;
    }
}

function onIconHover(hoverColor, iconColor) {
    let sunIcon = document.getElementById('icon-sun')
    let moonIcon = document.getElementById('icon-moon')

    sunIcon.addEventListener("mouseenter", function () {
        this.style.fill = hoverColor
    })
    sunIcon.addEventListener("mouseleave", function () {
        this.style.fill = iconColor
    })

    moonIcon.addEventListener("mouseenter", function () {
        this.style.fill = hoverColor
    })
    moonIcon.addEventListener("mouseleave", function () {
        this.style.fill = iconColor
    })

}




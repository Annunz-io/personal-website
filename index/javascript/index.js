init()

function init() {
    document.getElementById("icon-sun").style.display = "none";
    document.getElementById("icon-moon").style.display = "block";
    document.querySelector('.theme-container').addEventListener('click', switchTheme)

    let dataTheme = document.documentElement.getAttribute('data-theme')
    let oppositeComputedThemeColor = getComputedStyle(document.querySelector(":root[data-theme='" + dataTheme + "']"));
    let oppositeColor = oppositeComputedThemeColor.getPropertyValue('--primary-text-color')
    let hoverColor = oppositeComputedThemeColor.getPropertyValue('--hover-color')
    //set icons
    const moonIcon = document.getElementById('icon-moon')
    moonIcon.style.fill = oppositeColor
    moonIcon.addEventListener("mouseenter", function () {
        this.style.fill = hoverColor
    })
    moonIcon.addEventListener("mouseleave", function () {
        this.style.fill = oppositeColor
    })
    //set images
    const macrocycle = document.querySelector('.macrocycle-container').querySelector('img')
    const piperdineUrea = document.querySelector('.piperdine-urea-container').querySelector('img')
    macrocycle.src = "images/difluoromacrocycle-light.svg"
    piperdineUrea.src = "images/piperdineurea-light.svg"
}

function switchTheme() {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme')
    let newTheme = (dataTheme === 'light') ? 'dark' : 'light'
    rootElem.setAttribute('data-theme', newTheme)
    let computedStyle = getComputedStyle(document.querySelector(":root[data-theme='" + newTheme + "']"));
    let iconColor = computedStyle.getPropertyValue('--primary-text-color')
    let hoverColor = computedStyle.getPropertyValue('--hover-color')

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
    changeSVGColor(newTheme)
}

function onIconHover(hoverColor, iconColor) {
    let sunIcon = document.getElementById('icon-sun')

    sunIcon.addEventListener("mouseenter", function () {
        this.style.fill = hoverColor
    })
    sunIcon.addEventListener("mouseleave", function () {
        this.style.fill = iconColor
    })
}

function changeSVGColor(newTheme) {
    const macrocycle = document.querySelector('.macrocycle-container').querySelector('img')
    const piperdineUrea = document.querySelector('.piperdine-urea-container').querySelector('img')
    if (newTheme === 'light') {
        macrocycle.src = "images/difluoromacrocycle-light.svg"
        piperdineUrea.src = "images/piperdineurea-light.svg"
    } else if (newTheme === 'dark') {
        macrocycle.src = "images/difluoromacrocycle-dark.svg"
        piperdineUrea.src = "images/piperdineurea-dark.svg"
    }
}

function onImageClick(){
    const macrocycle = document.querySelector('.macrocycle-container').querySelector('img')
    const piperdineUrea = document.querySelector('.piperdine-urea-container').querySelector('img')

    macrocycle.addEventListener('click', function(){
        macrocycle.style.animation = "wiggle 0.5s ease-in-out alternate"
    })

}


onImageClick()
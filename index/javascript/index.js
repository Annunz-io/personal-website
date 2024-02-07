init()

function init() {
    document.getElementById("icon-sun").style.display = "block";
    document.getElementById("icon-moon").style.display = "none";
    document.querySelector('.theme-container').addEventListener('click', switchTheme)
}

function switchTheme() {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme')
    let newTheme = (dataTheme === 'light') ? 'dark' : 'light'
    rootElem.setAttribute('data-theme', newTheme)
    let computedStyle = getComputedStyle(document.querySelector(":root[data-theme='" + newTheme + "']"));
    switchIcon(newTheme, computedStyle)
}

function switchIcon(newTheme, computedStyle) {
    let sunIcon = document.getElementById('icon-sun')
    let darkIcon = document.getElementById('icon-moon')
    let color = computedStyle.getPropertyValue('--primary-text-color')

    if (newTheme === 'light') {
        darkIcon.style.display = "none";
        sunIcon.style.display = "block";
        sunIcon.style.fill = color;
    } else if (newTheme === 'dark') {
        sunIcon.style.display = "none";
        darkIcon.style.display = "block";
        darkIcon.style.fill = color;
    }
}





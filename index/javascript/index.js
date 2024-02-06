const switchTheme = () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme')
    let newTheme = (dataTheme === 'light') ?'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme)
}

document.querySelector('.fa-circle-half-stroke').addEventListener('click', switchTheme)



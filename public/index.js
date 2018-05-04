import Language from './js/language.js'

const mainNav = document.querySelector('.main-nav')
const navAnchors = document.querySelectorAll('.main-nav ul li a')
const sections = document.querySelectorAll('section')
const languagesContainer = document.querySelector('.languages')
let languages = []

init()

// On Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        mainNav.classList.add('nav-scroll')
    }
    else {
        mainNav.classList.remove('nav-scroll')
    }

    // Set active section
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        const sectionRect = section.getBoundingClientRect()
        if (sectionRect.top <= 150 && sectionRect.bottom >= 0) {
            setCurrentSection('#' + section.id, navAnchors)
        }
    }
})

/**
 * Initialize page
 */
function init() {
    // Initialize navigation anchors
    initNavAnchors(navAnchors)

    // Languages
    languages.push(new Language('Java', 0.9))
    languages.push(new Language('C#', 0.9))
    languages.push(new Language('JavaScript', 0.85))
    languages.push(new Language('Python', 0.65))
    languages.push(new Language('PHP', 0.6))
    languages.push(new Language('C', 0.65))
    AddComponentsAsElements(languagesContainer, languages)
}

/**
 * Registers a click event handler to each anchor
 * @param {NodeList} anchors 
 */
function initNavAnchors(anchors) {
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', (e) => {
            e.preventDefault()
            const a = e.target;
            if (a && a.href) {
                const id = hrefToId(a.href)
                smoothScrollTo(id)
            }
        })
    }
}

/**
 * Appends all components in the array as elements to the container element
 * @param {HTMLElement} container The Container element
 * @param {Array} arr Array of Components
 */
function AddComponentsAsElements(container, arr) {
    arr.map((component) => {
        const element = component.asElement()
        container.appendChild(element)
    })
}

/**
 * Parses full href string to id
 * @param {string} href 
 */
function hrefToId(href) {
    const arr = href.split('#')
    return '#' + arr[arr.length - 1]
}

/**
 * Smootly scrolls the element into view
 * @param {string} id 
 */
function smoothScrollTo(id) {
    const element = document.querySelector(id)

    if (!element) {
        console.error(`No element found with id: ${id}`)
    } else {
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }
}

/**
 * Sets the active section
 * @param {string} id 
 * @param {NodeList} anchors 
 */
function setCurrentSection(id, anchors) {
    for (let i = 0; i < anchors.length; i++) {
        const a = anchors[i]
        const anchorId = hrefToId(a.href)
        if (anchorId !== id || anchorId === '#home') {
            a.classList.remove('active')
        }
        else {
            a.classList.add('active')
        }
    }
}
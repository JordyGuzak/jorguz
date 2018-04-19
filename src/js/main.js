const navAnchors = document.querySelectorAll('.main-nav ul li a')

initNavAnchors(navAnchors)

function initNavAnchors(anchors) {
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', (e) => {
            e.preventDefault()
            const a = e.target;
            if (a && a.href) {
                const arr = a.href.split('/')
                const id = arr[arr.length - 1]
                setCurrentSection(a, anchors)
                smoothScrollTo(id)
            }
        })
    }
}

function setCurrentSection(current, anchors) {
    current.classList.add('active')

    for (let i = 0; i < anchors.length; i++) {
        const a = anchors[i]
        if (a.href == current.href) {
            continue
        }

        a.classList.remove('active')
    }
}

async function getFileList(directory) {
    const response = await fetch("php/ftp.php?dir=" + directory)
    const fileList = await response.json()

    const ul = document.getElementById('files')
    ul.innerHTML = ''

    fileList.map((file) => {
        const li = document.createElement('li')
        li.innerHTML = file
        ul.appendChild(li)
    })
}

function handleError(fn) {
    return (...params) => {
        return fn(...params).catch((err) => {
            console.error(`Oops!`, err)
        })
    }
}

function smoothScrollTo(id) {
    const element = document.querySelector('#' + id)

    if (!element) {
        console.error(`No element found with id: ${id}`)
    } else {
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }
}

function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

//handleError(getFileList)('.')
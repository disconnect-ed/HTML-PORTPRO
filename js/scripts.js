// Menu

const menuButton = document.querySelector('.nav-menu')
const bars = document.querySelector('.bars')
const times = document.querySelector('.times')
const menu = document.querySelector('.main-menu')

menuButton.onclick = () => {
    menu.classList.toggle('active')
    bars.classList.toggle('none')
    times.classList.toggle('none')
}

// Timer

const dateHours = document.querySelector('.hours')
const dateMinutes = document.querySelector('.minutes')
const dateSeconds = document.querySelector('.seconds')

const timer = (time) => {
    let allTime = time * 60 * 60 - 1;

    const parse = (number) => {
        if (number < 10) return `0${number}`
        return number
    }

    return (
        setInterval(() => {
            let hours = parse(Math.floor(allTime / 60 / 60))
            let minutes = parse(Math.floor(allTime / 60 % 60))
            let seconds = parse(Math.floor(allTime % 60))
            if (allTime <= 0) {
                clearInterval(timer);
                return
            } else {
                if (dateHours.value !== hours) dateHours.innerText = hours;
                if (dateMinutes.value !== minutes) dateMinutes.innerText = minutes;
                if (dateSeconds.value !== seconds) dateSeconds.innerText = seconds;
            }
            --allTime;
        }, 1000)
    )
}

const day = timer(24)





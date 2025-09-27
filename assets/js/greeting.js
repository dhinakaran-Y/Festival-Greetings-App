import Fireworks from "fireworks-js";

const fwContainer = document.querySelector('#fireworks')
const greeterNameEl = document.querySelector('#greeterName');

const fireworks = new Fireworks(fwContainer)

fireworks.start()

const url = new URL(window.location.href)
const name = url.searchParams.get('name')

if (name) {
    greeterNameEl.textContent = name
}else {
    location.href = '/Festival-Greetings-App/index.html';
}
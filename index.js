const remote = require('electron').remote;

const main = remote.require('./main.js');

let button = document.createElement('button')
button.textContent = "Open Window";
document.getElementById("btn").appendChild(button);


button.addEventListener('click', () => {
    main.openWindow()
})
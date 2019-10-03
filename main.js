//Importamos el objeto de electron a la peticion principal
const electron = require('electron');
const {app, BrowserWindow} = electron;

const path = require('path');
const url = require('url');

let win;

function createWindow(){
    //creamos la ventana con el objeto electron. Uso nodeIntegration: true para poder usar require() y que no de que no está definido. Pero, la comunidad dice que esto es un problema de seguridad. Hay otra solución. Ver stackoverflow
    //https://stackoverflow.com/questions/44391448/electron-require-is-not-defined
    //https://electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content
    win = new BrowserWindow({ 
      width: 800, height: 600,
      webPreferences: {
          nodeIntegration: true
      }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocl: 'file',
        slashes: true
    }))

   exports.openWindow = () => {
       let newWin = new BrowserWindow({ width: 400, height: 200 });
       newWin.loadURL(url.format({
           pathname: path.join(__dirname, 'newWindow.html'),
           protocl: 'file',
           slashes: true
       }))
   }
    
    //Esta línea permite que se abran las devTools
    win.webContents.openDevTools()
}

//Para exportar procesos desde nuestra aplicación (main.js) a la renderización (index.html) usamos exports. Creamos una función vacia.



app.on('ready', createWindow)
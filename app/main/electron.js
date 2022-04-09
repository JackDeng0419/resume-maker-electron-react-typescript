const path = require('path');
const {app, BrowserWindow} = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200, 
        height: 800,
        webPreferences: {
            nodeIntegration: true // enable to use node in render process
        }
    });

    mainWindow.loadFile('../render/index.html');
}

app.whenReady().then(()=> {
    createWindow();
    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0) createWindow(); // activated when all windows are closed but the app is still on. 
    })
})
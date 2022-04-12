const path = require('path');
const { app, BrowserWindow } = require('electron');

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // enable to use node in render process
    },
  });

  if (isDev()) {
    // if in dev mode, then we can load from the 'dist' folder, which is not built yet
    mainWindow.loadURL('http://127.0.0.1:7001');
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(); // activated when all windows are closed but the app is still on.
  });
});

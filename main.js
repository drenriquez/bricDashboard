const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const electronReload = require('electron-reloader');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: __dirname + '/src/assets/icons/favicon.ico',
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/electronstart/index.html'),
      protocol: 'file',
      slashes: true,
    })
  );

  // Apri il DevTools solo in modalità di sviluppo
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  // Abilita il reload automatico solo in modalità di sviluppo
  if (process.env.NODE_ENV === 'development') {
    electronReload(__dirname, {
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    });
  }
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on('provaIpc',()=>{
  console.log('********provaIpc invocata**********');
  mainWindow.webContents.send('rispostaIpc');
})

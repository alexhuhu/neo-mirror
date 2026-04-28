const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 920,
    minWidth: 380,
    minHeight: 600,
    title: 'Neo Mirror',
    backgroundColor: '#09090b',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  Menu.setApplicationMenu(null);
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

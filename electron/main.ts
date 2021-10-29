// eslint-disable-next-line import/no-extraneous-dependencies
import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';

let mainWindow: Electron.BrowserWindow | null;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.maximize();

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app
  .on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log('An error occurred: ', err));
    }
  });
app.allowRendererProcessReuse = true;

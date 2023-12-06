/* eslint-disable @typescript-eslint/no-var-requires */
// import { app, BrowserWindow } from "electron";
// import * as path from "path";
const { autoUpdater, AppUpdater } = require("electron-updater")

const { app, BrowserWindow } = require("electron");
const path = require("path");

const isDev = require("electron-is-dev")

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 1000,
    webPreferences: {
      preload: ("./preload.js"),
      webSecurity: false
    },
    width: 1200,
    show: false,
    autoHideMenuBar: true
  });

  mainWindow.loadURL(isDev ? "http://localhost:3000/" : `file://${path.join(__dirname, "../build/index.html")}`);

  // and load the index.html of the app.
  mainWindow.once("ready-to-show", () => {
    mainWindow.show()
  })
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
}

autoUpdater.on("update-available", (info) => {
  console.log('update available')
  let pth = autoUpdater.downloadUpdate()
  console.log('pth', pth)
})

autoUpdater.on("update-not-available", (info) => {
  console.log('update not available')
})

autoUpdater.on("update-downloaded", (info) => {
  console.log('update downloaded')
})



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  autoUpdater.checkForUpdates()
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
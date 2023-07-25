const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

ipcMain.on('save-data', (event, data) => {
    const userDataPath = app.getPath('userData');
    const dataFilePath = path.join(userDataPath, 'data.txt');

    fs.writeFile(dataFilePath, data, 'utf-8', (err) => {
        if (err) {
            event.reply('save-data-reply', 'error');
        } else {
            event.reply('save-data-reply', 'success');
        }
    });
});

ipcMain.on('read-data', (event) => {
    const userDataPath = app.getPath('userData');
    const dataFilePath = path.join(userDataPath, 'data.txt');

    try {
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        event.returnValue = data;
    } catch (err) {
        event.returnValue = null;
    }
});
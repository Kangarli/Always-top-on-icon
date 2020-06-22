const electron = require('electron')
const url = require('url')
const path = require('path');
const { protocol } = require('electron');

const { app, BrowserWindow } = electron

let mainWindow;


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        transparent: true,
        frame: false,
        //........................//
        // width: '100%',
        // height: '100%',
    });


    mainWindow.loadURL(path.join(__dirname, 'main.html')).then(() => {
        mainWindow.maximize() // for full screen


        // imageScreen = 'file:///E:/dev/@TODO/desktop/screens/top-on.html'

        // const currentURL = mainWindow.webContents.getURL()
        mainWindow.setIgnoreMouseEvents(true)
        mainWindow.setAlwaysOnTop(true, 'screen')

        // console.log(currentURL)
    })
})
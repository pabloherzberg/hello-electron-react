const {win, BrowserWindow, app} = require('electron')
const path = require('path')

function createWindow(){
    const win = new BrowserWindow({
        minWidth:600,
        minHeight:400,
        center:true,
        resizable:true,
        frame:true,
        transparent:false,
        alwaysOnTop:false,
        backgroundColor:'#fff',
        webPreferences:{
            enableRemoteModule:true,
            nodeIntegration:true,
            worldSafeExecuteJavaScript:true,
        }
    })


    win.loadFile('index.html')
    //win.loadURL('https://www.youtube.com/watch?v=Ln926XT33RM&t=968s')
}

require('electron-reload')(__dirname, {
    electron:path.join(__dirname, 'node_modules', '.bin', 'electron')
})

app.whenReady().then(createWindow).catch(()=>console.log('erro'))

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
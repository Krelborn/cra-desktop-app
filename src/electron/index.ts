//
// index.ts
//
// Entry point for the Electron main process
//
// Creates the browser window and sets up some event handlers.
//

import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";

let mainWindow: BrowserWindow | null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 680,
    width: 900,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  let indexURL = `file://${path.join(__dirname, "../index.html")}`;
  if (isDev) {
    indexURL = "http://localhost:3000";
  }

  mainWindow.loadURL(indexURL);
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

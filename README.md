# cra-electron-app
A typescript, create-react-app based electron project based on ideas in [From React to an Electron app ready for production](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3).

# Notes
Project is first bootstrapped using cra as outlined in the Microsoft cra starter [here](https://github.com/Microsoft/TypeScript-React-Starter).

Then electron tools and libraries are added.
```
create-react-app cra-electron-app --scripts-version=react-scripts-ts
npm install --save-dev electron electron-builder wait-on concurrently
npm install --save electron-is-dev
```

Once everything is installed the code from the electron starter is added to an electron folder in
src. Scripts are added to package.json to build the electron javascript code.

- `electron:build`, build the scripts that are executed from the main electron process
- `electron:start`, launch the dev build, use the cra dev server to serve files so render process supports hot reloading
- `electron:pack`, pack the goods into a distributable application

The following pre and post build scripts are added to support the other scripts.

- `preelectron:pack`, run the react-scripts build followed by electron, before packing
- `preelectron:start`, run the electron build before launching the dev server

A custom tsconfig file is created `tsconfig.electron.json` that overrides some typescript compiler 
options in order to build the javascript files required for the main electron process and output the
source to the build/electron folder. The base `tsconfig.json` is modified to avoid exclude the
electron sources during the react-scripts build.

Finally a preload script is added to the electron sources which can be used to inject things from 
the electron code into the render process.

# MIT License
Copyright (c) 2017 Compiled Creations Limited

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

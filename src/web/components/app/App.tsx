//
// App.tsx
//
// Root application component
//

import * as React from "react";
import "./App.css";

import { AboutService, lazyInject, Types } from "../../inversify.config";

import logo from "./logo.svg";

class App extends React.Component {
  // Use lazy inject to construct the AboutService from our IoC container
  @lazyInject(Types.AboutService)
  private about: AboutService;

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to {this.about.applicationName} version {this.about.version}
          </h1>
        </header>
      </div>
    );
  }
}

export default App;

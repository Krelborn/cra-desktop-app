import * as React from "react";
import * as ReactDOM from "react-dom";

// Make sure setup our IoC container asap!
import "./inversify.config";

import App from "./components/app/App";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();

//
// preload.ts
//
// The preload script which is loaded into the browser window from the main process. This actually
// runs in the render process, so we use it to customise the runtime environment of the web 
// application using its IoC container.
//

import { Container } from "inversify";

import { AboutService } from "../common/services/AboutService";
import { Types } from "../common/Types";

import { AboutDesktop } from "./services/AboutDesktop";

// When the application IoC container initializes we can inject our own types
window.addEventListener("willInjectServices", (event: CustomEvent) => {
  const container = event.detail as Container;
  container.bind<AboutService>(Types.AboutService).to(AboutDesktop);
});

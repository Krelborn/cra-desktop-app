//
// inversify.config.ts
//
// IoC container configuration
//
// When running under electron the container is owned by the render process. From desktop we can
// inject dependencies from the preload script when handling the willInjectServices event.
//

import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import { AboutService } from "../common/services/AboutService";
import { Types } from "../common/Types";

import { AboutWeb } from "./services/AboutWeb";

const container = new Container();

// Before we attempt to bind our implementations to the container, send a message to let others do
// it. The electron app subscribes to this event in the preload script so it can provide its own
// implementations to the container. After the event is checked we bind any remaining dependencies
// to their default classes.
const injectEvent = new CustomEvent("willInjectServices", { detail: container });
window.dispatchEvent(injectEvent);

if (!container.isBound(Types.AboutService)) {
  container.bind<AboutService>(Types.AboutService).to(AboutWeb);
}

export const { lazyInject } = getDecorators(container);
export { AboutService, container, Types };

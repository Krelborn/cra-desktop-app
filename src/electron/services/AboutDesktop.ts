//
// AboutDesktop.ts
//
// The desktop About Service implementation.
//

import { injectable } from "inversify";
import "reflect-metadata";

import { AboutService } from "../../common/services/AboutService";

@injectable()
export class AboutDesktop implements AboutService {
  public readonly applicationName = "Desktop App";
  public readonly version = "0.0.1b";
}

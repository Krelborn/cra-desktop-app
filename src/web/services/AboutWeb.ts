//
// AboutWeb.ts
//
// The web About Service implementation
//

import { injectable } from "inversify";
import "reflect-metadata";

import { AboutService } from "../../common/services/AboutService";

@injectable()
export class AboutWeb implements AboutService {
  public readonly applicationName = "Web Application";
  public readonly version = "0.0.1a";
}

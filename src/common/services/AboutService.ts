//
// AboutService.ts
//
// Declare a "service" interface for our information about the application. We have different 
// implementations for the web and a desktop builds which are injected with an IoC container.
//

export interface AboutService {
  readonly applicationName: string;
  readonly version: string;
}

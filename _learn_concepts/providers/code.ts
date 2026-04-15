/*
providers → “public access inside the component”
viewProviders → “private access only for the component’s own view
*/


// we create a simple service class

import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  id = Math.random();

  log(msg: string) {
    console.log(`[${this.id}] ${msg}`);
  }
}



// invoked the service the child class
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'projected-content',
  template: `<p>Projected Content</p>`
})
export class ProjectedContentComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('ProjectedContentComponent initialized');
  }
}


// Version using providers
/*service is available to everything inside the component, including projected content.*/
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'child-component',
  template: `
    <p>Child Component</p>
    <ng-content></ng-content>
  `,
  providers: [LoggerService] // 👈 IMPORTANT
})
export class ChildComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('ChildComponent initialized');
  }
}


// Version using viewProviders
/* The service is hidden from projected content, because Angular 
/ only exposes it to the component’s own view. */
@Component({
  selector: 'child-component',
  template: `
    <p>Child Component</p>
    <ng-content></ng-content>
  `,
  viewProviders: [LoggerService] // 👈 IMPORTANT
})
export class ChildComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('ChildComponent initialized');
  }
}

providers:
[Child Component]
   ├── Template (has access)
   └── Projected Content (has access)

viewProviders:
[Child Component]
   ├── Template (has access)
   └── Projected Content (NO access)
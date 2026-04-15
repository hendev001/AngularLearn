/*
DI (Dependency Injection) is a design pattern where a class does not
 create its own dependencies,
 but instead receives them from an external system (the injector).
*/


// contrast
const service = new UserService(); // ❌ manual creation
constructor(private userService: UserService) {} // ✅ injected


/*
  Without DI:

Tight coupling between classes
Hard to test
Hard to reuse
Hard to replace implementations

With DI:

Loose coupling
Easier testing (mocking)
Swappable implementations
Cleaner architecture

*/


// Service
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }
}

// component
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-demo',
  template: `<button (click)="log()">Log</button>`
})
export class DemoComponent {

  constructor(private logger: LoggerService) {}

  log() {
    this.logger.log('Hello from DI');
  }
}
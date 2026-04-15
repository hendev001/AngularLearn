/*
Pipes are optimized and controlled by Angular
whereas functions and impure pipes are not,
with pipe angular track the input value when it changes
it is called
---> memoization-like behavior.

function on the other hands is getting call on every 
change detection cycle, result changed, it runs over and over.




*/


// function call
/* function run over and over*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Function call</h3>
    <p>{{ getFilteredItems().length }}</p>
    <button (click)="noop()">Trigger change detection</button>
  `
})
export class AppComponent {
  items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    active: i % 2 === 0
  }));

  getFilteredItems() {
    console.log('Function executed');
    return this.items.filter(i => i.active);
  }

  noop() {} // just triggers change detection
}



//  purepipe
/*Initial render → pipe runs once*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeItems',
  pure: true
})
export class ActiveItemsPipe implements PipeTransform {
  transform(items: any[]) {
    console.log('Pipe executed');
    return items.filter(i => i.active);
  }
}


@Component({
  selector: 'app-root',
  template: `
    <h3>Pipe</h3>
    <p>{{ items | activeItems | length }}</p>
    <button (click)="noop()">Trigger change detection</button>
  `
})
export class AppComponent {
  items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    active: i % 2 === 0
  }));

  noop() {}
}


// Impure pipe
/* Operate as function*/
@Pipe({
  name: 'activeItems',
  pure: false
})
export class ActiveItemsPipe implements PipeTransform {
  transform(items: any[]) {
    console.log('Impure pipe executed');
    return items.filter(i => i.active);
  }
}
// The track function is a useful performance optimization
//new control flow @for() now requires you to specify a track function


@Component({
  selector: 'app-child',
  imports: [NgForOf],
  template: ` 
    <button (click)="onRerun()">re run</button>

    <div *ngFor="let item of items()">
        {{item.name}}
    </div>
`
})
export class ChildComponent {
  items = signal<{ id: string; name: string }[]>([]);

  onRerun() {
    // "fake api call" to reload data
    this.items.set([{id: '100', name: 'Item 1'}, /* ... */ ]);
  }
}


// trackBy on the code below solve the re-render of the above logic because the
// onRerun() is triggered and the array is updated & the DOM get sollicitated over and over
// causing performance loss.

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  template: ` 
    <ng-container *ngFor="let item of items(); trackBy: identify">
        <!-- previous code -->
    </ng-container>
`
})
export class ChildComponent {
  // ... previous code
  
  identify(index: number, item: { id: string }): string | number {
    return item.id;
  }
}

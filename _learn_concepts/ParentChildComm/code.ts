// Input/Output example
@Component({ selector: 'app-child', template: ` ... ` })
export class ChildComponent<T> {
  cSelected = output<T>();
  cData = input<T[]>();
}

@Component({
  imports: [ChildComponent],
  template: `<app-child 
      [cData]="pData()" 
      (cSelected)="pSelected.set($event)" />`
})
export class ParentComponent {
  pData = signal<string[]>(['a', 'b', 'c']);
  pSelected = signal<string>('');
}


// Shared Service example
@Injectable({ providedIn: 'root' })
export class SharedService<T> {
  store = signal<T | undefined>(undefined);
}

@Component({ selector: 'app-child', template: ` ... ` })
export class ChildComponent {
  service = inject(SharedService<string[]>);

  onPushData(){
    this.service.store.set(['a', 'b', 'c']);
  }
}

@Component({ imports: [ChildComponent], template: `<app-child />` })
export class ParentComponent {
  storedData = inject(SharedService<string[]>).store
}

// custom two-way binding example
@Component({ selector: 'app-child', template: ` ... ` })
export class ChildComponent<T> {
  @Input() cData: T[] = [];
  @Output() cDataChange = new EventEmitter<T[]>();

  onDataChange(newData: T[]) {
    this.cData = newData;
    this.cDataChange.emit(this.cData);
  }
}

@Component({
  imports: [ChildComponent],
  template: `<app-child 
      [(cData)]="pData" />`
})
export class ParentComponent {
  pData: string[] = ['a', 'b', 'c'];
}       


// Model Inputs
/*use model() to bind once and let Angular handle the rest.*/
@Component({
  selector: 'app-child',
  imports: [FormsModule],
  template: `<input [(ngModel)]="cData" />  `
})
export class ChildComponent {
  cData = model<string>('');
}

@Component({
  imports: [ChildComponent],
  template: `<app-child [(cData)]="pData" />`,
})
export class ParentComponent {
  pData = signal('Hello World');
}


// Imperative Programming
/*imperative programming involves mutating variables in multiple places, 
       with manual logic and track side effects.*/

/*
The imperative version manually subscribes to two streams (existingData$ and newData$) 
and mutates the displayedData signal in separate steps. Each data source 
is handled independently, 
which can lead to duplicated logic and harder maintenance as complexity grows.
*/
@Component({ template: ` ... ` })
export class ChildComponent {
  private readonly wsService = inject(WsService);
  private readonly apiService = inject(ApiService);

  displayedData = signal<string[]>([]);

  constructor(){
    // load existing data
    this.apiService.existingData$.subscribe((data: string[]) => {
      this.displayedData.set(data);
    });

    // listen on WS new data push
    this.wsService.newData$.subscribe((data: string) => {
      this.displayedData.update((current) => [...current, data]);
    });
  }
}



// Declarative Programming

/*
declarative programming involves defining a value or behavior in one place
       often through computed, signal or Rxjs streams. */
/*
the declarative version merges both streams and uses scan
 to build up the displayedData in a single, unified expression
*/
@Component({ template: ` ... ` })
export class ChildComponent {
  private readonly wsService = inject(WsService);
  private readonly apiService = inject(ApiService);

  displayedData = toSignal(
    merge(this.apiService.existingData$, this.wsService.newData$).pipe(
      scan((acc: string[], curr: string) => [...acc, curr], [] as string[])
    ),
    { initialValue: [] });
}

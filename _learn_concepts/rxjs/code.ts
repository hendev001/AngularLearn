
// Rxjs is a JS library for working with 
// async data streams using a functional, reactive style.

/*

Handles async complexity
Multiple API calls
Cancellation
Retries
Debouncing

*/

/*
   Key concept
   1. observable */
import { Observable } from 'rxjs';

const obs$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});
/*
   2. subscription */
   
obs$.subscribe(value => console.log(value));

/* 3. Operators */
import { map } from 'rxjs/operators';

obs$.pipe(
  map(x => x * 2)
).subscribe(console.log);

switchMap(id => http.get(`/api/${id}`))




export class TestComponent {
  private readonly http = inject(HttpClient);
  readonly control = new FormControl<string>('');
  
  search$ = this.control.valueChanges.pipe(
    // switchMap, concatMap, mergeMap, exhaustMap
    switchMap((val) => this.http.get('...', {
      val: val
    }))
   )
 }

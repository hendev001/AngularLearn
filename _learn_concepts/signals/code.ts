// signal “A better tool for state, not streams”

/* observable are better when it comes down to handle
    async stream data

    */


// Before (Observable-heavy)
data$ = this.service.getData().pipe(
  map(x => x.items),
  shareReplay(1)
);

// html
<div *ngIf="data$ | async as data">
  {{ data.length }}
</div>


// After (Signals)

data = toSignal(this.service.getData());
items = computed(() => this.data()?.items ?? []);


// html
{{ items().length }}


/*
Same logic, but:

No async pipe
No subscriptions
Cleaner template

*/
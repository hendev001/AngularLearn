/*NgZone is a wrapper around JavaScript's event loop that allows Angular to know when to trigger change detection.*/


@Injectable({ providedIn: 'root' })
export class ListenerService {
  private trackerService = inject(TrackerService);
  private document = inject(DOCUMENT);
  private ngZone = inject(NgZone);

  constructor() {
    this.ngZone.runOutsideAngular(() => {
        this.document.addEventListener('change', (event) => {
            const target = event.target as HTMLElement;
            
            if (target.tagName === 'INPUT') {
                this.trackerService.createLog({
                    type: 'INPUT',
                    value: (target as HTMLInputElement).value,
                });
            }
            
            // others ....
        }, true);
    });
  }
}

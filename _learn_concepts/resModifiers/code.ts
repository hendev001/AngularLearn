private service = inject(SomeService, {
    host: true,
    optional: true,
    self: true,
    skipSelf: true
});



@Directive({
  selector: 'input[formControlName], input[formControl]'
})
export class RequiredMarkerDirective {
    private ngControl = inject(NgControl, {
        optional: true,
        self: true
    })

    constructor() {
        if (this.ngControl?.control?.hasValidator(Validators.required)) {
        // Add red asterisk
        }
    }
}

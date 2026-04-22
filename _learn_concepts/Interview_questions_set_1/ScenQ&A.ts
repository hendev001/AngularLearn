/*

67. Scenario: Handling Data from Multiple APIs

Question: We are developing an Angular application that needs to fetch data from multiple APIs and display them together on the same page. 
How would we handle asynchronous API calls and ensure the data is displayed after all responses are received?

Answer: I would use the RxJS forkJoin operator to handle multiple API calls concurrently. 
This ensures that all API responses are received before processing the data. Here's how I would implement it:


import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

getData() {
    const api1$ = this.http.get('https://api1.example.com');
    const api2$ = this.http.get('https://api2.example.com');

    forkJoin([api1$, api2$]).subscribe(
        ([api1Response, api2Response]) => {
            // Process data from both APIs
            this.processData(api1Response, api2Response);
        },
        error => {
            console.error('Error fetching data', error);
        }
    );
}
 forkJoin waits until all observables complete and then emits the results in an array. 
 This is perfect for scenarios where you want to fetch data from multiple sources simultaneously.

68. Scenario: Optimizing Angular Performance with Lazy Loading

Question: Your Angular application is getting slower due to a large number of modules and components. How would you optimize the application’s performance?

Answer: One way to optimize an Angular application is by implementing lazy loading to load modules only when needed. 
This reduces the initial bundle size, improving load times. Here's an example of setting up lazy loading in Angular:


 // app-routing.module.ts
const routes: Routes = [
    { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
];
By using the loadChildren property, Angular will load the FeatureModule only when the user navigates to the /feature route.
This improves the app's performance by deferring the loading of non-essential modules.

69. Scenario: Handling Form Validation in Reactive Forms

Question: We have a form where the user enters their email, and we need to ensure that it is both valid and unique (not already in use). 
How would we implement this validation using Angular Reactive Forms?

Answer: I would use Reactive Forms with custom synchronous and asynchronous validators. 
Here's how I would implement both email format validation and uniqueness check:


 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

constructor(private fb: FormBuilder) { }

emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email], [this.uniqueEmailValidator.bind(this)]]
});

uniqueEmailValidator(control: AbstractControl) {
    const emailsInUse = ['test@example.com', 'user@example.com'];
    return of(emailsInUse.includes(control.value)).pipe(
        delay(500),
        map(isInUse => (isInUse ? { emailInUse: true } : null))
    );
}
The Validators.email ensures the entered email is valid, while the uniqueEmailValidator checks asynchronously whether the email is already in use.
If so, it returns an error, otherwise, it passes validation.
70. Scenario: Debugging Change Detection Issues

Question: We notice that a component is not updating as expected when data changes. 
How would you debug and resolve the issue related to Angular's change detection mechanism?

Answer: First, I would check if the component is using OnPush change detection strategy:


 @Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
If the OnPush strategy is being used, Angular only checks for changes when an input reference changes. 
If the data is updated by mutation, Angular will not detect the change. In this case, I would either:


 constructor(private cd: ChangeDetectorRef) {}

updateData() {
    this.data = { ...this.data, newValue: 'updated' };
    this.cd.markForCheck();  
}
If the object is mutated directly, OnPush doesn't detect the change.
Ensure the object reference is changed, or
Manually trigger change detection using ChangeDetectorRef:
Creating a new object or using markForCheck ensures that Angular runs change detection.
71. Scenario: Implementing Route Guards for Authentication

Question: How would you protect specific routes in your Angular application so that only authenticated users can access them?

Answer: I would implement Route Guards using Angular’s CanActivate interface to protect routes. Here's an example of how to implement an authentication guard


 import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
The AuthGuard checks if the user is authenticated before allowing access to the route.
If the user is not authenticated, they are redirected to the login page.
This ensures that only authorized users can access certain parts of the application.




*/

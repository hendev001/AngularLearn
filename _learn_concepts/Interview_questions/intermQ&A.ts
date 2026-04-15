/*
27. What type of DOM is used in Angular?

Angular uses the Real DOM (Document Object Model). The Change Detection mechanism is used to update only the affected 
parts of the DOM when data changes, improving performance. In addition, Angular uses a Shadow DOM for encapsulation, which helps isolate styles and behavior of components.

Real DOM: Updates the entire DOM when changes occur.
Change Detection: Optimizes updates to only parts of the DOM that need re-rendering.
Shadow DOM: Provides component style and behavior encapsulation.

28. In How many ways Bootstrap is embedded in Angular?
In Angular, bootstarp can be implemented by the two ways:

Using npm (Recommended): Install Bootstrap via npm and import it into the angular.json file under the "styles" and "scripts" arrays.
npm install bootstrap
Using CDN (Content Delivery Network): Instead of installing Bootstrap locally, you can link to Bootstrap's CSS and JS files directly from a CDN in your index.html file:
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

29. How can you pass data between components in Angular?
Data can be passed between components using Input and Output decorators, services, or router state.

Passing data from a parent component to a child component using @Input decorator.
 //child.component.ts

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() childData: string; // Declare the input property
}

//Child.component.html
<div>
    <p>Data from parent: {{ childData }}</p>
</div>

//parent.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    parentData: string = 'Hello from Parent Component!';
}

//parent.component.html
<div>
    <app-child [childData]="parentData"></app-child>
</div >

//App.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

30. Explain lazy loading in Angular?

Lazy loading in Angular is a technique used to improve the performance of an application by loading feature modules only when they are needed, 
rather than loading all modules upfront. This reduces the initial load time of the application and speeds up the startup process.

31. What is MVVM architecture in Angular?

MVVM (Model-View-ViewModel) is a software architectural pattern that is commonly used in Angular applications, 
providing a clean separation of concerns between different components of an application. This ensures that changes in one part of the application 
(like in the logic or data) do not directly affect or interfere with the user interface.

view_model_
Here's how MVVM works in Angular:

Model:

Represents the application's data and logic.
It is the part of the application that manages the state, and it can be composed of services, APIs, or even simple objects.
In Angular, the Model can be represented by services or interfaces that fetch data from a database or API and expose methods for interacting with that data.
View:

Represents the UI (user interface) elements that the user interacts with, such as buttons, inputs, forms, etc.
In Angular, the View is typically defined using HTML and CSS, and it's tied to the template of a component.
The view listens for changes in the ViewModel and displays updated data to the user.
ViewModel:

This is the key part of MVVM in Angular. It acts as a bridge between the Model and View.
The ViewModel holds the data and logic needed to present the Model’s data in a way that the View can easily display.
It is represented by the component in Angular, which binds the data and defines the behavior that will be reflected in the view.
Angular’s two-way data binding (via ngModel) allows the ViewModel to automatically synchronize with the View, enabling automatic updates when data changes.

32. What are Angular lifecycle hooks?

Angular lifecycle hooks are methods that allow you to tap into key moments in a component's lifecycle. Here are the main lifecycle hooks:

ngOnInit(): Called once after the component's data-bound properties have been initialized.
ngOnChanges(changes: SimpleChanges): Called whenever one or more data-bound input properties change.
ngDoCheck(): Called during every change detection run, allowing you to implement your own change detection.
ngAfterContentInit(): Called once after Angular projects external content into the component's view.
ngAfterContentChecked(): Called after every check of projected content.
ngAfterViewInit(): Called once after the component's view (and child views) has been initialized.
ngAfterViewChecked(): Called after every check of the component's view (and child views).
ngOnDestroy(): Called just before Angular destroys the component, allowing you to clean up resources.

33. What is a pipe in Angular?
A pipe is a way to transform data in the template. It allows you to format or manipulate data before displaying it to the user. 
Angular provides several built-in pipes like DatePipe, UpperCasePipe, and CurrencyPipe, and you can also create custom pipes. 
Pipes are typically used to modify the display of data without altering the original data itself.

34. What is Angular Universal?

Angular Universal is a technology that enables server-side rendering (SSR) for Angular applications, 
improving performance, initial load times, and search engine optimization (SEO) by pre-rendering the application on the server before sending it to the client. 
This results in faster, more interactive user experiences and better indexing by search engines.

35. How do you optimize Angular applications?

To optimize Angular applications, you can:

Use AOT (Ahead-of-Time) Compilation: Pre-compile the application to improve startup time and reduce the size of the bundle.
Lazy Loading: Load modules only when they are needed to reduce initial loading time.
OnPush Change Detection: Use the OnPush change detection strategy to minimize unnecessary checks.
Tree Shaking: Remove unused code during the build process to reduce bundle size.
Minification and Uglification: Minify and compress JavaScript and CSS files for smaller payloads.
Use TrackBy with ngFor: Improve performance in lists by using trackBy to avoid re-rendering unchanged items.
Service Workers: Implement service workers for caching and offline support.

36. What are Angular interceptors?

Angular interceptors are services that intercept and modify HTTP requests and responses. They allow you to 
perform actions such as adding headers (e.g., authentication tokens), logging, or handling errors globally. Interceptors are useful 
for managing HTTP communication centrally in Angular applications.

37. Explain the purpose of NgZone in Angular?

NgZone in Angular is a service that helps Angular know when to update the view by tracking asynchronous operations. 
It runs change detection whenever an asynchronous operation, like a setTimeout or HTTP request, completes. NgZone ensures that Angular 
is aware of changes in the application state and triggers the necessary updates to the view.

38. What is the difference between @Input() and @Output() in Angular?

Decorator	Purpose	Example
@Input()	Pass data from parent to child component	<child [childData]="parentData"></child>
@Output()	Emit events from child to parent component	<child (childEvent)="parentMethod($event)"></child>

39. How do you implement authentication in Angular?
Authentication can be implemented using JWT tokens, Angular guards, and interceptors to manage login and secure routes.
Securing a route with an AuthGuard.


import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('userToken');
    }
}

40. What are Standalone Components in Angular 19?

In Angular 19, standalone components provide a simpler and more flexible way to build applications without depending on NgModules. 
They reduce complexity, improve optimization through better tree-shaking, and make components easier to manage, test, and reuse. 
This leads to cleaner code, improved performance, and a streamlined development workflow.

No need for complex NgModule dependencies.
Better tree-shaking: Optimized bundle size.
Easier to develop, test, and reuse components independently.
Cleaner code and improved flexibility in application architecture.

41. How do you use Typed Forms?

Typed Forms in Angular 19 provide enhanced type safety for reactive forms. By defining strict types for FormGroup, FormControl, 
and FormArray, developers can prevent runtime errors, ensure consistency, and handle form data more robustly. This improves maintainability and the overall developer experience.

Strong type-checking for form controls to prevent runtime errors.
Easier management and access to form values with proper type support.
More robust and maintainable reactive forms for large applications.

42. What is the purpose of the Signal API?

The Signal API in Angular simplifies state management by providing reactive signals that automatically track changes and update the view. 
This reduces the need for manual change detection, improves performance, and makes applications more responsive and efficient.

Automatic tracking of state changes and dependencies.
Updates the view without manual change detection.
Reduces complexity in managing reactivity.
Optimizes performance by minimizing unnecessary updates.

43. How does the inject() function work?
The inject() function simplifies the process of dependency injection (DI). 
It allows developers to access and inject services or dependencies directly within the component’s 
constructor or lifecycle methods without the need for constructor injection.

44. What improvements have been made to standalone testing?

Standalone components can now be tested directly, reducing boilerplate code and enhancing tree-shaking by 
avoiding unnecessary module dependencies. The testing framework has been optimized for better performance and developer experience. 
Angular 19 also improves integration with testing libraries like Jasmine and Karma, allowing for more straightforward configuration, faster tests, and a smoother testing process.

45. Explain the use of Functional Components?

Functional components focus purely on rendering UI based on inputs and outputs, without requiring a class structure. 
This approach brings a more functional programming style to Angular, making it easier to write and test components 
with better performance, especially for simple and reusable components.


46. What is Ahead-of-Time (AOT) compilation in Angular?

Ahead-of-Time (AOT) compilation in Angular is the process of compiling Angular templates and TypeScript 
code into efficient JavaScript code during the build process, before the application is run in the browser. 
This reduces the size of the application, improves startup performance, and allows for earlier detection of template errors, 
resulting in faster rendering and better overall performance in production.


47. What is Ivy in Angular?

Ivy is Angular's next-generation rendering engine, introduced to improve performance and reduce bundle sizes. 
It offers faster compilation, more efficient rendering, and enhanced debugging capabilities. 
Ivy's advanced tree-shaking features eliminate unused code, leading to smaller and faster applications. Additionally, 
Ivy provides better backward compatibility, making it easier to update and maintain Angular applications.


48. Explain the purpose of Angular Elements.

Web Component Integration: Allows Angular components to be packaged as custom elements (web components) that can be used in any HTML page or framework.
Reusability: Enables the reuse of Angular components across different projects and frameworks, providing code sharing and consistency.
Interoperability: Provides the integration of Angular components into non-Angular applications, enhancing flexibility and compatibility.
Encapsulation: Provides encapsulated, self-contained components that encapsulate their logic, styles, and templates, reducing the risk of conflicts in larger applications.


49. What is a Resolver in Angular?

A Resolver in Angular is a service that pre-fetches data before a route is activated, ensuring that the necessary data is available when the route is accessed. 
This is particularly useful for loading important data that a component depends on, thereby enhancing user experience by avoiding loading indicators or incomplete views.






*/
/*
52. What is the purpose of NgModule in Angular?

The purpose of NgModule in Angular is to organize an application into cohesive blocks of functionality by grouping related components, directives, pipes, and services.
 NgModule defines a compilation context for these elements, providing modularity and maintainability.

53. What is the difference between Template-driven and Reactive Forms?

Template-driven Forms	Reactive Forms
Based on directives	Based on explicit creation
Asynchronous	Synchronous
Simple forms	Complex forms
Two-way data binding	Immutable data model

54. What are Angular Guards?

Angular Guards are services that control access to routes in an Angular application. 
They are used to protect routes from unauthorized access or to prevent unwanted navigation. Common types of guards include:

CanActivate: Determines if a route can be activated.
CanDeactivate: Checks if a route can be deactivated.
CanLoad: Determines if a module can be loaded lazily.

55. How do you create custom validators in Angular?

Custom validators can be created by implementing the ValidatorFn interface and using it in the form controls.
Creating a custom validator to check if a username is available.

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsernameValidatorService {
    private takenUsernames = ['admin', 'user', 'guest'];

    checkUsername(username: string): Observable<boolean> {
        return of(this.takenUsernames.includes(username)).pipe(
            map(isTaken => !isTaken)
        );
    }
}

56. What is the purpose of Angular animations?

The purpose of Angular animations is to add dynamic visual effects to applications, 
improving user experience by making transitions, state changes, and movements more engaging. 
They enable smooth animations for elements such as fading, sliding, or resizing, triggered by user interactions or state changes in the application.

57. Explain dynamic components in Angular.

Dynamic components in Angular are components that are created and inserted into the application at runtime, 
rather than being statically declared in the template. This allows for greater flexibility and responsiveness in applications.

58. What is Angular Material?

Angular Material is a UI component library for Angular applications that provides pre-built, 
reusable, and customizable user interface components, following Google’s Material Design principles. 
It offers components like buttons, dialogs, form controls, and navigation elements, helping developers create modern, responsive, and visually appealing applications quickly.

59. What is Eager?

In AngularJS, eager loading refers to the process where modules, services, and controllers are loaded at the start of the application, 
even if they are not immediately needed. Eager loading is typically used when the developer expects all parts of the application to be used early on.

60. What is the purpose of Angular's Renderer2?

Platform Agnostic:Renderer2 provides a platform-agnostic way to manipulate the DOM, ensuring that the application can run consistently across different environments, 
such as server-side rendering with Angular Universal or web workers.
Security: It helps prevent XSS (Cross-Site Scripting) attacks by sanitizing inputs and ensuring safe interactions with the DOM.
Abstraction:Renderer2 abstracts away direct DOM manipulation, making the code more testable and maintainable by allowing developers to focus on logical rather than low-level DOM operations.
Consistency: Ensures consistent behavior across various browsers and platforms.

61. What is the difference between AOT and JIT? 

AOT (Ahead-of-Time) Compilation	JIT (Just-in-Time) Compilation
Compilation occurs at build time	Compilation occurs at runtime
Faster startup time, as the code is already compiled	Slower startup time, as the code is compiled in the browser
Errors are detected at build time, allowing for earlier fixes	Errors are detected at runtime, which may affect the user experience
Smaller bundle size, as the compiler is not included in the bundle	Larger bundle size, as the compiler is included in the bundle
Better suited for production environments, including server-side rendering	Often used in development environments for faster iteration and debugging

62. What are the benefits of using Web Workers in Angular?

Improved Performance: Web Workers allow for offloading heavy computations and tasks to background threads, 
freeing up the main thread and ensuring smoother and more responsive user interfaces.
Enhanced User Experience: By running complex operations in the background, Web Workers prevent the UI from becoming unresponsive, providing a seamless and uninterrupted user experience.
Parallel Processing: Web Workers enable parallel processing of tasks, which can significantly speed up operations that are computationally intensive or involve large datasets.
Better Scalability: Utilizing Web Workers can help scale applications more effectively by distributing the workload, leading to more efficient 
resource utilization and improved performance under high load conditions.

63. What is Data Binding in Angular?

Data binding in Angular is a mechanism that allows communication between the component and the view (HTML template). 
It synchronizes the data between the model (component) and the view, making it easy to reflect changes in the UI whenever data changes in the component.

There are the 4 types of the data binding in Agular:

Interpolation (One-way Binding)
Property Binding (One-way Binding)
Event Binding (One-way Binding)
Two-way Binding

64. What are impure pipes in angular?

Impure pipes in Angular are pipes that can change the output when input values change over time, 
even without the change detection running. Unlike pure pipes, impure pipes are evaluated every time change detection runs, which can lead to performance issues if not used carefully.

65. What are pure pipes in angular?

Pure pipes in Angular are pipes that only re-evaluate when their input data changes. This makes them more efficient 
compared to impure pipes, as they are only executed when the values of the inputs change.

66. What is Pipe transform Interface in Angular?

In Angular, the PipeTransform interface is used to define the structure of a custom pipe. It is part of the Pipe decorator, 
which helps in creating custom pipes to transform data within templates.






*/
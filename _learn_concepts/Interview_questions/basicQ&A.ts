/*
Angular Interview Questions and Answers
Angular is a popular open-source framework that simplifies web development by creating interactive single-page applications (SPAs). Unlike traditional websites that load new pages for each click, SPAs offer a smoother user experience by updating content on the same page.

Syncs model and view in real-time, minimizing DOM manipulation.
Organizes code for scalability and maintainability in SPAs.
Simplifies dynamic UI creation with reusable HTML components.
Angular Basics Interview Questions
In this section, we will discuss basic Angular questions asked in the interview suitable for the freshers.

1. Why was a client-side framework introduced?
Client-side frameworks were introduced to handle the growing complexity of modern web applications. Earlier, with plain JavaScript or jQuery, developers had to manually update the DOM, which became messy and hard to maintain as applications grew.
Frameworks like Angular and React solved this by:
Supporting Single Page Applications (SPAs) for smooth, fast user experiences without full page reloads.
Providing features like two-way data binding (Angular) or virtual DOM (React) to keep UI and data in sync automatically.
Offering a component-based architecture so code is reusable, organized, and easier to maintain.
Giving built-in tools (routing, forms, state management) that increased developer productivity.


2. How does an Angular application work?
An Angular app is a Single Page Application (SPA) that runs in the browser. It bootstraps the root module, builds the UI with components and templates, 
uses services for logic, manages navigation with the router, and keeps the UI updated through data binding and change detection.

App bootstraps from main.ts with AppModule and AppComponent.
Modules group app features.
Components build UI with logic, template, and styles.
Data binding links view and logic.
Directives modify DOM.
Services share reusable logic via DI.
Routing handles navigation.
Change detection updates DOM on data change.
Compiler renders templates into JavaScript.


3. How are Angular expressions different from JavaScript expressions?
JavaScript expressions are evaluated by the browser’s JS engine directly.
Angular expressions are written inside {{ }} in templates and evaluated by Angular.
Angular Expressions	JavaScript Expressions
Used inside Angular templates ({{ }}, *ngIf, *ngFor).	Used in .js/.ts files or <script> tags.
Evaluated in the scope of the component.	Evaluated in the global/function scope.
Cannot contain loops, assignments, or declarations.	Can contain full logic: loops, assignments, declarations.
Automatically escaped : safer from XSS.	Executed directly : needs manual security handling.
Supports data binding with templates.	No built-in data binding support.


4. What are Single Page Applications (SPA)?
Single Page Applications (SPAs) are web applications that load a single HTML page once and dynamically update the content using JavaScript. This approach enables faster interactions and a smoother, more consistent user experience.
Dynamically updates content without reloading the entire page.
Provides faster performance and a seamless user experience.

5. What are templates in Angular?
A template is a kind of HTML that instructs Angular about how to display a component. An Angular HTML template, like conventional HTML, produces a view, or user interface, in the browser, but with far more capabilities. Angular API evaluates an HTML template of a component, creates HTML, and renders it.
There are two ways to create a template in an Angular component:
Inline Template
Linked Template
Inline Template: The component decorator's template config is used to specify an inline HTML template for a component. The Template will be wrapped inside the single or double quotes.
Linked Template: A component may include an HTML template in a separate HTML file. As illustrated below, the templateUrl option is used to indicate the path of the HTML template file.


6. What is an AOT Compiler?
The AOT (Ahead-of-Time) Compiler in Angular compiles Angular HTML and TypeScript code into efficient JavaScript before the browser downloads and runs the app. This makes the application load faster, reduces runtime errors, and improves overall performance compared to JIT (Just-in-Time) compilation, which happens in the browser.

7. How many types of compilation Angular provides?
Angular provides two types of compilation:
JIT (Just-in-Time) Compilation:
Happens at runtime in the browser.
Compiles the Angular application in the browser as it loads.
Faster development builds but slower performance in production.
AOT (Ahead-of-Time) Compilation:

Happens during the build phase before the application is run.
Compiles the application into efficient JavaScript code ahead of time, which leads to faster loading and better performance.
Recommended for production builds.
In JIT compilation, the application compiles inside the browser during runtime. 
AOT compilation, the application compiles during the build time.

8. What is a component in Angular?
A component is a fundamental building block of Angular applications. 
It controls a part of the user interface and manages the data and logic for that section. 
Components are used to create reusable UI elements and define the structure and behavior of the app.

import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() title: string;
    @Input() links: { name: string, url: string }[];

    constructor() { }
}


9. Explain the purpose of @Component decorator in Angular?

Defining the Component: It designates a class as an Angular component and provides metadata about the component.
Template Association: Links the component with its HTML template, defining the view.
Style Binding: Associates the component with its CSS styles to encapsulate and manage styling.
Selector Definition: Defines a custom HTML tag (selector) that represents the component in the application.
Dependency Injection Configuration: Specifies the providers for the component, providing dependency injection.

10. What is a module in Angular?
A module is a logical unit of the application that groups related components, directives, pipes, and services. 
It helps organize and manage the application by encapsulating functionality into cohesive blocks.

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

11. What is Angular CLI?
Angular CLI (Command Line Interface) is a powerful tool that helps automate and streamline 
the development process for Angular applications. 
It provides a set of commands for creating, managing, and building Angular projects.

Common Angular CLI commands include:
ng new: Creates a new Angular project.
ng serve: Serves the application locally.
ng generate: Generates components, services, and more.
ng build: Builds the application for production.

12. What is a directive in Angular?
Directives are special markers on a DOM element that tell Angular to do something to that DOM element or its children. 
Directives are used to extend HTML functionality by adding behavior to elements, such as manipulating their attributes or styling.

import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {
    @Input('appHoverBackground') hoverColor: string;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.changeBackgroundColor(this.hoverColor || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.changeBackgroundColor(null);
    }

    private changeBackgroundColor(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}


13. What is a service in Angular?

A service is a class that encapsulates reusable logic, which can be shared across different components of an Angular application. 
Services are typically used for data fetching, business logic, and other operations that need to be shared.


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private dataSubject = new BehaviorSubject < any > (null);
    data$ = this.dataSubject.asObservable();

    constructor(private http: HttpClient) { }

    fetchData(): Observable<any> {
        return this.http.get('https://api.example.com/data').pipe(
            tap((data) => this.dataSubject.next(data))
        );
    }

    getData(): Observable<any> {
        return this.data$;
    }
}


14. Explain two-way data binding in Angular?
Two-way data binding in Angular is a mechanism that allows synchronization of 
data between the model (component class) and the view (template). 
It ensures that changes in the model are reflected in the view and vice versa, 
automatically updating both when either one is modified.

import { Component } from '@angular/core';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
    userInput: string = '';

    updateInput(value: string) {
        this.userInput = value;
    }
}


15. What are Angular Lifecycle Hooks?
Angular lifecycle hooks are methods that allow developers to tap into key moments in a component’s lifecycle. 
Key hooks include ngOnInit (called once when the component is initialized), ngOnChanges (called when input properties change), 
and ngOnDestroy (called before Angular destroys the component).


16. What is the difference between Angular and AngularJS?
Angular	AngularJS
Component-based architecture	MVC (Model-View-Controller)
TypeScript	JavaScript
Designed with mobile support	Limited mobile support
Higher performance with AOT compilation	Relatively slower due to dynamic compilation
Two-way data binding with reactive forms and observables	Two-way data binding with scopes and watchers


17. What is Data Binding in AngularJS?

Data Binding in Angular provides a function Data Binding which helps us to have an almost real-time reflection of the input given by the user i.e. 
it creates a connection between Model and View.

18. Differences between one-way binding and two-way binding?

In Angular, both one-way and two-way data binding are supported. 
Angular provides mechanisms for both types of binding based on the use case.

One-Way Binding

Two-Way Binding

Data flows in one direction (from component to view or vice versa).

Data flows in both directions (from component to view and vice versa).

Unidirectional (either component : view or view : component).

Bidirectional (component ↔ view).

Simpler to implement as it handles data in one direction only.

More complex, as it involves synchronization between the view and the component.

Used when the view only needs to display data or when the component updates based on view changes.

Used when you want to reflect changes in the model immediately to the view and vice versa.

{{ message }} or [property]="value"

[(ngModel)]="value"


19. What is string interpolation in AngularJS?

String interpolation is a technique used to bind data from the model (JavaScript) to the view (HTML) 
by embedding expressions within double curly braces {{ }}. It allows you to insert dynamic values or variables 
into the HTML content, making the view update automatically when the model changes.

<div>{{ message }}</div>

20. How many types of Directives are available in AngularJS?

There are four kinds of directives in AngularJS those are described below:

Element directives
Attribute directives
CSS class directives
Comment directives

21. What is factory method in AngularJS?

AngularJS Factory Method makes the development process of AngularJS application more robust. 
A factory is a simple function that allows us to add some logic to a created object and return the created object.

The factory is also used to create/return a function in the form of reusable code which can be used anywhere within the application.
Whenever we create an object using a factory it always returns a new instance for that object.
The object returned by the factory can be integrated(injectible) with different components of the 
Angularjs framework such as controller, service, filter or directive.


22. What is the digest cycle in AngularJS?
The digest cycle in AngularJS is a process where Angular compares the current and previous values of the scope 
model to check for changes. If changes are detected, Angular updates the view. This cycle is triggered automatically after an event like a user action, HTTP request, or model change, and it ensures that the view stays in sync with the model. It can also be manually triggered using $apply().

23. What is dependency injection in Angular?
Dependency Injection (DI) in Angular is a design pattern where services or objects are provided to components or 
other services rather than being created within them. It allows for better modularity, testability, and management of dependencies. 
Angular's DI framework automatically injects required services into components, making it easier to manage and maintain the application.

24. How do you create a service in Angular?
A service can be created using Angular CLI or manually by creating a class decorated with @Injectable().

Creating a data fetching service.


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataFetchingService {
    private apiUrl = 'https://api.example.com/data'; 

    constructor(private http: HttpClient) { }

    fetchData(): Observable<any> {
        return this.http.get < any > (this.apiUrl);
    }
}

25. What is an Angular router?
The Angular router is a library that enables navigation between different views or 
pages in a single-page application (SPA). It allows developers to define routes, handle URL changes, 
and load components dynamically based on the route, providing a smooth and efficient user experience without page reloads.

26. What is scope in Angular?
In Angular, scope refers to the environment or context in which variables, expressions, and functions are evaluated. It determines the visibility and accessibility of these variables within different parts of the application, particularly in relation to the component's template and controller.

Note: In Angular 2+ (modern Angular), the term scope is no longer used. It is replaced by component state and data binding.




*/
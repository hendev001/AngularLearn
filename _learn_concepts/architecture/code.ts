/*
  MODULAR ARCHITECTURE

 ** MODULES
    - Modules are self-contained units of
     code that encapsulate specific functionality or features.
    - They help organize your application into cohesive blocks,
     making it easier to manage and maintain.
    - Modules can contain components, services, directives, pipes, and other modules.
    - They promote separation of concerns and reusability.

 ** COMPONENTS
    - Components are the building blocks of the user interface in Angular.
    - They define a view (HTML template) and associated logic (TypeScript class).
    - Components are responsible for rendering the UI and handling user interactions.

 ** SERVICES
    - Services are reusable logic containers that help keep your application modular,
     testable, and maintainable.
    - They are typically used to share data and functionality across components.
    - Services can be injected into components or other services using Angular's 
    dependency injection system.

 ** DIRECTIVES
    - Directives are classes that add behavior to elements in your Angular applications.
    - They can modify the appearance or behavior of DOM elements.
    - There are three types of directives: 
      1. Component Directives (with a template)
      2. Structural Directives (change the DOM layout by adding/removing elements)
      3. Attribute Directives (change the appearance or behavior of an element)

 ** PIPES
    - Pipes are a way to transform data in your templates.
    - They take in data as input and return a transformed version of that data.
    - Angular provides built-in pipes for common transformations
     (e.g., date formatting, currency, etc.), and you can also create custom pipes.

  TRACKING
    - Tracking is a performance optimization technique used in Angular to efficiently update 
    the DOM when data changes.
    - It involves using a trackBy function with *ngFor to help Angular identify which items have 
    changed, been added, or removed, thus minimizing unnecessary re-renders.           

  ** ROUTING
    - Routing is the mechanism for navigating between different views or pages in an Angular 
    application.
    - It allows you to define routes and associate them with components, 
    enabling a single-page application (SPA) experience.


    Guards
    - Guards are used to control access to routes in an Angular application.
    - They can be used to check if a user is authenticated, has the necessary permissions, 
    or to prevent navigation away from a route with unsaved changes.

    Lazy Loading
    - Lazy loading is a technique that allows you to load modules and their associated components, 
    services, etc., only when they are needed.
    - This can significantly improve the initial load time of your application by reducing the 
    amount of code that needs to be loaded upfront.

  **  DEPENDENCY INJECTION
    - Dependency Injection (DI) is a design pattern used in Angular to manage the 
    dependencies of components and services.
    - It allows you to inject services or other dependencies into 
    your components, making them more modular and testable.

   ** STATE MANAGEMENT
    - State management refers to the way an application manages and shares 
    data across components.
    - Angular provides various ways to manage state, including services, RxJS, 
    and third-party libraries like NgRx.

    BINDING

    - Binding is the mechanism for connecting the data in your component class
     to the view (template) and vice versa.
    - Angular supports different types of binding, including:
      1. Interpolation ({{ }})
      2. Property Binding ([property])
      3. Event Binding ((event))
      4. Two-way Binding [(ngModel)]

     CHANGE DETECTION
    - Change detection is the process by which Angular determines when to update the view 
    based on changes in the component's data.
    - Angular uses a change detection mechanism to efficiently update the DOM when data changes.
    - It can be optimized using techniques like OnPush change detection strategy and trackBy
     functions. 

    TESTING
    - Testing is an essential part of the development process to ensure 
    the quality and reliability of your application.
    - Angular provides tools and frameworks for unit testing, 
    integration testing, and end-to-end testing.  



    INTERCEPTORS
    - Interceptors are a powerful feature in Angular that allows you to intercept and modify 
    HTTP requests and responses.
    - They can be used for tasks such as adding authentication tokens, logging, error handling, etc.
    - Interceptors are implemented as services that implement the HttpInterceptor interface.



*/
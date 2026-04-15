/*n InjectionToken is like a unique identifier 
or a name tag that Angular uses to locate and provide a specific value or service during dependency injection*/

bootstrapApplication(App, {
  providers: [
    provideAppInitializer(() => {
      // init languages
      // get data from cookies
      // setup sentry
      // etc ...
    }),
  ],
});

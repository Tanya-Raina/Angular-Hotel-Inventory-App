### We can create multiple applications in one workspace
- That is called as `mono-repo`.
- We can also deploy multiple applications in one workspace.
- Makes sharing code between apps easier.



## The files present in a newly created workspace:

1. `tsconfig.json` - This file contains the TypeScript configuration for the project. This file is used by the TypeScript compiler to compile the project into JavaScript. It contains all the different flags as well.
</br> </br>
When we write files in Angular, we write 2 types of code:
- Application related code
- Unit test related code - automatically generated using a certain command. All these files are `spec.ts` files.
- `tsconfig.spec.json` files will be used to compile these files.
- `tsconfig.app.json` files will be used to compile the application related code.
2.`package.json` - This file contains the dependencies of the project. It contains the list of all the packages that are required to run the project. It also contains the list of scripts that can be used to run the project.
3. `karma.conf.js` - This file contains the configuration for the Karma test runner. Karma is a test runner that is used to run the unit tests.
4. `angular.json` - This file contains the configuration for the Angular CLI. It contains the list of projects that are present in the workspace.
5. `browserlist` - This file contains the list of browsers that the project supports.


### The files present in `src` folder:
1. `test.ts` - This file is used by `karma.conf.js`.
2. `styles.sass` - This file contains the global styles for the project.
3. `polyfills.ts` - Polyfills are used to add support for certain features in the browser. It helps with backward compatibility.
4. `main.ts` - This file is the entry point for the application. It is where the application starts.
5. `environments` - This folder contains the environment variables. 


## About the commands:
- `ng serve` command: is in watch mode, so all the changes are reflected in the browser automatically and immediately.
- `ng generate component <component-name>` command: is used to generate a component. Shortcut is `ng g c <component-name>`. This creates 4 files.

## Directives:
- they are used to change the behaviour and appearance of the DOM.
- they can implement all the lifecycle hooks.
- they cannot have templates the way components can.
- they won't have the template file, just the logic.

1. Structural directives:
- they change the structure of the DOM.
- ngIf, ngFor, ngSwitch

2. Attribute directives:
- ngClass, ngStyle - related to styling

4. Built-in directives:
- The * indicates that it is a structural directive.
- These are creating and displaying the DOM elements, that's why structural directives.
- `*ngIf` - used to conditionally render a DOM element.
- `*ngFor` - used to render a list of DOM elements.
- `*ngSwitch` - used to conditionally render a DOM element.
- `[ngSwitch]="<choice-to-switch>"`
- `*ngSwitchCase="choice1"`
- `*ngSwitchCase="choice2"`
- `*ngSwitchDefault`

 
## Pipes
- Are used for data transformation.
- Don't change actual object.
- Eg: showing date in proper format, currency format, etc.
- `{{ <variable> | <pipe> }}`
</br> </br>
- To make pipes work,
- in `app.module.ts` file, import `CommonModule` from `@angular/common`.
- and add `CommonModule` in `imports` array.
- `CommonModule` is a module that contains all the built-in pipes.
- Next in `rooms.component.ts`, import `DatePipe` from `@angular/common`.
- and add `DatePipe` in `providers` array.
- `providers` array is used to add services and pipes.
- Now in `rooms.component.html`, use the pipe.
</br> </br>
- `jsonpipe` - JSON-format representation. Useful for debugging
- `slice` - slice the array, can be used with `ngFor` - `*ngFor="let room of rooms | slice:0:2"`
- `decimal` - format the number, also helps with decimal places
- {minDigitsBeforeDecimalPt}.{minDigitsAfterDecimalPt}-{maxDigitsAfterDecimalPt}
- `3.5382 | number: '1.2-2'` - 3.54


## Lifecycle Hooks
- They are methods that are called at different stages of the lifecycle of a component.
- `contructor()` - component is initialized.
- `ngOnInit()` - do something right after it is initialised, component data can be loaded, data from API can be fetched.

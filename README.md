#Angular Demo App

This is demo Angular project.

To start it you should make sure that you have next software available:
* NodeJS, version 14+
* Npm package manager
* Angular CLI (`npm install @angular/cli:latest`)

For starting the server you should first build the project (for example using `npm install`) 
and then run dev server with command `ng serve`. UI will be available on `http://localhost:4200/`.

# Documentation

You could find all documentation and clarification by searching for tag `[DOC]`

## Components

To add new component (page) you should follow next steps:
- add files `some.component.html` and `some.component.ts`
- add class with `@Component` annotation to ts file and specify `templateUrl='./some.component.html`
- add your html and ts code
- in `app.module.ts` file import component like `import {SomeComponent} from './some.component';`
- add route for this component in `routes` array (if you want to add some parameter to url you could add it this way 
`{ path: 'some/:id', component: SomeComponent }` and than use following code to extract parameter 
`this.route.snapshot.paramMap.get('id')`)
- add component name to `declarations` property in `@NgModule` annotation

## Libraries
To add new library follow next steps:
- add library to 

## Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

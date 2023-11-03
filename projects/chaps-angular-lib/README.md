# ChapsAngularLib

Library for Angular reusable components 

## Code scaffolding

Run `ng generate component component-name --project chaps-angular-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project chaps-angular-lib`.
> Note: Don't forget to add `--project chaps-angular-lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build chaps-angular-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build chaps-angular-lib`, go to the dist folder `cd dist/chaps-angular-lib` and run `npm publish`.

## Running unit tests

Run `ng test chaps-angular-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Creating new components: 
Components should be created inside "components" folder. They have to be declared and exported in the chaps-angular-lib.module.ts. And last, if you want them to be accesible when others are using the library, also export them in the public-api.ts. 

## Versions

### 0.0.1:
First library version. Includes base components: Alert, Button, Input, Loader, Main-Theme and Paginator. 


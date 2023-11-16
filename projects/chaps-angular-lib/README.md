# ChapsAngularLib

Library for Angular reusable components based on bootstrap. Go check it out here: https://chaps-angular-lib.netlify.app/

## Build

Run `ng build chaps-angular-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build chaps-angular-lib`, go to the dist folder `cd dist/chaps-angular-lib` and run `npm publish`.

## Creating new components: 
Components should be created inside "components" folder. They have to be declared and exported in the chaps-angular-lib.module.ts. And last, if you want them to be accesible when others are using the library, also export them in the public-api.ts. 

## Versions

### 0.0.1:
This is the first library version. It includes the components: Alert, Button, Input, Loader, Main-Theme and Paginator and JorgeChaparroCV. 

### 0.0.2:
Bootstrap was added as a dependency. 

### 0.0.3: 
Published at https://chaps-angular-lib.netlify.app/

### 0.0.4: 
Dropdown component included.  
# ChapsAngularLib

Library for Angular reusable components based on bootstrap. Go check it out here: https://chaps-angular-lib.netlify.app/

# Git Repository:

https://github.com/JorgeChaparroS/chaps-angular-library

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

### 1.0.0: 
IMPORTANT: Update to Angular 17. This could generate errors when trying to install the library in Projects above v17. You can always use "--force" command, but do it at your own risk.  

### 1.0.1: 
Update CV component to show information up to date.

### 1.0.2: 
Set background transparent for inputs and dropdowns so they fit its parent background.

### 1.0.3: 
Update CV component to show information up to date.
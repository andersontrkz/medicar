### Welcome to the Medicar project repository!

# Medicar


## About

In this project you will get to know Medicar, a web application for managing medical appointments.


## Goal

The objective was to develop a web application within the proposed requirements.


## Requirements

### Flow in appointment scheduling

The flow for the patient to make an appointment must follow the following steps:
1. The patient chooses the desired specialty for a consultation (eg Dermatologist)
1. With this, we can show all the doctors chosen so that the patient can select
1. Once the desired doctor has been chosen, the days when the doctor is available to carry out an appointment will appear.
1. When selecting a specific day, the available doctor's schedule for a chosen data will appear


## Technologies

### **Techs:**
- [Angular](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [Figma](https://www.figma.com/)


### Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.


## Running

### Installing The Project

1. Clone this repo;

2. Install the npm requirements running the `npm i` script in the project root directory;

3. In the environment file, set the `apiBaseUrl` with the API endpoint;

4. In the project root directory run the `ng serve` for a dev serve;

5. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Scripts

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Project Structure

```md
.
|
└── src
    |
    ├── app
    |   |
    |   ├── apis
    |   |
    |   ├── components
    |   |
    |   ├── models
    |   |
    |   ├── pages
    |   |
    |   ├── services
    |   |
    |   └── utils
    |   
    ├── assets
    |
    └── enviroments
```


## Contributing

Contributions are always welcome! If you have any ideas, suggestions, fixes, feel free to contribute. You can do that by going through the following steps:

1. Clone this repo;
2. Create a branch: `git checkout -b feat/your-module`;
3. Make some changes;
4. Test your changes;
5. Push your branch and open a Pull Request.


## License

[MIT](https://choosealicense.com/licenses/mit/)

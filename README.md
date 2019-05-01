# PwaLotr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Running the application

1. Run `npm install` to download all the project dependencies.
2. In order to get push notifications you have to first run the notifications server, 
navigate to notification-server folder and run `node server.js`.
3. As we are running a PWA the application won't fully work with the `ng serve` command. To do so you will have to:
* Run `ng build --prod` to build the application and generate the dist folder.
* Run `http-server dist/pwa-loter` to run the application.

<!-- ## Debugging -->

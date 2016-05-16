Configuration
===================
**Download** and install NodeJS.
After go in the folder project and type **node server/server.js** to run the server.
Open a browser and type http://localhost:3000/skytest (It automatically redirects in the catalogue page where use can choose the products)

> **Note** the main file of the project are:
> - index.js : is the routing file where you can see the HTML file and the controllers;
> min.html: the container of the application, in which are dynamically injected the HTML part declared in index.js;

>**Folders**
> - controller: where you can find the controllers.
> - .css: here there are reset.css and main.css (in which are custom rule).
> - server: here there is the server node.
> -service: some services used by controllers for create request to server.
> -template: the HTMLs file fragment injected in the main file thanks to ui-router.

>**Test**
>I apologize but I didn't create the test since I had problems with Gulp configuration (I can't link the test task with Jasmine tool in order to automatically run it).
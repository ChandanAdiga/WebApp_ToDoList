# WebApp_ToDoList : Frontend - Angular

This is the frontend application of typical ToDo list web app, based on AngularJS framework. 

Note: Plannig to create another branch based on ReactJS in future.

## Steps:

### 1. Project setup : NodeJS, Angular CLI.
    NodeJS : V14+

    $npm install -g @angular/cli
    $ng new frontend
    $cd frontend
    $ng --version (I have used Angular v13.+)

    Install dependencies:
    $npm install

### 2. RUN:

#### Option-1: Using ng serve:
    $cd frontend
    $npm start
    < Available at http://localhost:4200 >
    
#### Option-2: Using Docker:
    $cd frontend
    $docker build .
    $docker run -p 8080:80 <image>
    < Available at http://localhost:8080 >
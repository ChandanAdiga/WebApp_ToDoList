const express = require("express");
const app = express();

//For now, let's not touch database! Just use in-memory storage..
//Note that scope of the storage depends on server life cycle.
var todo_lists = [
    { name: "Breakfast", time: "08.00 AM" },
    { name: "Lunch", time: "01.00 PM" },
    { name: "Dinner", time: "08.00 PM" }
];

// URL: http://localhost:3000/api/v1/todo-items/
app.get("/api/v1/todo-items/", (req, res) => {
    console.log("Backend: /api/v1/todo-items/ GET");
    res.send(todo_lists);
});

app.post("/api/v1/todo-items/", (req, res) => {
    console.log("Backend: /api/v1/todo-items/ POST");
});

app.delete("/api/v1/todo-items/", (req, res) => {
    console.log("Backend: /api/v1/todo-items/ DELETE");

});


// Rest of the GET requests caught here..
// URL: http://localhost:3000
app.get("/", (req, res) => {
    console.log("Backend: / GET");
    res.send("Hello there! Welcome to ToDo list backend!");
});

app.listen(3000, () => {
    console.log("Backend is up at http://localhost:3000");
});
const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static('public')); // Make everything inside of public/ available

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/view/partials");

app.get("/", (req, res, next) => {
    console.log("this is the homepage");
    // res.send("hello world");
    res.render("index");
});


app.get("/contact", (req, res, next) => {
    console.log("this is the contact page");
    res.render("contact-page");
});


app.get("/pizzas/margherita", (req, res, next) => {

    const data = {
        title: "Pizza Margherita",
        price: 8,
        image: "pizza-margherita.jpeg",
        ingredients: ["mozzarella", "tomato", "basilicum"]

    };
    res.render("pizza-page", data);
});

app.get("/pizzas/carbonara", (req, res, next) => {

    const data = {
        title: "Pizza Carbonara",
        price: 12,
        image: "pizza-carbonara.jpg",
        ingredients: ["mysterious ingredient", "mozzarella", "tomato"]

    };
    res.render("pizza-page", data);
});


app.get("/pizzas/funghi", (req, res, next) => {

    const data = {
        title: "Pizza Funghi",
        price: 10,
        image: "pizza-funghi.webp",
        ingredients: ["funghi", "mozzarella", "tomato", "basilicum"]

    };
    res.render("pizza-page", data);
});





app.listen(3002, () => console.log('My first app listening on port 3002! '));

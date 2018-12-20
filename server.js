const fs = require("fs");

const express = require("express");
const hbs = require("hbs");

const app = express();
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

hbs.registerHelper("currentYear", () => {
    return (new Date()).getFullYear();
});

hbs.registerHelper("toUpper", (text) => {
    return text.toUpperCase();
})

app.use((req, res, next) => {
    res.render("maintenance.hbs")
});

app.get("/", (req, res) => {
    const homePageMessage = "Home page";
    res.render("home.hbs", {
        pageTitle: homePageMessage,
        welcomeMessage: `Welcome to ${homePageMessage}`,
        currentYear: (new Date()).getFullYear()
    });
});

app.get("/about", (req, res) => {
    const aboutPageMessage = "About page";
    res.render("about.hbs", {
        pageTitle: aboutPageMessage,
        welcomeMessage: `Welcome to ${aboutPageMessage}`
    });
});

app.get("/help", (req, res) => {
    const helpPageMessage = "Help page";
    res.render("help.hbs", {
        pageTitle: helpPageMessage,
        welcomeMessage: `Welcome to ${helpPageMessage}`
    });
});

app.listen(process.env.PORT);
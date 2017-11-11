"use strict";

// JSX - javascript XML - javascript synctax extention - provided by 
//Bebel is a javascript compiler es6, es7 --> es5 
// babel src/app.js --out-file=public/script/app.js --presets=env,react --watch

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of computer",
    options: ["One", "Two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
        "p",
        null,
        "\"Here are your options\""
    ) : React.createElement(
        "p",
        null,
        "\"No options\""
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var user = {
    name: "Duy Do",
    age: 20,
    location: "Houston, Texas"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    user.age > 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age,
        " "
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

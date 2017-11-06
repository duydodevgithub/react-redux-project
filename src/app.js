"use strict";

// JSX - javascript XML - javascript synctax extention - provided by 
//Bebel is a javascript compiler es6, es7 --> es5 
// babel src/app.js --out-file=public/script/app.js --presets=env,react --watch

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of computer",
    options: ["One", "Two"]
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>"Here are your options"</p> : <p>"No options"</p>}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: "Duy Do",
    age: 20,
    location: "Houston, Texas"
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        {user.age > 18 && <p>Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
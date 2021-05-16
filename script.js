
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("data-light-mode", "dark");


}

function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("data-light-mode", "light");
    }
    else {
        localStorage.lightMode = "dark";
        app.setAttribute("data-light-mode", "dark");

    }
    console.log("lightMode = " + localStorage.lightMode);
}

document.getElementById('dark-mode-btn').addEventListener('click', function (e) {
    const toggler = document.body;
    toggler.classList.toggle('dark-mode');
    const target = e.target;
    target.classList.toggle('fa-moon');
    target.classList.toggle('fa-sun');
});



// Color Picker

//Select input colors
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
//Get background
var body = document.getElementById("gradient");
var contents = document.getElementById("chat_content");
var image1 = document.getElementById("image1");
var send_btn = document.getElementById("send_btn");
var secret_mode_btn = document.getElementById("secrete_mode_btn");
var messageinp = document.getElementById("messageinp");
var message = document.getElementsByClassName("message");

//Create new function for color pick
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color4.value + ", " + color2.value + ")";

    contents.style.borderImage = "linear-gradient(to bottom, " + "rgba(0, 0, 0, 0)" + ", " + color3.value + ", "+"rgba(0, 0, 0, 0)"+ ")1 100%";

//    var title = document.getElementsByTagName("li");
//     for (var i = 0; i < title.length; i++) {
//         title[i].style.color = color1.value;
//     }
    image1.setAttribute("style",`-webkit-filter: drop-shadow(3px 3px 3px ${color2.value});`);
    messageinp.style.border = `2px solid ${color3.value}`;

    image1.style.color = color3.value;
    send_btn.style.color = color3.value;
    secret_mode_btn.style.color = color3.value;
    

}


//Pick and set Bkground colors 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
color4.addEventListener("input", setGradient);

//Match gradient colors
color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());
color3.addEventListener("input", setGradient());
color4.addEventListener("input", setGradient());

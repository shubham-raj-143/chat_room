const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageinp');
const messageContainer = document.querySelector(".container");  // Whenever I will get messages then we have to put in the container class block created in html
var audio = new Audio('/tone/ring.mp3');

// Secret Chat Mode
// let m = 0;
// function secre(){}
// function myFunction1() {
//     var element = document.body;
//     element.classList.toggle("secret_chat");
// }

// var app = document.getElementsByTagName("BODY")[0];
// if (localStorage.lightMode == "secret") {
//     app.setAttribute("data-normal-mode", "secret");


// }

// function toggle_light_mode() {
//     var app = document.getElementsByTagName("BODY")[0];
//     if (localStorage.lightMode == "secret") {
//         localStorage.lightMode = "normal";
//         m=1;
//         app.setAttribute("data-normal-mode", "normal");
//     }
//     else {
//         m=0;
//         localStorage.lightMode = "secret";
//         app.setAttribute("data-normal-mode", "secret");

//     }
//     alert("lightMode = " + localStorage.lightMode);
// }
// Secret Chat Mode
// document.getElementById("secrete_mode_btn").addEventListener("click", function (e) {
//     const toggler = document.body;
//     toggler.classList.toggle('secret_chat');
//     const target = e.target;

//     target.classList.toggle("fa-user-secret");
//     target.classList.toggle("fa-user-tie");


// });

//         Secret Chat Ends
// Secret Ends

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    //Secrete Message
    if (position == 'left') {

        //Secret Chat Starts

        $(document).ready(function () {

            $("#secrete_mode_btn").hover(function () {
                $(".left").css("color", "black");
                // $(this).css("color", "black");
            },
                function () {
                    $(".left").hide();
                }
            );
            $(".left").hover(function () {
                $(this).css("color", "black");
                // $(this).css("color", "black");
            },
                function () {
                    $(this).hide();
                }
            );
        });


        audio.play();
    }

};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});



const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name); // sends name to the 'new-user-joined' tag socket...which now will perform required task in it.

socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right');

});
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');

});
socket.on('left', name => {
    append(`${name} left the chat`, 'right');
});
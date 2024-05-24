const list =document.querySelectorAll('.list');
function activeLink(){
	list.forEach((item)=>
	item.classList.remove('active'));
	this.classList.add('active');
}
list.forEach((item)=>
	item.addEventListener('mouseover', activeLink));
/*Carrusel*/
function App() {}

document.addEventListener('DOMContentLoaded', function(event) {
    var app = new App();
    window.app = app;

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', app.processingButton.bind(app));
    });
});

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = btn.parentNode;
    const track = carruselList.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');
    
    const carruselWidth = carrusel[0].offsetWidth;
    const listWidth = carruselList.offsetWidth;
    const trackWidth = track.scrollWidth; 

    let leftPosition = track.style.left === "" ? 0 : parseFloat(track.style.left.slice(0, -2)) * -1;

    if (btn.dataset.button === "button-prev") {
        this.prevAction(leftPosition, carruselWidth, track);
    } else {
        this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
};

App.prototype.prevAction = function(leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
};

App.prototype.nextAction = function(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
};

document.addEventListener('DOMContentLoaded', function(event) {
    var app = new App();
    window.app = app;

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', app.processingButton.bind(app));
    });
});

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = btn.parentNode;
    const track = carruselList.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');
    
    const carruselWidth = carrusel[0].offsetWidth;
    const listWidth = carruselList.offsetWidth;
    const trackWidth = track.scrollWidth; 

    let leftPosition = track.style.left === "" ? 0 : parseFloat(track.style.left.slice(0, -2)) * -1;

    if (btn.dataset.button === "button-prev") {
        this.prevAction(leftPosition, carruselWidth, track);
    } else {
        this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
};

App.prototype.prevAction = function(leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
};

App.prototype.nextAction = function(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
};
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
	nameInput.style.maxHeight = "0";
	title.innerHTML = "Login";
	signUp.classList.add("disable");
	signIn.classList.remove("disable");
}
signUp.onclick = function() {
	nameInput.style.maxHeight = "60px";
	title.innerHTML = "Registro";
	signUp.classList.remove("disable");
	signIn.classList.add("disable");
	
}
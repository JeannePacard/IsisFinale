const firstbeer = document.querySelector(".first-beer");
const secondbeer = document.querySelector(".second-beer");
const thirdbeer = document.querySelector(".third-beer");
const popup = document.querySelector(".user-popup");
const userinscription = document.querySelector(".user-inscription");
const userconnection = document.querySelector(".user-connection");
const connectionbutton = document.querySelector(".connection-button");
const inscriptionbutton = document.querySelector(".inscription-button");

function init() {
  firstbeer.style.display = "block";
  secondbeer.style.display = "none";
  thirdbeer.style.display = "none";
  popup.style.display = "none";
}

function first() {
  if (firstbeer.style.display == "none") {
    firstbeer.style.display = "block";
    secondbeer.style.display = "none";
    thirdbeer.style.display = "none";
  }
}

function second() {
  if (secondbeer.style.display == "none") {
    firstbeer.style.display = "none";
    secondbeer.style.display = "block";
    thirdbeer.style.display = "none";
  }
}

function third() {
  if (thirdbeer.style.display == "none") {
    firstbeer.style.display = "none";
    secondbeer.style.display = "none";
    thirdbeer.style.display = "block";
  }
}

function openconnection() {
  if (popup.style.display == "none") {
    popup.style.display = "block";
    userinscription.style.display = "none";
    connectionbutton.style.display = "none";
    message.style.display = "none";
  } else {
    popup.style.display = "none";
  }
}

function connection() {
  if (userconnection.style.display == "none") {
    userconnection.style.display = "block";
    userinscription.style.display = "none";
    inscriptionbutton.style.display = "block";
    connectionbutton.style.display = "none";
    message.style.display = "none";
  }
}

function inscription() {
  if (userinscription.style.display == "none") {
    userinscription.style.display = "block";
    userconnection.style.display = "none";
    inscriptionbutton.style.display = "none";
    connectionbutton.style.display = "block";
    message.style.display = "none";
  }
}

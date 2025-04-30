'use strict';

// Jeg henter elementer fra DOM
const btns = document.querySelectorAll('.btn');
const text = document.querySelector('#text');
const what = document.querySelector('#what');
const messageImg = document.querySelector('#text-group img');


// Denne funktion udføres, når de enkelte knapper klikkes
function nextScenario(e) {
    if (e.target.id === "btn1") {
        console.log("btn1");
    } else if (e.target.id === "btn2") {
        console.log("btn2");
    } else {
        console.log("btn3");
    };
};


// Giver kommando for når knapperne klikkes
btns.forEach(btn => {
    btn.addEventListener('click', nextScenario);
});
'use strict';

// Jeg henter elementer fra DOM
const btns = document.querySelectorAll('.btn');
const s1 = document.querySelector('#s1');
const s1p1 = document.querySelector('#s1-1');
const s1p2 = document.querySelector('#s1-2');
const s1p3 = document.querySelector('#s1-3');
const s2 = document.querySelector('#s2');
const s2p1 = document.querySelector('#s2-1');
const text = document.querySelector('.text-group p');
const what = document.querySelector('.what');
const messageImg = document.querySelector('.text-group img');

function funcS2 (e) {
    if (e.target == btns[8]) {
        console.log('s2-btn1');
    } else if (e.target == btns[9]) {
        console.log('s2-btn2');
    } else if (e.target == btns[10]) {
        console.log('s2-btn3')
    };
};

function funcS1p1 (e) {
    if(e.target == btns[3]) {
        s2.classList.remove('hidden');
        s1p1.classList.add('hidden');
        console.log('s1p1-btn1');
        btns.forEach(btn => {
            btn.addEventListener('click', funcS2);
        });
    };
};

function funcS1(e) {
    if (e.target == btns[0]) {
        console.log('s1-btn1');
        s1.style.display = 'none';
        s1p1.classList.remove('hidden');

        btns.forEach(btn => {
            btn.addEventListener('click', funcS1p1);
        });

    } else if (e.target == btns[1]) {
        console.log('s1-btn2');
        s1.style.display = 'none';
        s1p2.classList.remove('hidden');
    } else if (e.target == btns[2]) {
        console.log('s1-btn3');
        s1.style.display = 'none';
        s1p3.classList.remove('hidden');
    };
};

btns.forEach(btn => {
    btn.addEventListener('click', funcS1);
});

// Denne funktion udføres, når de enkelte knapper klikkes
/*
function nextScenario(e) {
    if (e.target.id === 'btn1') {
        console.log('btn1');
    } else if (e.target.id === 'btn2') {
        console.log('btn2');
    } else {
        console.log('btn3');
    };
};
*/


// Giver kommando for når knapperne klikkes

'use strict';

// Jeg henter elementer fra DOM
const s1btns = document.querySelectorAll('.s1-btn');
const s2btns = document.querySelectorAll('.s2-btn');

const ebtns = document.querySelectorAll('.e-btn');

const s1 = document.querySelector('#s1');
const s1p1 = document.querySelector('#s1-1');
const s1p2 = document.querySelector('#s1-2');
const s1p3 = document.querySelector('#s1-3');
const s1p3p1 = document.querySelector('#s1-3-1')
const s2 = document.querySelector('#s2');
const s2p1 = document.querySelector('#s2-1');

const yellowEnding1 = document.querySelector('#yellow-ending-1');

const text = document.querySelector('.text-group p');
const what = document.querySelector('.what');
const messageImg = document.querySelector('.text-group img');

let linkClick = 0;
let ignoreClick = 0;


// GUL SLUTNING 1 -------------------------
function funcYE1 (e) {
    if (e.target) {
        location.reload();
    };
};

// De 3 udfald af 2. scenarie ---------------------------------
function funcS2p3 () {
    console.log('');
};

function funcS2p2 () {
    console.log('');
};

function funcS2p1 (e) {
    if (e.target == s2btns[3]) {
        console.log('Du har opnået en gul slutning')
        yellowEnding1.classList.remove('hidden');
        s2p1.classList.add('hidden');

        ebtns.forEach(btn => {
            btn.addEventListener('click', funcYE1);
        });
    };
};


// Funktion for 2. scenarie ----------------------------------
function funcS2 (e) {
    if (e.target == s2btns[0]) {
        console.log('1. udfald af 2. scenarie');
        s2.classList.add('hidden');
        s2p1.classList.remove('hidden');

        s2btns.forEach(btn => {
            btn.addEventListener('click', funcS2p1);
        });
    } else if (e.target == s2btns[1]) {
        console.log('2. udfald af 2. scenarie');
    } else if (e.target == s2btns[2]) {
        console.log('3. udfald af 2. scenarie')
    };
};

// De 3 udfald af første scenarie ------------------------------
function funcS1p3p1 () {
    console.log('DET VIRKER!')
}

function funcS1p3 (e) {
    if (e.target == s1btns[5]) {
        console.log('Jeg går tilbage til beskeden');
        s1p3.classList.add('hidden');
        s1.classList.remove('hidden');
        s1btns[1].style.display = 'none';
        s1btns[2].style.display = 'none';

        s1btns.forEach(btn => {
            btn.addEventListener('click', funcS1);
        });
    } else if (e.target == s1btns[6]) {
        console.log('DUMMY!!!')
    }
};

function funcS1p2 (e) {
    if (e.target == s1btns[4]) {
        console.log('Jeg går tilbage til beskeden');
        s1p2.classList.add('hidden');
        s1.classList.remove('hidden');
        s1btns[1].style.display = 'none';

        s1btns.forEach(btn => {
            btn.addEventListener('click', funcS1);
        });
    };
};

function funcS1p1 (e) {
    if(e.target == s1btns[3]) {
        s2.classList.remove('hidden');
        s1p1.classList.add('hidden');
        console.log('Fortsætter til 2. scenarie');

        s2btns.forEach(btn => {
            btn.addEventListener('click', funcS2);
        });
    };
};


// funktion til 1. scenarie ----------------------------
function funcS1(e) {

    if (e.target == s1btns[0] && linkClick >= 1) {
        s1p3p1.classList.remove('hidden');
        s1.classList.add('hidden');

        s1btns.forEach(btn => {
            btn.addEventListener('click', funcS1p3p1);
        });
    }

    // knap fører til 1. udfald
    else if (e.target == s1btns[0]) {
        console.log('1. udfald af 1. scenarie');
        s1.classList.add('hidden');
        s1p1.classList.remove('hidden');
        ignoreClick++;
        console.log(ignoreClick);

        s1btns.forEach(btn => {
            btn.addEventListener('click', funcS1p1);
        });
    }
    
    // knap fører til 2. udfald
    else if (e.target == s1btns[1]) {
        console.log('2. udfald af 1. scenarie');
        s1.classList.add('hidden');
        s1p2.classList.remove('hidden');

        s1btns.forEach(btn => {
            btn.addEventListener('click', funcS1p2);
        });
    } 
    
    //knap fører til 3. udfald
    else if (e.target == s1btns[2]) {
        console.log('3. udfald af 1. scenarie');
        s1.classList.add('hidden');
        s1p3.classList.remove('hidden');
        linkClick++;

        s1btns.forEach(btn => {
            btn.addEventListener('click', funcS1p3);
        });
    };
};

// Når en knap klikkes, kaldes på funcS1
s1btns.forEach(btn => {
    btn.addEventListener('click', funcS1);
});
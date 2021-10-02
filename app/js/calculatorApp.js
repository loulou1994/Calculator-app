const modeBkg = document.querySelectorAll('.btn-mode .mode');
const toggler = document.querySelector('.btn-mode .toggler');
const lastMode = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// check for a saved background mode
window.addEventListener('DOMContentLoaded', loadSaveMode);

// toggler function for different background modes
modeBkg.forEach(function(mode){
    mode.addEventListener('click', swtichMode);
});

function swtichMode(e){
    e.preventDefault();
    const newMode = this.classList[1] ? this.classList[1] : '';
    const oldMode = toggler.classList[1];

    if(oldMode){
        if(newMode && newMode.includes('two')){
            toggler.classList.remove(oldMode);
            toggler.classList.add(newMode);
            document.documentElement.setAttribute('data-theme', 'mode2');
            localStorage.setItem('theme', 'mode2');

        }else if(newMode && newMode.includes('three')){
            toggler.classList.remove(oldMode);
            toggler.classList.add(newMode);
            document.documentElement.setAttribute('data-theme', 'mode3');
            localStorage.setItem('theme', 'mode3');

        }else{
            toggler.classList.remove(oldMode);
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        }

    }else if(newMode && newMode.includes('two')){
        toggler.classList.add(newMode);
        document.documentElement.setAttribute('data-theme', 'mode2');
        localStorage.setItem('theme', 'mode2');

    }else if(newMode && newMode.includes('three')){
        toggler.classList.add(newMode);
        document.documentElement.setAttribute('data-theme', 'mode3');
        localStorage.setItem('theme', 'mode3');
    }
}

function loadSaveMode(){
    if(lastMode && lastMode.includes('mode2')){
        document.documentElement.setAttribute('data-theme', lastMode);
        toggler.classList.add('mode-two');

    }else if(lastMode && lastMode.includes('mode3')){
        document.documentElement.setAttribute('data-theme', lastMode);
        toggler.classList.add('mode-three');
    }
}

// calculation operations
const displayScreen = document.querySelector('.screen__result');
const delBtn = document.querySelector('.del-key');
const restbtn = document.querySelector('.reset-btn');
const equalBtn = document.querySelector('.equal-btn');
const keys = document.querySelectorAll('.keys');

let clickedResu = false;

delBtn.addEventListener('click', function(){
    const displayedNum = displayScreen.innerHTML.length - 1;
    displayScreen.innerHTML = displayScreen.innerHTML.slice(0, displayedNum);
});

restbtn.addEventListener('click', function(){
    displayScreen.textContent = '';
});

keys.forEach(function(key){
    key.addEventListener('click', function(){
        if(clickedResu){
            displayScreen.textContent = '';
            displayScreen.textContent = this.textContent;
            clickedResu = false;
        }else{
            displayScreen.textContent = displayScreen.textContent + this.textContent;
        }
    });
});

equalBtn.addEventListener('click', function(){
    if(displayScreen.textContent){
        displayScreen.textContent = displayScreen.textContent.replace('x', '*')
        displayScreen.textContent = eval(displayScreen.textContent);
        clickedResu = true;
    }
});
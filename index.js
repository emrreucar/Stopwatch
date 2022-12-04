
//! Global Variables
const time_el = document.querySelector('.watch .time');
const saveDiv = document.querySelector('.saveDiv');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');
const save_btn = document.getElementById('kaydet');


let seconds = 0;
let interval = null;

//! Event Listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);
save_btn.addEventListener('click', save);



//! Update the timer
function timer(){
    seconds++;

    //* Format Our Time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
};


//! Start
function start(){
    if(interval){
        return;
    }

    interval = setInterval(timer, 1000)
}


//! Stop
function stop(){
    clearInterval(interval);
    interval = null;
}


//! Reset
function reset(){
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
    saveDiv.innerText = '00:00:00';
}


//! Save
function save(){


    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;


    saveDiv.innerText = `${hrs}:${mins}:${secs}`;
}

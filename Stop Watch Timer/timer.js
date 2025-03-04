const currentTime = document.querySelector(".para");

const buttonParent = document.querySelector(".btn-container");

const displayAtTime = document.querySelector(".timeOut");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerID;

function displayTime(){
    currentTime.innerText = `${hours<10 ? `0${hours}`:hours} : ${minutes<10 ? `0${minutes}`: minutes} : ${seconds < 10 ? `0${seconds}`:seconds}`;
       
}

buttonParent.addEventListener("click" , (event)=>{
    const button = event.target.name;
   
    if(button ==="start"){
        displayAtTime.innerText = "Timer Started";
        displayAtTime.classList.add("green");
        displayAtTime.classList.remove("yellow");
        displayAtTime.classList.remove("red");
        timerID = setInterval(()=>{
        seconds++;
        if(seconds>59){
            seconds = 0;
            minutes++;
            if(minutes>59){
                minutes = 0;
                hours++;
            }
        }
        displayTime();
        

        },1000);
    }
    if(button==="stop"){
        clearInterval(timerID);
        displayAtTime.innerText = `Timer Stoped at ${currentTime.textContent}`;
        displayAtTime.classList.add("yellow");
        displayAtTime.classList.remove("red");

    }
    if(button === "reset"){
        clearInterval(timerID);
        
        displayAtTime.innerText = `Last Timer duration is ${currentTime.textContent}`;
        displayAtTime.classList.add("red");
        displayAtTime.classList.remove("yellow");
        displayAtTime.classList.remove("green");


        currentTime.innerText = "00 : 00 : 00";
        seconds = 0;
        minutes = 0;
        hours = 0;

    }
});

myButton =[
    {
      title:'Start',
      logo:'<i class="fa fa-light fa-play"></i> '
    },
    {
        title:'Stop',
        logo:'<i class="fa fa-stop"></i>'
    },
    {
        title:'Reset',
        logo:'<i class="fa fa-repeat"></i>'
    } 
]
time= [{val:'00',time:'hours'}
,{val:'00',time:'min'}
,{val:'00',time:'sec'}
]
let timersecond =0;
let Timer;    
function getButton(){
     btnContent = document.getElementById('btnContent');
     btnContent.innerHTML = myButton.map((elem)=>
     `<div id="btn">
     <div class='logo'>${elem.logo}</div>
     <div class='btnItem'><button id="${elem.title}" >${elem.title}</button></div> 
     </div>`).join('');
     console.log('timer hlo')
}
getButton();

start = document.getElementById('Start').addEventListener('click',setTimer);
stop = document.getElementById('Stop').addEventListener('click',stopTimer);
reset = document.getElementById('Reset').addEventListener('click',restartTimer);
function getScreen(){
    screenContent = document.getElementById('screenContent');
    screenContent.innerHTML= time.map((elem)=>
    `<div class = 'timedisplay'>
    <div class='timeVal' id='${elem.time}'>${elem.val}
    </div>
    <div><h5>${elem.time}</h5></div>
    </div>
    `).join('');
}
getScreen();

function formatTime(value){
  return value<10? value = "0"+value:value;
}
function setTimer(){
    let secScreen = document.getElementById('sec');
    let minScreen = document.getElementById('min');
    let hoursScreen = document.getElementById('hours');
    if(Timer)return;
    Timer = setInterval(()=>{
        timersecond++;
        hoursScreen.innerHTML= formatTime(Math.floor(timersecond/3600));
        minScreen.innerHTML=formatTime(Math.floor((timersecond%3600)/60));
        secScreen.innerHTML=formatTime(timersecond%60);
   },1000)
}

function stopTimer(){
    clearInterval(Timer);
    Timer=null;
    console.log('stop clicked');
}
function restartTimer(){
    timersecond=0;
    stopTimer();
}
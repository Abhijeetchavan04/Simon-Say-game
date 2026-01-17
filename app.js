let gameseq =[];
let userseq =[];

let h2 = document.querySelector('h2');

let started = false;

let level = 0;

let btns = ['red','yello','green','purple'];

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game started");
        started = true;
    }

    levelup()
})

function btnFlash(btn){
    btn.classList.add('flash')
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 250);
}




function levelup(){
    userseq = [];
    level++;
    h2.innerText =`Level ${level}`;
    let randIDX = Math.floor(Math.random() *3);
    let randcolor = btns[randIDX];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq)
    btnFlash(randbtn);

}

function checkAns(idx){
    

    if(userseq[idx] === gameseq[idx]){
      if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
      }  
    }else{
        h2.innerHTML =`Game Over! your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        }, 150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    
    userColor = btn.getAttribute('id');
    console.log(userColor)
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener('click',btnPress);

}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0
;}

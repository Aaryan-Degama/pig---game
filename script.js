'use strict';


let num =[]
let curscore = 0
let size = 0
const ply1 = ["#current--0","#score--0",0]
const ply2 = ["#current--1","#score--1",0]
let ply = 0
let w = 0



const p1 = document.querySelector(".player--0")
const p2 = document.querySelector(".player--1")
const diceroll = document.querySelector(".dice")


const roll = function () {
    if (!w){
    if (ply == 0 ){
        plyer_roll(ply1)
        
    }else{
        plyer_roll(ply2)
        
    }}
}

let  img = ""

function plyer_roll(play){
    size = num.length
    if (!size) {
        hold() 
        roll()
        return
    }
    
    diceroll.src = `dice-${num[0]}.png`
    curscore += num[0]
    document.querySelector(play[0]).textContent = curscore
    
    num.shift()

}



const hold = function(){
    
    if (ply == 0 ){
        
    plyer_hold(ply1)
    
    p1.classList.remove("player--active")
    p2.classList.add("player--active")
    ply = 1
    winner(ply1)
}else{
    
    plyer_hold(ply2)
    
    p2.classList.remove("player--active")
    p1.classList.add("player--active")
    ply = 0
    winner(ply2)
}
randice()
}




function plyer_hold(play){
    if (size){
        play[2] += curscore
        
        document.querySelector(play[1]).textContent = play[2]
    }
    curscore = 0
    document.querySelector(play[0]).textContent = curscore
    num = []
    
}

function winner(play) {
    if(play[2]>=100 && ply==0){
        p2.classList.add("player--winner")
        p2.classList.remove("player--active")
        p1.classList.remove("player--active")
        w=1
        
    } else if(play[2]>=100 && ply == 1 ){
        p1.classList.add("player--winner")
        p1.classList.remove("player--active")
        p2.classList.remove("player--active")
        w=1

    }   
   
}

const newgm = function () {
    

    p2.classList.remove("player--active")
    p1.classList.add("player--active")
    ply = 0
    console.log(ply);
    document.querySelector("#score--0").textContent = 0
    document.querySelector("#score--1").textContent = 0
    p1.classList.remove("player--winner")
    p2.classList.remove("player--winner")
    w = 0
    ply1[2] = 0
    ply2[2] = 0

}


function randice (){
    let chance = Math.trunc(Math.random()*6)
    console.log(chance,"chances");
    let dice=0

    for (let i = 0; i !== chance; i++ ){
        dice = Math.trunc(Math.random()*6)+1
        num.push(dice)
        console.log(dice);}
        console.log(num);

}

randice()


document.querySelector(".btn--roll").addEventListener("click",roll)
document.querySelector(".btn--hold").addEventListener("click", hold)
document.querySelector(".btn--new").addEventListener("click",newgm)





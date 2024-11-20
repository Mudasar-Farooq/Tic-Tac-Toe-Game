

let boxes=document.querySelectorAll(".box");
let win=document.querySelector(".winner");
let reset=document.querySelector(".reset");
let nw=document.querySelector(".new");


let valid=[ [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
];
let turn=true;

// to reset the game

reset.addEventListener("click",()=>{
    enable();
})
nw.addEventListener("click",()=>{
    enable();   
})

// to enable the boxes
function enable(){
    boxes.forEach(box => {
        box.disabled=false;
        box.innerText="";
    });
    win.classList.add("dis");
}
// to disable when the game ends
function disable(){
    boxes.forEach(box => {
        box.disabled=true;
    });
}

// if the game draws
function draw(){
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].innerText==""){
            return false;}
    }
    return true;
}
// to check the winner
function check(){
    for(let i=0;i<valid.length;i++){
        let a1=boxes[valid[i][0]].innerText;
        let a2=boxes[valid[i][1]].innerText;
        let a3=boxes[valid[i][2]].innerText;
        console.log(a1,a2,a3);
        if(a1!="" && a2!="" && a3!=""){
            if(a1===a2 && a2===a3){
                win.classList.remove("dis");
                win.innerText="Congragulations "+a1+" Win";
                disable();
            }
        }
    }

    if(draw()){
        win.classList.remove("dis");
        win.innerText="OOPs Game Draws!";
        setTimeout(()=>{enable();},3000);
    }
}

// to run the game
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",()=>{
        boxes[i].innerText="Clicked";
        if(turn){
            boxes[i].innerText="O";
            boxes[i].style.color="Green";
            turn=false;
        }
        else{
            boxes[i].innerText="X";
            boxes[i].style.color="red";
            turn=true;
        }
        boxes[i].disabled=true;
        check();
    })
    
}
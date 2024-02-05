let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-game-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

const winningPattern=[
    [0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(count===0){
            box.innerText="X";
            box.style.color="green";
            count=1;
        }
        else{
            box.innerText="O";
            box.style.color="red";
            count=0;
        }
        box.disabled=true;
        cheakWinner();
    });
});

const resetgame=()=>{
    count=0;
    enablebox();
    msgContainer.classList.add("hide");
}

let disablebox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

let enablebox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
    
}

let cheakWinner = ()=>{
    for(let pattern of winningPattern){
       let posVal1= boxes[pattern[0]].innerText;
       let posVal2= boxes[pattern[1]].innerText;
       let posVal3= boxes[pattern[2]].innerText;
    
    if(posVal1!="" && posVal2!="" && posVal3!=""){
        if(posVal1===posVal2 && posVal2===posVal3){
            showWinner(posVal1);
        };
    };
};
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
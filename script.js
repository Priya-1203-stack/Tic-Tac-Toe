let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true ;//playerX,player0

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{ // o , x set krne k liye
    box.addEventListener("click",()=>{  // here box is used for individual box
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
           box.innerText="X";
           turnO=true; 
        }
        box.disabled=true;

        checkwinner();
        
    });
});

const disableboxes =()=>{
    for(let box of boxes){  // once winner is declared then koi btn kaam ni krega
        box.disabled =true;
    }
}



const enableboxes =()=>{
    for(let box of boxes){  // jab new game shuru ho to sb boxes enable ho jaye
        box.disabled =false;
        box.innerText= "";
    }
}

const showwinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide"); // winner ko msg me show krne k liye
    disableboxes();
}

const showDraw = () => {
    msg.innerText = `It's a Draw!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = ()=>{
    for(let pattern of winpatterns){
        // winner check krne k liye 
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
                return;
            }    
        }
    }
    
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });
    if (isDraw) {
        showDraw();
    }
};
    



const resetgame = ()=>{
    turnO= true;
    enableboxes();
    msgcontainer.classList.add("hide");

}


newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



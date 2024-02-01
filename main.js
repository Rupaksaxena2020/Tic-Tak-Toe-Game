let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg");
let mssge = document.querySelector("#message");

let turno = true;
let count = 0;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText = "O";
            turno = false;
        }
        else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if (count == 9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw = () =>
{
   mssge.innerText = "Game was Draw";
   msgcontainer.classList.remove("hide");
   disableboxes();
};

const disableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableboxes = ()=>{
    for (let box of boxes)
    {
        box.disabled = false;
        box.innerText = " ";
    }
};


const showwinner =(winner)=>{
    mssge.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for(let pattern of winpattern)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val==pos2val && pos2val==pos3val)
            {
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};

const resetgame = () =>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


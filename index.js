let btnoption = document.querySelectorAll(".btnoption");
let popup = document.querySelector(".popup");
let newgamebtn = document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msg = document.getElementById("msg");

//Winning Pattern Array
let winningpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// Player X turn
let xTurn = true;
let count = 0;

const disableButtons = () =>{
    btnoption.forEach((element) => (element.disabled = true));
    popup.classList.remove("hide");
}
//when new game/restart btn clicked enable all buttons
const enableButtons = () => {
    btnoption.forEach((element) =>{
    element.innerText= "";
    element.disabled = false;
})
    popup.classList.add("hide");
}

//New Game 
newgamebtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})

//Restart Game 
restartbtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})
 
//when a player win this function is executed
const winFunction = (letter) => {
    disableButtons();
    }

 
//how win work(logic)
const winChecker = () =>{
    for (let i of winningpattern){
        let [element1,element2,element3] = [
            btnoption[i[0]].innerText,
            btnoption[i[1]].innerText,
            btnoption[i[2]].innerText
        ];
        if(element1 != "" && (element2 != "") & (element3 != "")){
            if(element1 == element2 && element2 == element3){
                winFunction(element1);
            }
        }
    }

}

//Display X/O on when the button is clicked
btnoption.forEach((element) => {
    element.addEventListener("click",()=> {
        if(xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        //increment count(To determine if it is a Draw)
        count += 1; 
        if(count == 9){


        }
        //check for win on each and every click 
        winChecker();

    });
})
let btns = document.querySelectorAll('.griditem');
let term = document.getElementById("term");
let reset = document.getElementById("reset");
let currTerm = "X";
let msg = document.getElementById('msg')
term.innerHTML = currTerm;


let gover = new Audio("gameover.mp3")
let audioTurn = new Audio("ting.mp3")


btns.forEach((btn)=>{
    btn.innerHTML = ""
    btn.addEventListener('click', (e)=>{
        audioTurn.play()
        e.currentTarget.innerHTML = currTerm;
        checkWin();
        if(currTerm == "X"){
            currTerm = "O";
        }
        else if(currTerm == "O"){
            currTerm = "X";
        }
        
    })
})

let checkWin = ()=>{
    let b0 = btns[0].innerText;
    let b1 = btns[1].innerText;
    let b2 = btns[2].innerText;
    let b3 = btns[3].innerText;
    let b4 = btns[4].innerText;
    let b5 = btns[5].innerText;
    let b6 = btns[6].innerText;
    let b7 = btns[7].innerText;
    let b8 = btns[8].innerText;

    //checks the rows
    if((b0 == b1 && b1 == b2 && b1!="") || (b3 == b4 && b4 == b5 && b3!="") || (b6 == b7 && b7 == b8 && b6!="") ){
        msg.innerText = `Player: ${currTerm} Won The Game (reset to continue)`
    }
    //checks the colums
    else if((b0 == b3 && b3 == b6 && b0 !="") || (b1 == b4 && b4 == b7 && b1 !="") || (b2 == b5 && b5 == b8 && b2 !="") ){
        msg.innerText = `Player: ${currTerm} Won The Game (reset to continue)`
    }
    else if((b0 == b4 && b4 == b8 && b0!="") || (b2 == b4 && b4 == b6 && b2!="")){
        msg.innerText = `Player: ${currTerm} Won The Game (reset to continue)`
    }
}

reset.onclick = ()=>{
    btns.forEach((btn)=>{
        btn.innerHTML = ""; 
    })
    gover.play();

    msg.innerHTML = `<span id="term"> ${currTerm}'s Term</span>`;
}


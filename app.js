let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const uScore=document.querySelector("#user-score")
const cScore=document.querySelector("#comp-score")



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        //selecting user choice
      const userChoice = choice.getAttribute("id");
      
      playGame(userChoice);
    });
});
//generate computer choice
const genCompChoice=()=>{
    let choiceArr=["Rock","Paper","Scissors"]
    let randomIdx=Math.floor(Math.random()*3);
    
    return choiceArr[randomIdx];
}
//lost function
const lost=(userChoice,compChoice)=>{
    msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        cScore.innerText=`${compScore}`
        

}
//win function
const win=(userChoice,compChoice)=>{
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        userScore++;
        uScore.innerText=`${userScore}`

}
const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    //draw game condition
    if(userChoice===compChoice){
        
        msg.innerText="Game was Draw. Play again."
        msg.style.backgroundColor = "#081b31";
        
    }
    else if(userChoice==="Rock"&&compChoice==="Paper"){

        lost(userChoice,compChoice);


    }
    else if(userChoice==="Rock"&&compChoice==="Scissors"){
        
        win(userChoice,compChoice);
       
    }
    else if(userChoice==="Paper"&&compChoice==="Rock"){
       
        win(userChoice,compChoice);

    }
    else if(userChoice==="Paper"&&compChoice==="Scissors"){
        
        lost(userChoice,compChoice)

    }
    else if(userChoice==="Scissors"&&compChoice==="Rock"){

        lost(userChoice,compChoice)
    }
    else if(userChoice==="Scissors"&&compChoice==="Paper"){

        win(userChoice,compChoice);

    }
    
}

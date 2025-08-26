let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#com-score");
const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawGame=()=>{
    
    msg.innerText="Game was draw.play again";
            msg.style.backgroundColor="#081b31";
    
};
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
    
        msg.innerText=`You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        comscore++;
        compScorePara.innerText=comscore;
         
         msg.innerText=`You lose. ${compChoice} beats your ${userchoice}`;
         msg.style.backgroundColor="red";
    

    }
};
const playGame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const compChoice=genComputerChoice();
    console.log("comp choice=",compChoice);
    if(userchoice === compChoice){
 drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin = compChoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userWin= compChoice==="scissor"?false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
            }
        
        
    showWinner(userWin,userchoice,compChoice);
        }
};
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);

    });
});
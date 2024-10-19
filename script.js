let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const showwinner=(userwin)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you Win")
        msg.innerText="you Winnn"
        msg.style.backgroundColor="green"
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("comp Winss")
        msg.innerText="you Lost"
                msg.style.backgroundColor="red"
    }
}

const compchoice=()=>
{
    options=["rock","paper","scissor"]
    let ranidx=Math.floor(Math.random(options)*3)
    return options[ranidx]
}
const playgame=(userchoice)=>
{
    console.log("user choice",userchoice)
    let compopt=compchoice();
    console.log("computer choice",compopt)
    if (userchoice ===compopt)
    {
        console.log("it is a drawwww")
        msg.innerText="it is a draw"
        msg.style.backgroundColor="orange"
    }
    else{
        userwin = true
        if(userchoice==="rock")
        {
            userwin=compopt === "paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin= compopt ==="scissor"?false:true;
        }
        else
        {
            userwin= compopt==="rock"?false:true;
        }
        showwinner(userwin);
    }
}
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
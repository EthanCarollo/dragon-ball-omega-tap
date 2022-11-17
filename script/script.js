"use strict"

// TODO DIV SECTION***************************

const divMenu = document.getElementById("menuMain");
const divSelection = document.getElementById("panelPerso");
const divGame = document.getElementById("gameTable");

//! MAIN MENU*********************************
//! MAIN MENU*********************************
//! MAIN MENU*********************************

const fightButton = document.getElementById("fightButton");
const underFightButton = document.querySelectorAll(".underFightButton");

const rollFightMenu = () => {
    underFightButton[0].classList.toggle("exist");
    underFightButton[1].classList.toggle("exist");
}

const startChoosePerso = () => {
    divMenu.style.display = "none";
    divSelection.style.display = "initial"
}

fightButton.addEventListener("click", rollFightMenu);
document.getElementById("agIA").addEventListener("click", startChoosePerso);
document.getElementById("agPvP").addEventListener("click", startChoosePerso);


//! MAIN MENU*********************************
//! MAIN MENU*********************************
//! MAIN MENU*********************************

//*SELECT PERSO*********************************
//*SELECT PERSO*********************************
//*SELECT PERSO*********************************

let tabPersoDOM = document.getElementById("choosePerso");
let tabPerso = [
    {
        name: "Gogeta",
        ID: 0,
        version: []
    },
    {
        name: "VegitoSSJ",
        ID: 1,
        version: []
    },
    {
        name: "GokuSSJ3",
        ID: 2,
        version: []
    },
    {
        name: "GoldenFrieza",
        ID: 3,
        version: []
    },
    {
        name: "BlackGoku",
        ID: 4,
        version: []
    },
    {
        name: "Buu",
        ID: 5,
        version: ["Buutenks"]
    }
];
let tabPersoDiv = [];
let player1perso = null;
let player2perso = null;
let numberClickP1 = 0;
let numberClickP2 = 0;
let player1DOM = document.getElementById("selectedPlayer1");
let player2DOM = document.getElementById("selectedPlayer2");
let p1DOM = document.getElementById("P1");
let p2DOM = document.getElementById("P2");
let auraP1 = document.getElementById("auraP1");
let auraP2 = document.getElementById("auraP2");
let auraP1starting = document.getElementById("auraP1Starting");
let auraP2starting = document.getElementById("auraP2Starting");
let portgame1DOM = document.getElementById("port1");
let portgame2DOM = document.getElementById("port2");
let buttonStart = document.getElementById("buttonStart");
let txtStarting = document.getElementById("txtStart");


const createTablePerso = () => {

    //Boucle sur l'array d'objet des personnages pour créer le visuel de choix des personnages

    for(let i = 0;   i<tabPerso.length;   i++){

        //Manipulation du DOM

        let perso = tabPersoDOM.appendChild(document.createElement("div"));
        perso.classList.add("perso");
        if(tabPerso[i].version.length > 0){
            perso.classList.toggle(tabPerso[i].version[0]);
        }else{
            perso.classList.toggle(tabPerso[i].name);
        }

        //Ajoute la fonction qui a pour argument l'ID du personnage pour le selectionner au click

        perso.addEventListener("click", () =>
        {
            selectPlayer(i);
        })

        //Ajout de l'object qui contient le personage et l'ID dans le tableau des div des persos

        let object = { 
            object: perso,
            ID: i
        }
        tabPersoDiv.push(object);

    }

}

const selectPlayer = (ID) => {
    if(player1perso === null){
        if(tabPerso[ID].version.length > 0){
            console.log(ID);
            player1perso = tabPerso[ID].version[0];
            player1DOM.classList.toggle(player1perso);
        }else{
            console.log(ID);
            player1perso = tabPerso[ID].name;
            player1DOM.classList.toggle(tabPerso[ID].name);
        }
    }else if(player2perso===null){
        if(tabPerso[ID].version.length > 0){
            console.log(ID);
            player2perso = tabPerso[ID].version[0];
            player1DOM.classList.toggle(player2perso);
        }else{
            console.log(ID);
            player2perso = tabPerso[ID].name;
            player2DOM.classList.toggle(tabPerso[ID].name);
        }

    }
}

let startCount = 3;

const startGame = () => {
    startCount = 3;
    console.log("gameStart");
    startingCount();
    setVisual();
    divSelection.style.display = "none";
    divGame.style.display = "initial";
    numberClickP1 = 0;
    numberClickP2 = 0;
    setCase();
}

const startingCount = () => {
    txtStarting.innerHTML = startCount;
    document.getElementById("kameha").style.display = "none";
    setTimeout(() => {
        if(startCount === 1){
            txtStarting.innerHTML = "LETS FIGHT !"
            document.getElementById("kameha").style.display = "initial";
            gameStarted = true;
            canClick = true;
            callbackFunctionDelay();
            setWidthKameha();
        }else{
            startCount--;
            let txtTemp = startCount;
            txtStarting.innerHTML = startCount;
            document.getElementById("kameha").style.display = "none";
            startingCount();
        }
    }, 1000)
}

const returnMainMenu = () => {
    divSelection.style.display = "none";
    divMenu.style.display = "initial";
}

createTablePerso();

buttonStart.addEventListener("click", () =>
{
    if(player1perso !== null && player2perso !== null){
        startGame();    
    }
})

document.getElementById("returnMain").addEventListener("click", () =>
{
    returnMainMenu();
})

//*SELECT PERSO*********************************
//*SELECT PERSO*********************************
//*SELECT PERSO*********************************

//?GAME*********************************
//?GAME*********************************
//?GAME*********************************

let kamehaPlayer1 = document.getElementById("kamehaP1");
let kamehaPlayer2 = document.getElementById("kamehaP2");
let normalKamehaWidth = 43.75;
let player1KamehaWidth = normalKamehaWidth;
let player2KamehaWidth = normalKamehaWidth;
let maxClick = 50;
let gameStarted = true;
let canClick = false;
let TimeOutClickP1 = 2;
let TimeOutClickP2 = 2;
let whoWin;

document.addEventListener('keyup', (e) => {
    console.log("key e");
    if(gameStarted === true && canClick === true){
        if(e.code === "KeyQ"){
            addPlayer1Click();
            console.log(player2KamehaWidth);
        }
        if(e.code === "KeyE"){
            addPlayer2Click();
        }
    }
});

const callbackFunctionDelay = () => {
    setTimeout(() => {
        if(numberClickP1 >= 0 && numberClickP2 >= 0 && gameStarted === true)
        {
            TimeOutClickP1-= 0.4;
            TimeOutClickP2-= 0.4;
            if(TimeOutClickP1 <= 0){
                isNotClickingP1();
            }
            if(TimeOutClickP2<=0){
                isNotClickingP2();
            }
            setWidthKameha();
        }
        callbackFunctionDelay();
    },200)
}

const isNotClickingP1 =() => {
    numberClickP1 -= 1;
    if(numberClickP1 < 0){
        numberClickP1 =0;
    }
    setCase();
}

const isNotClickingP2 = () => {
    numberClickP2 -= 1;
    if(numberClickP2 < 0){
        numberClickP2 =0;
    }
    setCase();
}

const setVisual = () => {
    P1.classList.toggle(player1perso);
    P2.classList.toggle(player2perso);
    portgame1DOM.classList.toggle(player1perso);
    portgame2DOM.classList.toggle(player2perso);
    auraP1.classList.toggle(player1perso);
    auraP2.classList.toggle(player2perso);
    auraP1starting.classList.toggle(player1perso);
    auraP2starting.classList.toggle(player2perso);
    kamehaPlayer1.classList.toggle(player1perso);
    kamehaPlayer2.classList.toggle(player2perso);
    document.getElementById("player1txt").innerHTML = player1perso;
    document.getElementById("player2txt").innerHTML = player2perso;
}

const addPlayer1Click = () => {
    TimeOutClickP1 =2;
    numberClickP1++;
    player1KamehaWidth+=0.7;
    player2KamehaWidth-=0.7;
    setCase();
    setGameState();
    setWidthKameha();
}

const addPlayer2Click = () => {
    TimeOutClickP2 =2;
    numberClickP2++;
    player2KamehaWidth+=0.7;
    player1KamehaWidth-=0.7;
    setCase();
    setGameState();
    setWidthKameha();
}

const setWidthKameha = () => {
    // ! midwidth of a kameha is 43.75
        if(gameStarted === true){
        kamehaPlayer1.style.opacity = "100";
        kamehaPlayer2.style.opacity = "100";
        let tempWidth1 = 43.75 + (numberClickP1-numberClickP2)/2.25;
        let tempWidth2 = 43.75 + (numberClickP2-numberClickP1)/2.25;

        kamehaPlayer1.style.width = tempWidth1 + "%";
        kamehaPlayer2.style.width = tempWidth2 + "%";
        if(tempWidth1 < 32.4){
            document.getElementById("mid1").style.backgroundSize = "cover";
        }else{
            document.getElementById("mid1").style.backgroundSize = "contain";
        }
        if(tempWidth2 < 32.4){
            document.getElementById("mid2").style.backgroundSize = "cover";
        }else{
            document.getElementById("mid2").style.backgroundSize = "contain";
        }
    }
}

const setCase = () => {
    let numbertemp1 = numberClickP1*2;
    let numbertemp2 = numberClickP2*2;
    document.getElementById("fillCase1").style.width = numbertemp1 + "%";
    document.getElementById("fillCase2").style.width = numbertemp2 + "%";
}

const setGameState = () => {
    if(numberClickP1 >= maxClick){
        gameStarted = false;
        whoWin = "player1";
        finishGame();
    }else if(numberClickP2>=maxClick){
        gameStarted = false;
        whoWin = "player2";
        finishGame();
    }else{
        gameStarted = true;
    }
}

const finishGame = () => {
    txtStarting.innerHTML = whoWin;
    gameStarted = false;
    if(whoWin === "player1"){
        kamehaPlayer1.style.width = "110%";
        kamehaPlayer2.style.width = "0%";
        kamehaPlayer2.style.opacity = "0";
    }else if(whoWin === "player2"){
        console.log("test2");
        kamehaPlayer1.style.width = "0%";
        kamehaPlayer2.style.width = "110%";
        kamehaPlayer1.style.opacity = "0";
    }
    callbackDisapearKameAndWin();
}

const callbackDisapearKameAndWin = () => {
    setTimeout(() => {
        kamehaPlayer1.style.opacity = "0";
        kamehaPlayer2.style.opacity = "0";
        if(whoWin === "player1"){
            p1DOM.classList.toggle("win");
            p2DOM.classList.toggle("loose");
            auraP2.classList.remove(player2perso);
            auraP1.classList.remove(player1perso);
        }else if(whoWin === "player2"){
            p2DOM.classList.toggle("win");
            p1DOM.classList.toggle("loose");
            auraP1.classList.remove(player1perso);
            auraP2.classList.remove(player2perso);
        }
        callbackAppearRestartMenu();
    },1000)
}

const callbackAppearRestartMenu = () => {
    setTimeout(()=>{
        document.getElementById("restartMenu").style.display = "initial";
        document.getElementById("restartMenu").style.opacity = "100%";
    },4000)
}

const goToMainMenu = () => {
    divMenu.style.display = "initial";
    divGame.style.display = "none";
    resetVisual();
    player1perso = null;
    player2perso = null;
    document.getElementById("restartMenu").style.display = "none";
}

const resetVisual = () => {
    P1.classList.remove(player1perso);
    P2.classList.remove(player2perso);
    kamehaPlayer1.classList.remove(player1perso);
    kamehaPlayer2.classList.remove(player2perso);
    P1.classList.remove("win");
    P2.classList.remove("win");
    P1.classList.remove("loose");
    P2.classList.remove("loose");
    auraP1.classList.remove(player1perso);
    auraP2.classList.remove(player2perso);
    auraP1starting.classList.remove(player1perso);
    auraP2starting.classList.remove(player2perso);
    player2DOM.classList.remove(player2perso);
    player1DOM.classList.remove(player1perso);
    portgame1DOM.classList.remove(player1perso);
    portgame2DOM.classList.remove(player2perso);
}

document.getElementById("buttonMainMenu").addEventListener("click", goToMainMenu);

//?GAME*********************************
//?GAME*********************************
//?GAME*********************************

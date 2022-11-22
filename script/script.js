"use strict"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// TODO DIV SECTION***************************

const divMenu = document.getElementById("menuMain");
const divCampaign = document.getElementById("menuCampaign");
const divSelection = document.getElementById("panelPerso");
const divGame = document.getElementById("gameTable");
const divSummon = document.getElementById("summonMenu");

// TODO VAR SECTION

const fightButton = document.getElementById("fightButton");
const underFightButton = document.querySelectorAll(".underFightButton");
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
let kamehaPlayer1 = document.getElementById("kamehaP1");
let kamehaPlayer2 = document.getElementById("kamehaP2");
let tabPersoDOM = document.getElementById("choosePerso");
let divChooseDiff = document.getElementById("divIAdiff");


let gameIsIa = false;
let listCampaignDBZ = [
    {
        div : document.getElementById("campaign1"),
        campaign : "DBZ",
        level : 1,
        difficulty : "D",
        isLocked: false,
        altReward:{
            name: "GokuSSJ",
            ID: 10,
            version: ["GokuSSJ"]
        },
        reward: {
            name: "Frieza",
            ID: 8,
            version: ["Frieza"]
        },
        player: {
            name: "GokuSSJ",
            ID: 10,
            version: []
        }
    },
    {
        div : document.getElementById("campaign2"),
        campaign : "DBZ",
        level : 2,
        difficulty : "C",
        isLocked: true,
        altReward:null,
        reward: {
            name: "Buutenks",
            ID: 666,
            version: []
        },
        player:{
            name: "VegitoSSJ",
            ID: 1,
            version: []
        }
    },{
        div : document.getElementById("campaign3"),
        campaign : "DBZ",
        level : 3,
        difficulty : "C",
        isLocked: true,
        altReward:{
            name: "GoldenCooler",
            ID: 896,
            version: []
        },
        reward: {
            name: "FinalCooler",
            ID: 896,
            version: ["FinalCooler"]
        },
        player:{
            name: "VegitoSSJ",
            ID: 1,
            version: []
        }
    },{
        div : document.getElementById("campaign4"),
        campaign : "DBZ",
        level : 4,
        difficulty : "B",
        isLocked: true,
        altReward:{
            name: "GokuSSJ3",
            ID: 10,
            version: []
        },
        reward: {
            name: "GoldenFrieza",
            ID: 8,
            version: []
        },
        player:{
            name: "GokuSSJ3",
            ID: 542,
            version: []
        }
    },{
        div : document.getElementById("campaign5"),
        campaign : "DBZ",
        level : 5,
        isLocked: true,
        difficulty : "A",
        altReward:{
            name: "GohanSSJ3",
            ID: 54,
            version: []
        },
        reward: {
            name: "BlackGoku",
            ID: 679,
            version: []
        },
        player:{
            name: "GohanSSJ3",
            ID: 54,
            version: []
        }
    }
]
let listCampaignBTM = [
    {
        div : document.getElementById("campaignBTM1"),
        campaign : "BTM",
        level : 1,
        difficulty : "A",
        isLocked: false,
        altReward:{
            name: "SpiderMan",
            ID: 102,
            version: []
        },
        reward: {
            name: "Venom",
            ID: 81,
            version: []
        },
        player: {
            name: "SpiderMan",
            ID: 102,
            version: []
        }
    },{
        div : document.getElementById("campaignBTM2"),
        campaign : "BTM",
        level : 2,
        difficulty : "S",
        isLocked: true,
        altReward:{
            name: "Sasuke",
            ID: 1042,
            version: []
        },
        reward: {
            name: "Itachi",
            ID: 811,
            version: []
        },
        player: {
            name: "Sasuke",
            ID: 1042,
            version: []
        }
    }
]
let actualCampaign = null;
let tabPerso = [
    {
        name: "Goku",
        ID: 10,
        version: ["Goku"]
    },{
        name: "Vegeta",
        ID: 1123,
        version: ["Vegeta"]
    },{
        name: "Gogeta",
        ID: 0,
        version: []
    },{
        name: "VegitoSSJ",
        ID: 1,
        version: []
    },{
        name: "FirstFrieza",
        ID: 8,
        version: ["FirstFrieza"]
    },{
        name: "KidBuu",
        ID: 666,
        version: ["KidBuu"]
    },{
        name: "GohanSSJ",
        ID: 54,
        version: ["GohanSSJ"]
    }
];
let tabPersoDiv = [];
let player1perso = null;
let player2perso = null;
let difficultyRank = "D";
let timeOutIa = 350;
let numberClickP1 = 0;
let numberClickP2 = 0;
let normalKamehaWidth = 43.75;
let player1KamehaWidth = normalKamehaWidth;
let player2KamehaWidth = normalKamehaWidth;
let maxClick = 50;
let gameStarted = true;
let canClick = false;
let TimeOutClickP1 = 2;
let TimeOutClickP2 = 2;
let whoWin;


// TODO VAR SECTION

//! MAIN MENU*********************************
//! MAIN MENU*********************************
//! MAIN MENU*********************************


const rollFightMenu = () => {
    underFightButton[0].classList.toggle("exist");
    underFightButton[1].classList.toggle("exist");
}

const startCampaign = () =>
{
    setVisualCampaignMenu(listCampaignDBZ);
    setVisualCampaignMenu(listCampaignBTM);
    divCampaign.style.display = "initial";
    divMenu.style.display = "none";
}

const goToSummonMenu = () => {
    divSummon.style.display = "initial";
    divMenu.style.display = "none";
}

const startChoosePerso = () => {
    createTablePerso();
    divChooseDiff.style.display = "none";
    actualCampaign = null;
    gameIsIa = false;
    divMenu.style.display = "none";
    divSelection.style.display = "initial"
}

const startChoosePersoIA = () => {
    createTablePerso();
    divChooseDiff.style.display = "flex";
    actualCampaign = null;
    gameIsIa = true;
    setDifficultyInTab("D", 0);
    divMenu.style.display = "none";
    divSelection.style.display = "initial"
}

const setVisualCampaignMenu = (campaignSlide) => {
    for(let i =0;i<campaignSlide.length;i++){
        if(campaignSlide[i].isLocked === true){
            campaignSlide[i].div.classList.add("locked");
        }else{
            campaignSlide[i].div.classList.remove("locked");
            campaignSlide[i].div.innerHTML ="";
            let rankTier = campaignSlide[i].div.appendChild(document.createElement("div"));
            rankTier.classList.add("ranking");
            rankTier.classList.add(campaignSlide[i].difficulty);
        }
    }
}

fightButton.addEventListener("click", rollFightMenu);
document.getElementById("agIA").addEventListener("click", startChoosePersoIA);
document.getElementById("agPvP").addEventListener("click", startChoosePerso);
document.getElementById("campaignButton").addEventListener("click", startCampaign);
document.getElementById("gatchaButton").addEventListener("click", goToSummonMenu);
document.getElementById("returnMainAsSummon").addEventListener("click", () =>
{
    divSummon.style.display = "none";
    divMenu.style.display = "initial";
})

// FANCY MAIN MENU

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;

let logMovement = (e) => {
    window.scroll(0,0);
    let mouseX = e.clientX / clientWidth *100;
    let mouseY = (e.clientY / clientHeight) *100;
    mouseX = mouseX - 50;
    mouseY = mouseY - 50;
    let rotateYString = "rotateY("+mouseY/10+"deg)"
    let rotateXString = "rotateX("+mouseX/10+"deg)"
    document.getElementById("backgroundSpecial").style.transform = rotateYString + rotateXString;
    //document.getElementById("backgroundSpecialFog").style.transform = rotateYString + rotateXString;
}

document.addEventListener('mousemove', logMovement);

// FANCY MAIN MENU

//! MAIN MENU*********************************
//! MAIN MENU*********************************
//! MAIN MENU*********************************

//? CAMPAIGN MENU*********************************
//? CAMPAIGN MENU*********************************
//? CAMPAIGN MENU*********************************

const returnToMainMenuAsCampaign = () => {
    divCampaign.style.display = "none";
    divMenu.style.display = "initial";
}

const rollCampaignSlide = (campaignSlide) => {
    for(let i =0;i<campaignSlide.length;i++){
        campaignSlide[i].div.classList.toggle("exist");
        if(campaignSlide[i].isLocked === true){
            campaignSlide[i].div.classList.add("locked");
        }else{
            campaignSlide[i].div.classList.remove("locked");
        }
    }
}

const chooseCampaign = (campaign) => {
    if(campaign.isLocked === false){
        actualCampaign = campaign;
        player1perso = campaign.player.name;
        player2perso = campaign.reward.name;
        difficultyRank = campaign.difficulty;
        gameIsIa = true;
        startGame();
    }
}

const setCampaignEvent = () => {
    for(let i = 0;i<listCampaignDBZ.length;i++){
        listCampaignDBZ[i].div.addEventListener("click", () => {
            chooseCampaign(listCampaignDBZ[i]);
        })
    }
    for(let j = 0;j<listCampaignBTM.length;j++){
        listCampaignBTM[j].div.addEventListener("click", () => {
            chooseCampaign(listCampaignBTM[j]);
        })
    }
}

setCampaignEvent();

document.getElementById("returnMainAsCampaign").addEventListener("click", returnToMainMenuAsCampaign)
document.getElementById("campaignSlide1").addEventListener("click", ()=>{
    rollCampaignSlide(listCampaignDBZ);
})
document.getElementById("campaignSlide2").addEventListener("click", ()=>{
    rollCampaignSlide(listCampaignBTM);
})


//? CAMPAIGN MENU*********************************
//? CAMPAIGN MENU*********************************
//? CAMPAIGN MENU*********************************

//*SELECT PERSO*********************************
//*SELECT PERSO*********************************
//*SELECT PERSO*********************************

const createTablePerso = () => {

    //Reset array

    tabPersoDOM.innerHTML = "";

    //Boucle sur l'array d'objet des personnages pour créer le visuel de choix des personnages
    
    for(let i = 0;   i<tabPerso.length;   i++){

        //Manipulation du DOM
        let perso = tabPersoDOM.appendChild(document.createElement("div"));
        perso.classList.add("perso");
        if(tabPerso[i].version.length > 1){
            perso.classList.toggle(tabPerso[i].version[0]);
            let tempSubPersoArray = []
            let subFleche = perso.appendChild(document.createElement("div"));
            subFleche.classList.add("FlechePerso"); 
            for(let k =0; k<tabPerso[i].version.length; k++){
                console.log(tabPerso[i].version[k]);
                let subPerso = tabPersoDOM.appendChild(document.createElement("div"));
                subPerso.classList.add("subPerso");
                subPerso.classList.add(tabPerso[i].version[k]);
                subPerso.addEventListener("click", () =>
                {
                    selectPlayer(i, k);
                })
                tempSubPersoArray.push(subPerso);
            }
            perso.addEventListener("click", () =>
            {
                subFleche.classList.toggle("active");
                rollPersoVersion(tempSubPersoArray);
            })
        }else{
            perso.classList.toggle(tabPerso[i].name);
            perso.addEventListener("click", () =>
            {
                selectPlayer(i);
            })
        }

        //Ajout de l'object qui contient le personage et l'ID dans le tableau des div des persos

        let object = { 
            object: perso,
            ID: i
        }
        tabPersoDiv.push(object);

    }

}

const rollPersoVersion = (listVersions) => {
    for(let o = 0; o<listVersions.length;o++){
        listVersions[o].classList.toggle("exist");
    }
}

const selectPlayer = (ID, NumberOfVersion = 0) => {
    if(player1perso === null){
        if(tabPerso[ID].version.length > 1){
            console.log(ID + "version");
            player1perso = tabPerso[ID].version[NumberOfVersion];
            player1DOM.classList.toggle(player1perso);
        }else{
            console.log(ID);
            player1perso = tabPerso[ID].name;
            player1DOM.classList.toggle(tabPerso[ID].name);
        }
    }else if(player2perso===null){
        if(tabPerso[ID].version.length > 1){
            console.log(ID);
            player2perso = tabPerso[ID].version[NumberOfVersion];
            player2DOM.classList.toggle(player2perso);
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
    setDifficulty();
    setVisual();
    startingCount();
    
    kamehaPlayer1.style.transition = "all 0s";
    kamehaPlayer2.style.transition = "all 0s";
    divCampaign.style.display = "none";
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
            callbackFunctionDelay(timeOutIa);
            setWidthKameha();
            iaAgainstPlayer();
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
    player1DOM.classList.remove(player1perso);
    player2DOM.classList.remove(player2perso);
    player1perso = null;
    player2perso = null;
    gameIsIa= false;
    divSelection.style.display = "none";
    divMenu.style.display = "initial";
}

buttonStart.addEventListener("click", () =>
{
    if(player1perso !== null && player2perso !== null){
        startGame();    
    }
})

document.getElementById("returnMain").addEventListener("click", returnMainMenu);

//*SELECT PERSO*********************************
//*SELECT PERSO*********************************
//*SELECT PERSO*********************************

//?GAME*********************************
//?GAME*********************************
//?GAME*********************************

document.addEventListener('keydown', (e) => {
    console.log("key e");
    if(gameStarted === true && canClick === true){
        if(e.key === " "){
            addPlayer1Click();
            console.log(player2KamehaWidth);
        }
        if(e.code === "Numpad0" && gameIsIa === false){
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
        if(gameStarted===true){
            callbackFunctionDelay();
        }
    },250)
}

const iaAgainstPlayer = () => {
    setTimeout(()=>{
        if(gameIsIa===true && gameStarted === true){
            if(getRandomInt(3)<=1){
                addPlayer2Click();
            }
            iaAgainstPlayer();
        }
    }, timeOutIa)
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

const setDifficulty = () => {
    if(difficultyRank === "D"){
        timeOutIa = 325;
    }else if(difficultyRank === "C"){
        timeOutIa = 275;
    }else if(difficultyRank === "B"){
        timeOutIa = 250;
    }else if(difficultyRank === "A"){
        timeOutIa = 210;
    }else if(difficultyRank === "S"){
        timeOutIa = 160;
    }else if(difficultyRank === "SS"){
        console.log("lessgui");
        timeOutIa = 110;
    }
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
            if(tempWidth1 < 31.31){
                document.getElementById("mid1").style.backgroundSize = "cover";
            }else{
                document.getElementById("mid1").style.backgroundSize = "contain";
            }
            if(tempWidth2 < 31.31){
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
        kamehaPlayer1.style.transition = "all 1s";
        kamehaPlayer2.style.transition = "all 1s";
        if(actualCampaign!==null){
            endCampaign();
        }
    }else if(whoWin === "player2"){
        console.log("test2");
        kamehaPlayer1.style.width = "0%";
        kamehaPlayer2.style.width = "110%";
        kamehaPlayer1.style.opacity = "0";
        kamehaPlayer2.style.transition = "all 1s";
        kamehaPlayer1.style.transition = "all 1s";
    }
    callbackDisapearKameAndWin();
}

const endCampaign= () => {
    let tempTapDoublon=false;
    let canAddDoublonInVersion = true;
    for(let k = 0; k < tabPerso.length;k++){
        if(tabPerso[k].ID===actualCampaign.reward.ID){
            tempTapDoublon = true;
            for(let y = 0; y<tabPerso[k].version.length;y++){
                if(tabPerso[k].version[y]===actualCampaign.reward.name){
                    canAddDoublonInVersion = false;
                }
            }
            if(canAddDoublonInVersion=== true){
                tabPerso[k].version.push(actualCampaign.reward.name);
            }
        }
    }
    let tempAltTapDoublon=false;
    let canAddAltDoublonInVersion = true;
    if(tempTapDoublon===false){
        tabPerso.push(actualCampaign.reward);
    }
    if(actualCampaign.altReward !== null){
        for(let o = 0;o<tabPerso.length;o++){
            if(tabPerso[o].ID===actualCampaign.altReward.ID){
                tempAltTapDoublon = true;
            

                for(let y = 0; y<tabPerso[o].version.length;y++){
                    if(tabPerso[o].version[y]===actualCampaign.altReward.name){
                        console.log("cant add");
                        canAddAltDoublonInVersion = false;
                    }
                }
                if(canAddAltDoublonInVersion=== true){
                    tabPerso[o].version.push(actualCampaign.altReward.name);
                }
            }
        }
    }
    if(tempAltTapDoublon===false && actualCampaign.altReward !== null){
        tabPerso.push(actualCampaign.altReward);
    }
    unlockNextLevel();
}

const unlockNextLevel = () => {
    if(actualCampaign.campaign === "DBZ" && actualCampaign.level<listCampaignDBZ.length){
        let tempNextLVL = actualCampaign.level;
        listCampaignDBZ[tempNextLVL].isLocked = false;
        listCampaignDBZ[tempNextLVL].div.classList.remove("locked");
    }
    if(actualCampaign.campaign === "BTM" && actualCampaign.level<listCampaignBTM.length){
        let tempNextLVL = actualCampaign.level;
        listCampaignBTM[tempNextLVL].isLocked = false;
        listCampaignBTM[tempNextLVL].div.classList.remove("locked");
    }
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
    gameIsIa = false;
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

//*SUMMON MENU*********************************
//*SUMMON MENU*********************************
//*SUMMON MENU*********************************

//*SUMMON MENU*********************************
//*SUMMON MENU*********************************
//*SUMMON MENU*********************************

//SET DIFFICULTY WITH EVENT

document.getElementById("D").addEventListener("click", ()=>{
    setDifficultyInTab("D", 0);
});
document.getElementById("C").addEventListener("click", ()=>{
    setDifficultyInTab("C", 1);
});
document.getElementById("B").addEventListener("click", ()=>{
    setDifficultyInTab("B", 2);
});
document.getElementById("A").addEventListener("click", ()=>{
    setDifficultyInTab("A", 3);
});
document.getElementById("S").addEventListener("click", ()=>{
    setDifficultyInTab("S", 4);
});
document.getElementById("SS").addEventListener("click", ()=>{
    setDifficultyInTab("SS", 5);
});

const setDifficultyInTab = (rank, div) => {
    difficultyRank = rank;
    for(let i =0; i< document.getElementById("divIAdiff").children.length;i++){
        document.getElementById("divIAdiff").children[i].classList.remove("active");
    }
    document.getElementById("divIAdiff").children[div].classList.add("active");
}

//SET DIFFICULTY WITH EVENT

document.getElementById("exitButton").addEventListener("click", ()=>{
    window.close();
})
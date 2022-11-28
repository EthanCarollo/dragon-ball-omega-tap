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
const divShop = document.getElementById("shopMenu");
const divCode = document.getElementById("codeMenu");

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
let divShopList = document.getElementById("shopList");
let dragonBall = 50;
let money = 1000;


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
            version: ["BlackGoku"]
        },
        player:{
            name: "GohanSSJ3",
            ID: 54,
            version: []
        }
    },{
        div : document.getElementById("campaign6"),
        campaign : "DBZ",
        level : 6,
        isLocked: true,
        difficulty : "S",
        altReward:{
            name: "GogetaSSG",
            ID: 0,
            version: ["GogetaSSG"]
        },
        reward: {
            name: "SuperJanembaXeno",
            ID: 678,
            version: ["SuperJanembaXeno"]
        },
        player:{
            name: "GogetaSSG",
            ID: 0,
            version: ["GogetaSSG"]
        }
    },{
        div : document.getElementById("campaign7"),
        campaign : "DBZ",
        level : 7,
        isLocked: true,
        difficulty : "SSS",
        altReward:{
            name: "VegitoXenoSSJ4",
            ID: 1,
            version: ["VegitoXenoSSJ4"]
        },
        reward: {
            name: "MechaZamasu",
            ID: 679,
            version: ["MechaZamasu"]
        },
        player:{
            name: "VegitoXenoSSJ4",
            ID: 1,
            version: ["VegitoXenoSSJ4"]
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
            version: ["Sasuke"]
        },
        reward: {
            name: "Itachi",
            ID: 811,
            version: []
        },
        player: {
            name: "Sasuke",
            ID: 1042,
            version: ["Sasuke"]
        }
    },{
        div : document.getElementById("campaignBTM3"),
        campaign : "BTM",
        level : 3,
        difficulty : "SS",
        isLocked: true,
        altReward:{
            name: "SasukeRinnegan",
            ID: 1042,
            version: []
        },
        reward: {
            name: "NarutoDemon",
            ID: 812,
            version: ["NarutoDemon"]
        },
        player: {
            name: "SasukeRinnegan",
            ID: 1042,
            version: ["SasukeRinnegan"]
        }
    }
]
let listCampaignNTM = [
    {
        div : document.getElementById("campaignNTM1"),
        campaign : "NTM",
        level : 1,
        difficulty : "SSSSS",
        isLocked: false,
        altReward:null,
        reward: {
            name: "NappaSSJ4",
            ID: 8145,
            version: []
        },
        player: {
            name: "GogetaSSG",
            ID: 102,
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
        version: ["Gogeta"]
    },{
        name: "VegitoSSJ",
        ID: 1,
        version: ["VegitoSSJ"]
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
let tabAllPerso = [
    {
        name: "Goku",
        ID: 10,
        version: ["Goku", "GokuSSJ", "GokuSSJ3", "GokuSSJ4"]
    },{
        name: "Vegeta",
        ID: 1123,
        version: ["Vegeta", "MajinVegeta", "VegetaSSB", "VegetaXenoSSJ5"]
    },{
        name: "Gogeta",
        ID: 0,
        version: ["Gogeta", "GogetaSSG"]
    },{
        name: "VegitoSSJ",
        ID: 1,
        version: ["VegitoSSJ", "VegitoXenoSSJ4"]
    },{
        name: "FirstFrieza",
        ID: 8,
        version: ["FirstFrieza", "GoldenFrieza"]
    },{
        name: "KidBuu",
        ID: 666,
        version: ["KidBuu", "Buutenks", "Buumasu", "Buuhan", "ZenBuu"]
    },{
        name: "GohanSSJ",
        ID: 54,
        version: ["GohanSSJ", "GohanSSJ3", "GohanSSB"]
    },{
        name: "FinalCooler",
        ID: 896,
        version: ["FinalCooler", "GoldenCooler"]
    },{
        name: "SuperJanembaXeno",
        ID: 678,
        version: ["SuperJanembaXeno"]
    },{
        name: "BlackGoku",
        ID: 679,
        version: ["BlackGoku", "MechaZamasu"]
    },{
        name: "NappaSSJ4",
        ID: 8145,
        version: []
    },{
        name:"Bardock",
        ID: 158,
        version:["Bardock"]
    },{
        name: "DrGero",
        ID: 1124,
        version: ["DrGero"]
    },{
        name: "Sasuke",
        ID: 1042,
        version: ["Sasuke", "SasukeRinnegan"]
    },{
        name: "Itachi",
        ID: 811,
        version: []
    },{
        name: "NarutoDemon",
        ID: 812,
        version: ["NarutoDemon"]
    },{
        name: "SpiderMan",
        ID: 102,
        version: []
    },{
        name: "Venom",
        ID: 81,
        version: []
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

const setCountCrystal = () => {
    document.getElementById("crystalCount").innerHTML = dragonBall;
    document.getElementById("crystalCountSummon").innerHTML = dragonBall;
}

const setCountMoney = () => {
    document.getElementById("moneyCount").innerHTML = money;
    document.getElementById("moneyCountShop").innerHTML = money;
}

const goToSummonMenu = () => {
    divSummon.style.display = "initial";
    divMenu.style.display = "none";
}

const goToShopMenu = () => {
    divShop.style.display = "initial";
    divMenu.style.display = "none";
}

const goToCodeMenu = () => {
    divCode.classList.toggle("active");
}

const startCampaign = () =>
{
    setVisualCampaignMenu(listCampaignDBZ);
    setVisualCampaignMenu(listCampaignBTM);
    setVisualCampaignMenu(listCampaignNTM);
    divCampaign.style.display = "initial";
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

setCountCrystal();
fightButton.addEventListener("click", rollFightMenu);
document.getElementById("agIA").addEventListener("click", startChoosePersoIA);
document.getElementById("agPvP").addEventListener("click", startChoosePerso);
document.getElementById("campaignButton").addEventListener("click", startCampaign);
document.getElementById("gatchaButton").addEventListener("click", goToSummonMenu);
document.getElementById("shopButton").addEventListener("click", goToShopMenu);
document.getElementById("codeButton").addEventListener("click", goToCodeMenu);
document.getElementById("returnMainAsSummon").addEventListener("click", () =>
{
    setCountCrystal();
    divSummon.style.display = "none";
    divMenu.style.display = "initial";
})
document.getElementById("returnMainAsShop").addEventListener("click", () =>
{
    divMenu.style.display = "initial";
    divShop.style.display = "none";
})
document.getElementById("returnMainAsCode").addEventListener("click", () =>
{
    divCode.classList.toggle("active");
})

// FANCY MAIN MENU

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;

let logMovement = (e) => {
    window.scroll(0,0);
    let mouseX = e.clientX / clientWidth *100;
    let mouseY = e.clientY / clientHeight *100;
    mouseX = mouseX - 50;
    mouseY = mouseY - 50;
    let rotateYString = "rotateY("+mouseY/15+"deg)"
    let rotateXString = "rotateX("+mouseX/15+"deg)"
    document.getElementById("backgroundSpecial").style.transform = rotateYString + rotateXString;
}

document.addEventListener('mousemove', logMovement);

// FANCY MAIN MENU

//! MAIN MENU*********************************
//! MAIN MENU*********************************
//! MAIN MENU*********************************

//? CAMPAIGN MENU*********************************
//? CAMPAIGN MENU*********************************
//? CAMPAIGN MENU*********************************

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

const returnToMainMenuAsCampaign = () => {
    divCampaign.style.display = "none";
    divMenu.style.display = "initial";
    setCountCrystal();
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
    for(let k = 0;k<listCampaignNTM.length;k++){
        listCampaignNTM[k].div.addEventListener("click", () => {
            chooseCampaign(listCampaignNTM[k]);
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
document.getElementById("campaignSlide3").addEventListener("click", ()=>{
    rollCampaignSlide(listCampaignNTM);
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
    setCountCrystal();
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
        timeOutIa = 110;
    }else if(difficultyRank === "SSS"){
        timeOutIa = 90;
    }else if(difficultyRank === "SSSS"){
        timeOutIa = 70;
    }else if(difficultyRank === "SSSSS"){
        timeOutIa = 50;
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
    addCharacter(actualCampaign.reward);
    addCharacter(actualCampaign.altReward);
    unlockNextLevel();
}

const addCharacter = (Character) => {
    if(Character !== null){
        let tempTapDoublon=false;
        let canAddDoublonInVersion = true;
        for(let k = 0; k < tabPerso.length;k++){
            if(tabPerso[k].ID===Character.ID){
                tempTapDoublon = true;
                for(let y = 0; y<tabPerso[k].version.length;y++){
                    if(tabPerso[k].version[y]===Character.name){
                        canAddDoublonInVersion = false;
                    }
                }
                if(canAddDoublonInVersion=== true){
                    tabPerso[k].version.push(Character.name);
                }
            }
        }
        if(tempTapDoublon===false){
            tabPerso.push(Character);
        }
    }
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
    setCountCrystal();
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

let summoningCharacter = [
    {
        name: "MajinVegeta",
        ID: 1123,
        version: ["MajinVegeta"]
    },{
        name: "DrGero",
        ID: 1124,
        version: ["DrGero"]
    },{
        name: "Buumasu",
        ID: 666,
        version: ["Buumasu"]
    },{
        name: "GohanSSB",
        ID: 54,
        version: ["GohanSSB"]
    },{
        name: "GokuSSJ4",
        ID:10,
        version: ["GokuSSJ4"]
    },{
        name: "VegetaSSB",
        ID: 1123,
        version: ["VegetaSSB"]
    },{
        name:"Bardock",
        ID: 158,
        version:["Bardock"]
    }
];
let random = [summoningCharacter[(getRandomInt(summoningCharacter.length))],
            summoningCharacter[(getRandomInt(summoningCharacter.length))],
            summoningCharacter[(getRandomInt(summoningCharacter.length))]];
let tirageSlot = document.getElementById("tirageSlot");
let iterationOfRoll = 0;
let waitCall = 25;
let canSummon = true;

const summonNewCharacter = () => {
    if(dragonBall>=7 && canSummon === true){
        tirageSlot.children[1].style.animation = "none";
        canSummon = false;
        waitCall = 25;
        dragonBall -= 7;
        iterationOfRoll = 0;
        setCountCrystal();
        callBackForSummon();
    }
}

const callBackForSummon = () =>{
    setTimeout(() => {
        if(iterationOfRoll<15){
            iterationOfRoll++;
            waitCall +=25;
            rollCard();
            callBackForSummon();
        }else{
            endRoll();
        }
    }, waitCall);
}

const resetRandom= () => {
    random = [summoningCharacter[(getRandomInt(summoningCharacter.length))],
            summoningCharacter[(getRandomInt(summoningCharacter.length))],
            summoningCharacter[(getRandomInt(summoningCharacter.length))]];

    if(random[0] === random[1] || random[0] === random[2] || random[2] === random[1]){
        resetRandom();
    }
}

const rollCard = () => {
    
    for(let k = 0; k <tirageSlot.children.length;k++){
        tirageSlot.children[k].children[1].classList.remove(random[k].name);
    }

    resetRandom();

    for(let i = 0; i < tirageSlot.children.length;i++){
        tirageSlot.children[i].children[2].innerHTML = random[i].name;
        tirageSlot.children[i].children[1].classList.add(random[i].name);
    }
}

const endRoll = () => {
    tirageSlot.children[1].style.animation = "animationGotya 1.5s";
    canSummon = true;
    addCharacter(random[1]);
}

document.getElementById("summonB").addEventListener("click", summonNewCharacter);

//*SUMMON MENU*********************************
//*SUMMON MENU*********************************
//*SUMMON MENU*********************************

//!SHOP MENU*********************************
//!SHOP MENU*********************************
//!SHOP MENU*********************************

let tablePersoShop = [
    [{
        name: "ZenBuu",
        ID: 666,
        version: ["ZenBuu"],
    }, 200, true],
    [{
        name: "BabyVegeta",
        ID: 646,
        version: ["BabyVegeta"],
    }, 300, true],
    [{
        name: "BabyBlackVegito",
        ID: 646,
        version: ["BabyBlackVegito"],
    }, 500,true]
]
let tableDivPersoShop = []

const buyCharacter = (character, price, shopCase, id) => {
    if(money>=price){
        addCharacter(character);
        money -= price;
        setCountMoney();
        shopCase.classList.remove(character.name);
        shopCase.children[0].innerHTML = "";
        shopCase.remove();
        tablePersoShop[id][2] = false;
        //tablePersoShop.splice(id);
        createShopTable();
    }
}

const createShopTable = () => {

    divShopList.innerHTML = "";
    
    for(let i = 0;i<21;i++){
        if(tablePersoShop[i] !== undefined){
            let shopCase = divShopList.appendChild(document.createElement("div"));
            shopCase.classList.add("shopCase");

            if(tablePersoShop[i][2]!==false){
                shopCase.classList.add(tablePersoShop[i][0].name);
                let priceCase = shopCase.appendChild(document.createElement("div"));
                priceCase.classList.add("price");
                priceCase.innerHTML = tablePersoShop[i][1] + "  $";
                shopCase.addEventListener("click", () => {
                    buyCharacter(tablePersoShop[i][0], tablePersoShop[i][1], shopCase, i);
                })
                let CaseShopObject = {
                    shopDiv: shopCase,
                    shopPerso: tablePersoShop[i][0],
                    price: tablePersoShop[i][1]
                }
            }
            let CaseShopObject = {
                shopDiv: shopCase,
                shopPerso: tablePersoShop[i][0]
            }
            tableDivPersoShop.push(CaseShopObject);
        }else{
            let shopCase = divShopList.appendChild(document.createElement("div"));
            shopCase.classList.add("shopCase");
        }
    }
}

createShopTable();


//!SHOP MENU*********************************
//!SHOP MENU*********************************
//!SHOP MENU*********************************

//*CODE MENU*********************************
//*CODE MENU*********************************
//*CODE MENU*********************************

const getAllPerso = () => {
    tabPerso = [...tabAllPerso];
}

const setNightmare = () => {
    document.getElementById("campaignSlide3").style.display = "initial";
}

let cheatCode = [
    {
    code : "unlockall",
    function : getAllPerso
    },
    {
        code : "nightmare",
        function : setNightmare
    }
];

document.getElementById("codeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    checkCode(document.getElementById("code").value);
})

const checkCode = (code) => {
    let tempCode = code.toLowerCase();
    for(let i=0;i<cheatCode.length;i++){
        if(tempCode === cheatCode[i].code)
        {
            cheatCode[i].function();
        }
    }
}


//*CODE MENU*********************************
//*CODE MENU*********************************
//*CODE MENU*********************************

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
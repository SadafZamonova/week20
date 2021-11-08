let json = [{
    "person": "Супермен",
    "universe":  "DC Comics",
    "activity": "борец за справедливость",
    "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "isRange": 7,
    "id" : 0
},

{
    "person": "Железный человек",
    "universe": "Marvel Comics",
    "activity":  "гений, миллиардер, плейбой, филантроп",
    "superpowers":  "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "isRange": 3,
    "id" : 1
},
{
    "person": "Чудо-женщина",
    "universe":  "DC Comics",
    "activity": "супергероиня, секретарь-референт",
    "superpowers": "сверхчеловеческая сила искорость, выносливость, полет",
    "isRange": 5,
    "id" : 2
}];

document.addEventListener("DOMContentLoaded", function (event) {
    let superheros = json;

    let superherosContent = "";
    for (let superhero of superheros) {
        superherosContent += `<div class="superhero">
    <h2> ${superhero.person}</h2>
    <h3> Вселенная: ${superhero.universe} </h3>
    <div>Род деятельности: ${superhero.activity} </div>
    <div>Суперсилы: ${superhero.superpowers} </div>
    <input   type="range" id="one" max="10"> <div>Рейтинг:</div> <span>  ${superhero.isRange}</span> 
   </div>`;
    }
    document.querySelector("#container").innerHTML = superherosContent;
document.querySelector("#one").oninput = () => {
    let range = document.querySelector("#one").value;
    document.querySelector("span").innerHTML=range;
}



});

function getFromlocalStorage(){
    localStorage.getItem("json")

}


function setFromlocalStorage(data){
    localStorage.setItem("json", JSON.stringify(data));
}


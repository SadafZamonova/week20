let json = `[{
    "person": "Супермен",
    "universe":  "DC Comics",
    "activity": "борец за справедливость",
    "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
},
{
    "person": "Железный человек",
    "universe": "Marvel Comics",
    "activity":  "гений, миллиардер, плейбой, филантроп",
    "superpowers":  "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
},
{
    "person": "Чудо-женщина",
    "universe":  "DC Comics",
    "activity": "супергероиня, секретарь-референт",
    "superpowers": "сверхчеловеческая сила искорость, выносливость, полет"
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let superheros = JSON.parse(json);

    let superherosContent = "";
    for (let superhero of superheros) {
        superherosContent += `<div class="superhero">
    <h2> ${superhero.person}</h2>
    <h3> Вселенная: ${superhero.universe} </h3>
    <div>Род деятельности: ${superhero.activity} </div>
    <div>Суперсилы: ${superhero.superpowers} </div>
    </div>`;
    }
    document.querySelector("#container").innerHTML = superherosContent;

});
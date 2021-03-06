let json = [{
        "person": "Супермен",
        "universe": "DC Comics",
        "activity": "борец за справедливость",
        "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
        "isRange": 7,
        "id": "one"
    },

    {
        "person": "Железный человек",
        "universe": "Marvel Comics",
        "activity": "гений, миллиардер, плейбой, филантроп",
        "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
        "isRange": 3,
        "id": "two"
    },
    {
        "person": "Чудо-женщина",
        "universe": "DC Comics",
        "activity": "супергероиня, секретарь-референт",
        "superpowers": "сверхчеловеческая сила искорость, выносливость, полет",
        "isRange": 5,
        "id": "three"
    }
];

document.addEventListener("DOMContentLoaded", function (event) {
    let superheros = getFromlocalStorage();

    if (superheros) {
        superheros = JSON.parse(superheros);
    } else {
        superheros = json;
    }

    let superherosContent = "";
    for (let i = 0; i < superheros.length; i++) {
        let superhero = superheros[i];
        superherosContent += `<div class="superhero">
    <h2> ${superhero.person}</h2>
    <h3> Вселенная: ${superhero.universe} </h3>
    <div>Род деятельности: ${superhero.activity} </div>
    <div>Суперсилы: ${superhero.superpowers} </div>
    <input   type="range" id="${superhero.id}" max="10"> <h5>Рейтинг:</h5> <span id="span_${superhero.id}">  ${superhero.isRange}</span> 
   </div>`
        document.querySelector("#container").innerHTML = superherosContent;

        document.addEventListener("input", function () {
            let range = document.querySelector(`#${superhero.id}`).value;
            document.querySelector(`#span_${superhero.id}`).innerHTML = range;
            superhero.isRange = range;
            superheros[i] = superhero;
            setFromlocalStorage(superheros);
        });
    }
});

function getFromlocalStorage() {
    return localStorage.getItem("heroes")

}

function setFromlocalStorage(data) {
    localStorage.setItem("heroes", JSON.stringify(data));
}
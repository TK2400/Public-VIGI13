const vartotojas = {
    vardas: "Marius",
    svoris: 90,
    ugis: 191,
    pasisveikinti: function () {
        return "Labas as " + this.vardas;
    }
};

vartotojas.pinigine = 1000;
vartotojas.svoris = 60;

const pasisveikinimas = vartotojas.pasisveikinti();

console.log(pasisveikinimas);
const savybe = prompt('kokia savybe');
const verte = prompt('Apibudinkite pasirinkta savybe');

vartotojas[savybe] = verte;

vartotojas.pirktiKebaba = function(){
    this.pinigine = this.pinigine - 3;
};
vartotojas.pirktiKebaba();
vartotojas.pirktiKebaba();
vartotojas.pirktiKebaba();

console.log(vartotojas);
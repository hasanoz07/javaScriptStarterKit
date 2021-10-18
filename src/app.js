console.log("Merhaba kodlama.io");


//JS Type Safe Değil

let dolarDun =9.20;

let dolarBugun=9.33;

dolarDun="ankara";
{
     let dolarDun=9.10
}

console.log(dolarDun);

const euroDun=11.2;
//euroDun=11; bu hata verir çünkü const ile tanımlanan değişkenler değişim yapılamaz
console.log(euroDun);
//array
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
//camelCase
console.log(konutKredileri)
console.log("<ul>")

for (let konutKredi = 0; konutKredi < konutKredileri.length; konutKredi++) {
    console.log("<li>"+konutKredileri[konutKredi]+"</li>");
}
console.log("</ul>")



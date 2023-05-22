/* localstorage in JS (JSda mahalliy ombor) */
/*localStorage.setItem('ism','Nastya');
localStorage.setItem('familiya','Kim');
localStorage.setItem('yoshi',22);
localStorage['ism'] = "Pasha";
localStorage['familiya'] = "Volya";*/
/*localStorage.removeItem('ism');
localStorage.removeItem('familiya');
localStorage.removeItem('yoshi');*/
/*localStorage.clear();
let uningIsmi = localStorage.getItem('ism');
let uningFamiliyasi = localStorage.getItem('familiya');
let uningYoshi = localStorage.getItem('yoshi');
console.log(uningIsmi,uningFamiliyasi,uningYoshi);*/

/* HTTPS requests (HTTPS so'rovlar) */
/*let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}*/

/* JSON in JS */
/*let objectFayl = {ism: "Nastya", yoshi: 22};        /!* JS object *!/
let jsonFayl = '{"ism": "Nastya", "yoshi": 22}';    /!* JSON object *!/
console.log(JSON.parse(jsonFayl));*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFayl.json');
sorov.send();
sorov.onload = function (){
    let json = JSON.parse(sorov.responseText);
    console.log(json);
}









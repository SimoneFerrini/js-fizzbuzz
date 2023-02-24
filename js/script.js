/*

Scrivi un programma che stampi in console i
 numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” 
 al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi 
 “FizzBuzz”.

-selezionare il contenitore
-creare 100 elementi numerati
-via via che si creano controllare se divisibili x 5,3 o entrambi
- se si inserire il corrispettivo colore e testo
- se no inserire il numero dell'elemento

 */

let divEl = document.getElementById("fizz-buzz");

for (let i = 1; i <= 100; i++){

    let newEl = document.createElement("span");
    newEl.classList.add("col");
    divEl.append(newEl);

    if ((i % 3 == 0) && (i % 5 == 0)){
        newEl.innerHTML = "FizzBuzz" ;
    } else if (i % 3 == 0){
        newEl.innerHTML = "Fizz";
    } else if (i % 5 == 0){
        newEl.innerHTML = "Buzz";
    } else{
        newEl.innerHTML = i;
    }
}
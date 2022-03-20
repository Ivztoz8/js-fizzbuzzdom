// Dichiarazione variabili
let container = document.getElementById("fizzContainer")

// Ciclo for per la creazione 
for (let i = 1; i <= 100; i++){
    if( i % 3 == 0 && i % 5 == 0){
        let fizzBuzz = "FizzBuzz";
        container.innerHTML += `<div class="myc_col myc_col-${(fizzBuzz)}">${(fizzBuzz)}</div>`;
    }
    else if ( i % 3 == 0){
        let fizz = "Fizz";
         container.innerHTML += `<div class="myc_col myc_col-${(fizz)}">${(fizz)}</div>`;
    } 
    else if ( i % 5 == 0){
        let buzz = "Buzz";
        container.innerHTML += `<div class="myc_col myc_col-${(buzz)}">${(buzz)}</div>`;
    }
    else {
        container.innerHTML += `<div class="myc_col myc_col-normal">${(i)}</div>`;
    }    
}
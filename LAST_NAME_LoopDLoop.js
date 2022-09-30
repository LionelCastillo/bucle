//1) Debemos utilizar bucles porque vamos a repetir una accion varias veces
//2) El punto de partida es 0
//3) El bucle debe detenerse cuando la variable no sea menor a 10 
//4) Colocando en el bucle que se detenga al superar los 10
//5) El incremento podria ser de tres en tres ya que se contaran cada tres kilometros, elegie hacerlo de a uno,
// para que siempre evalue si la condicion se cumple  
//6) Las variables que necesitamos son "c" para contar los caramelos, "v" para indicar la velocidad del corredor, 
// y dentro del bucle for "k" para contar los kilometros del corredor 
var c = 0;
var v = 12;

for(var k = 0; k < 10; k++){
    if(k%3 == 0 && k !=0){
        c +=1
    }
}

for(var k = 0; k < 10; k++){
    if(k/3 == 1 && k !=0 && v > 9){
    c +=1
    }
}

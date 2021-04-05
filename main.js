
function operadorDeExponenciacion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x **= y; //Operador de exponenciacion Abreviado
//  x = x ** y; //Operador de exponenciacion Significado
    console.warn(`Operador exponenciacion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}



function operadorDeExponenciacion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x **= y; //Operador de exponenciacion Abreviado
//  x = x ** y; //Operador de exponenciacion Significado
    console.warn(`Operador exponenciacion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeModulo(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x %= y; //Operador de Modulo Abreviado
//  x = x % y; //Operador de Modulo Significado
    console.warn(`Operador Modulo`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeDivision(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x /= y; //Operador de Division Abreviado
//  x = x / y; //Operador de Division Significado
    console.warn(`Operador Division`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeMultiplicacion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x *= y; //Operador de Multiplicacion Abreviado
//  x = x * y; //Operador de Multiplicacion Significado
    console.warn(`Operador Multiplicacion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeSustracion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x -= y; //Operador de Sustracion Abreviado
//  x = x - y; //Operador de Sustracion Significado
    console.warn(`Operador Sustracion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeAdicion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x += y; //Operador de Adicion Abreviado
//  x = x + y; //Operador de Adicion Significado
    console.warn(`Operador Adicion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeAsignacion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x = y; //Operador de Asignacion Abreviado
//  x = y; //Operador de Asignacion Significado
    console.warn(`Operador Asignacion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
let x = '5';
let y = 2;
operadorDeAsignacion(x,y);
operadorDeAdicion(x,y);
operadorDeSustracion(x,y);
operadorDeMultiplicacion(x,y);
operadorDeDivision(x,y);
operadorDeModulo(x,y);
operadorDeExponenciacion(x,y);

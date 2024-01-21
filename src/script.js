///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(numer1, numer2, operador){
  let result
  let num1 = parseInt(Number(numer1))
  let num2 = parseInt(Number(numer2))
  switch(operador){
    case '+':
      result = num1 + num2
      break;
    case '-':
      result = num1 - num2
      break;
    case '*':
      result = num1 * num2
      break;
    case '/':
      result = num1 / num2
      break;
    case 'e':
      let cont = 1
      result = num1 * num1
      while(cont < num2 - 1){
        result = result * num1
        cont++
      }
      break;
  }
if(result == undefined || result > 1000000)
  result = 'ERRO'
return result
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}
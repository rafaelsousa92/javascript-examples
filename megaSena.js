const numerosDaSorte = [];
const min = 1;
const max = 60;

function megaSenaFuncional(araryDeNumeros) {
  const valor = Math.floor(Math.random() * (max - min + 1)) + min;
  if (araryDeNumeros.length >= 6) {
    return araryDeNumeros;
  }
  if (araryDeNumeros.includes(valor)) {
    return megaSenaFuncional(araryDeNumeros);
  }
  return megaSenaFuncional([...araryDeNumeros, valor]);
}

console.log(megaSenaFuncional(numerosDaSorte));

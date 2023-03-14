const numeros = [5, 15, 30, 70, 2, 4];

const produto = numeros.reduce(function(acumulador, valorAtual) {
    console.log(acumulador, valorAtual);
    return acumulador * valorAtual;
}, 1);

console.log(produto);
const carrinho = [
	'{"nome" : "Borracha" , "preco" :  3.45 }',
	'{"nome" : "Caderno" ,  "preco" : 13.90 }',
	'{"nome" : "Lápis" ,    "preco" :  2.50 }',
	'{"nome" : "Caneta" ,   "preco" :  7.50 }',
];

const precos = carrinho.map(item => JSON.parse(item).preco);

const nomes = carrinho.map(item => JSON.parse(item).nome);

console.log(precos);

console.log(nomes);

console.table(carrinho);

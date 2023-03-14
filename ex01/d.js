const alunos = [
	{Nome: 'Claudia', Nota:8.6,  Bolsista: false},
	{Nome: 'Carlos',  Nota:7.9,  Bolsista: true },
	{Nome: 'Edu',     Nota:9.5,  Bolsista: false},
	{Nome: 'Eloisa',  Nota:7.55, Bolsista: true },
]

const somaNotas = alunos.map(aluno => aluno.Nota)
     .reduce ((acumulador, valorAtual) => {
    console.log(acumulador, valorAtual);
    return acumulador + valorAtual;
}, 0);

console.log(somaNotas);

//--------------------------------------
const todosBolsistas = alunos.map(aluno => aluno.Bolsista)
                             .reduce((acumulador, valorAtual) => {
                                console.log(acumulador, valorAtual);
                                return acumulador && valorAtual;
                            });
console.log('Todos recebem bolsa?', todosBolsistas ? 'Sim' : 'Não');

//------------
const algumBolsista = alunos.map(aluno => aluno.Bolsista)
                             .reduce((acumulador, valorAtual) => acumulador || valorAtual);
console.log('Pelo menos um aluno recebe bolsa?', algumBolsista ? 'Sim' : 'Não');
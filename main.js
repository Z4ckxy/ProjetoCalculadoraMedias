const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./Imagens/rostofesta.png" alt="Emoji Celebrando">'
const imgReprovado = '<img src="./Imagens/emojiTriste.png" alt="Emoji Triste">'
const atividades = [];
const notas = [];
const spanAprovado = '<span<span class="resultado aprovado"> Aprovado</span>'
const spanReprovado = '<span<span class="resultado reprovado"> Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida`)
    } else {
        
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;
    
    linhas += linha;
    };


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaMediaFinal(){
    const mediafinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML = mediafinal;
    document.getElementById('mediaFinalResultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;
};

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    };
    
    return somaDasNotas / notas.length;
}
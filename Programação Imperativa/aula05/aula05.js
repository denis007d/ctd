// Calculadora Nível - I

// Função Adicionar
function adicionar(a, b) {
    return console.log(a + b);
}

// Função Subtrair
function subtrair(a, b) {
    return console.log(b - a);
}

// Função Multiplicar
function multiplicar(a, b) {
    return console.log(a * b);
}

// Função Dividir
function dividir(a, b) {
    return console.log(a / b);
}




// Calculadora Nível - II

console.log ("-------------- Teste de Operações / Calculadora --------------")
// Execução de adição e subtração.
adicionar(2,3);
subtrair(4,5);

// Execução de multiplicação.
multiplicar(5,8);

// Execução de divisão.
dividir(4,2);

// Execução de divisão com um dos parâmetros igual a zero.
dividir(4,0);   // Recebendo um valor infinity
dividir(0,7);   // Recebendo um valor zero

// Calculadora Nível - III

function quadradoDoNumero(n) {
    return multiplicar(n,n);
}
console.log(quadradoDoNumero(5))


// Média de três números.

function mediaDeTresNumeros(a, b, c){
    let soma = (adicionar(a,b))
    return dividir(adicionar(soma,c), 3)
}
console.log(mediaDeTresNumero(2,4,6))

// Porcentagem

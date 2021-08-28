// Práticas de Estruturas Condicionais

// 01 - Função que verifica a senha.
function verifyPassword(password) {
    if (password === 1234) {
        return console.log('Acesso permitido!')
    } else {
        return console.log('Acesso negado!')
    }
}

verifyPassword(1234); // Acesso permitido!
verifyPassword(1235); // Acesso negado!
verifyPassword('1234'); // Acesso negado!

// 02 - Função que compara a e b.
function comparaInteiros(a, b) {
    if (a > b || b < a) {
        return console.log('O valor de a é maior que b.');
    } else if (a < b || b > a) {
        return console.log('O valor de a é menor que b.');
    } else {
        return console.log('O valor de a é igual a b.');
    }
}

comparaInteiros(3, 5)

// 03 - Switch case mês
let numeroMes = 9;
switch (numeroMes) {
    case 1:
        console.log('Janeiro');
        break;

    case 2:
        console.log('Fevereiro');
        break;

    case 3:
        console.log('Março');
        break;

    case 4:
        console.log('Abril');
        break;

    case 5:
        console.log('Maio');
        break;

    case 6:
        console.log('Junho');
        break;

    case 7:
        console.log('Julho');
        break;

    case 8:
        console.log('Agosto');
        break;

    case 9:
        console.log('Setembro');
        break;

    case 10:
        console.log('Outubro');
        break;

    case 11:
        console.log('Novembro');
        break;

    case 12:
        console.log('Dezembro');
        break;

    default:
        console.log('Mês informado não existente.');
        break;
}

// 04 - Reescrita do exercício 01, utilizando operador ternário.
function verifyPassword(password) {
    return console.log((password === 1234) ? 'Acesso permitido' : 'Acesso negado!');
}

verifyPassword(1234); // Acesso permitido!
verifyPassword(1235); // Acesso negado!
verifyPassword('1234'); // Acesso negado, tipo de dado diferente!


// Projeto Microondas

// Menu de opções
let microOndas = function (opcao, time) {
    

    switch (opcao) {
        case 1: // Pipoca

            const timeDefaultPipoca = 10;

            if ((time <= timeDefaultPipoca * 3) && (time > (timeDefaultPipoca * 2))) {
                console.log('Sua pipoca queimou!');
            } else if (time < timeDefaultPipoca) {
                console.log('Tempo Insuficiente!');
            } else if (time > timeDefaultPipoca * 3) {
                console.log('Kabumm!')
            } else {
                console.log('Prato pronto, bom apetite!');
            }
            break;

        case 2: // Macarrão

            const timeDefaultMacarrao = 8;

            function macarrao(time) {
                if ((time <= timeDefaultMacarrao * 3) && (time > (timeDefaultMacarrao * 2))) {
                    console.log('Seu Macarrao queimou!')
                } else if (time < timeDefaultMacarrao) {
                    console.log('Tempo Insuficiente!')
                } else if (time > timeDefaultMacarrao * 3) {
                    console.log('Kabumm!')
                } else {
                    console.log('Prato pronto, bom apetite!');
                }
            }
            break;

        case 3: // Carne

            const timeDefaultCarne = 15;

            if ((time <= timeDefaultCarne * 3) && (time > (timeDefaultCarne * 2))) {
                console.log('Sua Carne queimou!')
            } else if (time < timeDefaultCarne) {
                console.log('Tempo Insuficiente!')
            } else if (time > timeDefaultCarne * 3) {
                console.log('Kabumm!')
            } else {
                console.log('Prato pronto, bom apetite!');
            }

            break;

        case 4: // Feijão

            const timeDefaultFeijao = 12;

            if ((time <= timeDefaultFeijao * 3) && (time > (timeDefaultFeijao * 2))) {
                console.log('Seu Feijao queimou!')
            } else if (time < timeDefaultFeijao) {
                console.log('Tempo Insuficiente!')
            } else if (time > timeDefaultFeijao * 3) {
                console.log('Kabumm!')
            } else {
                console.log('Prato pronto, bom apetite!');
            }

            break;

        case 5: // Brigadeiro

            const timeDefaultBrigadeiro = 8;

            if ((time <= timeDefaultBrigadeiro * 3) && (time > (timeDefaultBrigadeiro * 2))) {
                console.log('Seu Brigadeiro queimou!')
            } else if (time < timeDefaultBrigadeiro) {
                console.log('Tempo Insuficiente!')
            } else if (time > timeDefaultBrigadeiro * 3) {
                console.log('Kabumm!')
            } else {
                console.log('Prato pronto, bom apetite!');
            }

            break;

        default: // Nenhuma das opções
            console.log('Prato inexistente!')
            break;
    }
}

// Opção de prato (n)

// 01 - Pipoca
// 02 - Macarrão
// 03 - Carne
// 04 - Feijão
// 05 - Brigadeiro

//Teste Pipoca 

microOndas(1, 22)

//Teste Macarrão 
microOndas(2, 50)

//Teste Carne
microOndas(3, 10)

//Teste Feijão 
microOndas(4, 1)

//Teste Brigadeiro 
microOndas(5, 10)
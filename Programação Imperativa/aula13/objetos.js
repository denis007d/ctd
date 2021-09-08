// // Exercícios Objetos

// let carro = {
//     nome: 'Toyota',
//     modelo: {
//         tipo: 'Corolla'},
//     ano: 2016,
//     chassi: '324FGT263GF72001',
//     ligar: function() {
//         return console.log(`Meu ${this.nome} é do ano de ${this.ano}`);
//     }
// }

// carro.ligar()

// function Carro(modeloCarro, anoCarro) {
//     this.modelo = modeloCarro;
//     this.ano = anoCarro
// }

// let meuCarro = new Carro('Corolla', 2016);
// let outroCarro = new Carro('Chevrolet', 2011)

// let arrayCarro = new Carro(['Chevrolet', 'Toyota', 'Fiat'],[2011, 2020, 2022])

// console.log(outroCarro)
// console.log(meuCarro)

// console.log(arrayCarro.modelo.unshift('Honda'))

// Exercício JSON

// let json = '{"nome":"denis","idade":21,"sexo":"masculino"}';
// let objeto = JSON.parse(json)

// console.log(objeto)

// // objeto = JSON.stringify(carro)

// // console.log(objeto.length())

// x = {};
// x.foo = "foo";
// x.papel = "blue";
// x.toJSON = function() { return "bar"; };
// var json1 = JSON.stringify(x);
// console.log(json1.papel)

let heros = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
 let nome = nome.Denis
  console.log(truthy)
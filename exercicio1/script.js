const sacolao = []


//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
/*```jsx
nome: string;
preco: number;
disponibilidade: boolean;*/

const frutas = [{
    nome: "Manga",
    preco: 2.99,
    disponibilidade: true},

    {nome: "abacate",
    preco: 4.99,
    disponibilidade: false},

    {nome: "banana",
    preco: 4.59,
    disponibilidade:false}
]
//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(frutas)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log("sacolão da feira:", sacolao)
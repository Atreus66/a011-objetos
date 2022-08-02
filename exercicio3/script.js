const pokemon = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5 ,
   }

// pokemonCopia.nome = "Squirtle";
// pokemonCopia.tipo = "Água";
pokemon.ataques = [];
pokemon.ataques.push(
    "nome: Investida",
    " dano: 40", 
    "tipo: Normal",
    " precisao: 100");

const pokemonCopia= {
    ...pokemon,
    nome: "Squirtle",
    tipo: "Água",
    ataques:[],
    };
pokemon.ataques2 = [];
pokemon.ataques2.push(
        "nome: Folha Navalha",
        "dano: 45",
        "tipo: Grama",
        "precisao: 100",
)
pokemonCopia.ataques.push(
    "nome: Jato de Água",
    "dano: 40",
    "tipo: Água",
    "precisao: 100",
)


console.log(pokemon);
console.log(pokemonCopia);
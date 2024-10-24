const fs = require('fs');

let db = {
    products: [
        {
            "name": "Iphone"
        }

    ]


}




let conteudoDoArquivo = fs.readFileSync('db.json', "utf-8");
conteudoDoArquivo = JSON.parse(conteudoDoArquivo);
conteudoDoArquivo.products.push({name: "produto 2"});

fs.writeFileSync("db.json", JSON.stringify(conteudoDoArquivo, null, 2));

console.log(conteudoDoArquivo);







/*async function retonaName() {
    for(let i = 0; i< 1000000000; i++);
    return "Jaime";

}

async function resultado() {
    let nome = await retonaName();
    console.log(nome);
}

resultado();
*/


/*result.then(function(nome) {
    firstname = nome;
    let result = retonaName();
    let firstname;
})*/

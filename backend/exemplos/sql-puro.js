const connection = require('../src/database/connection');

async function execute() {
    let products = await connection.query("SELECT * FROM product WHERE name like 'N%'", {type: "SELECT"});
    console.log(products);
}

execute();
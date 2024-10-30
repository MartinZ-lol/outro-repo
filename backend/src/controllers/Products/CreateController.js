const ProductModel = require('../../models/ProductModel')
const fs = require('fs');
const path = require("path");

module.exports = async (request, response) => {
    let {
        name,
        slug,
        price,
        description,
        stock
    } = request.body;

    let product = await ProductModel.create({
        name, slug, price, description, stock
    });

    let {images} = request.body;

    let res = await fetch(images);
    let type = res.headers.get('content-type');
    let extension = type.split('/').pop();
    let buffer = Buffer.from(await res.arrayBuffer());
    let filename = Math.random().toString(16).slice(2);
    let directory = path.resolve(`public/${slug}`);

    if(!fs.existsSync(directory)) {
        fs.mkdirSync(directory, {recursive: true});
    }
    let file = `${directory}/${filename}.${extension}`;
    console.log(file)
    fs.writeFileSync(file, buffer);

    response.status(201);
    return response.json(product);
}
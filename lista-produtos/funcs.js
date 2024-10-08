export const construirTagLi = function (product) {
    return `
        <li>Nome: ${product.name}</li>
        <li>Preço: ${product.price}</li>
        <li>Preço Com Desconto: ${product.discountPrice}</li>
        <li>Desconto: ${product.discount}%</li>
        <li>Categoria: ${product.category}</li>
        <li>Stock: ${product.stock}</li>
        <hr>
        `;        
};

export const renderProductData = function (elementoHtml, products, category) {
    for (let product of products) {

        /*if(product.stock <= 0) {
            continue;
        }*/

        if(typeof categoria === 'undefined') {

        }
       
        if(product.category.toLowerCase() === category) {
            elementoHtml.innerHTML += construirTagLi(product);
        }
   }
}
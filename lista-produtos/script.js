import descont from './function.js';
import products from './objects.js';;
import {construirTagLi, renderProductData} from './funcs.js';

let productDescont = descont(products);

let productList = document.getElementById(`product-list`);

    for (let product of productDescont) {
        productList.innerHTML += construirTagLi(product);
    }

let buttonLivros = document.getElementById('livros');

buttonLivros.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'livros');

});

let buttonCalçados = document.getElementById('calçados');

buttonCalçados.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'calçados');
});

let buttonTodos = document.getElementById('todos');

buttonTodos.addEventListener('click', function (event) {
    productList.innerHTML = '';
    for (let product of products) {
            productList.innerHTML += construirTagLi(product);
    }
});

let buttonVestuário = document.getElementById('vestuário');

buttonVestuário.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'vestuário');
});

let buttonAcessórios = document.getElementById('acessórios');

buttonAcessórios.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'acessórios');
});

let buttonEletrônicos = document.getElementById('eletrônicos');

buttonEletrônicos.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'eletrônicos');
});

let buttonEletrodomésticos = document.getElementById('eletrodomésticos');

buttonEletrodomésticos.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'eletrodomésticos');
});

let buttonMóveis = document.getElementById('móveis');

buttonMóveis.addEventListener('click', function (event) {
    productList.innerHTML = '';
    renderProductData(productList, products, 'móveis');
});
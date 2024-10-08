function aplicandoDesconto(products){
    for(let index = 0; index < products.length; index++){
        let precoDisconto = (products[index].price * products[index].discount) / 100;
        products[index].discountPrice = products[index].price - precoDisconto.toFixed(2);
    }
    
    return products;
    
    
};


export default aplicandoDesconto;
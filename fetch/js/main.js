import Address from "./components/Address.js";
import ServiceCard from "./components/ServiceCard.js";
import ServiceListing from "./components/ServiceListing.js";

const url = 'https://viacep.com.br/ws';

const formCalcularFrete = document.getElementById('calcular-frete');
const enderecoOrigem = document.getElementById('endereco-origem');
const enderecoDestino = document.getElementById('endereco-destino');

formCalcularFrete.addEventListener('submit', function(event) {
    event.preventDefault();

    let cepOrigem = event.target.querySelector('#cep-origem');

    fetch(`${url}/${cepOrigem.value}/json`).then(function(response) {
        return response.json();
    }).then(function(responseBody) {
        enderecoOrigem.innerHTML = Address(responseBody)
    });

    let cepDestino = event.target.querySelector('#cep-destino');

    fetch(`${url}/${cepDestino.value}/json`).then(function(response) {
        return response.json();
    }).then(function(responseBody) {
        enderecoDestino.innerHTML = Address(responseBody);
    });


    fetch('js/db.json').then(function(response) {
        return response.json();
    }).then(function(responseBody) {

        ServiceListing({
            data: responseBody,
            cepOrigem: cepOrigem,
            cepDestino: cepDestino
        });

    });

});


/**
 <div class="service-card">
    <p class="service-title text-[16px] ">Serviço <strong>Básico</strong></p>
    <p class="service-info">Prazo <strong>10 dias</strong></p>
    <p class="service-price">
        <span class="old-price text-gray-400">R$ 30,59</span>
        <span class="new-price font-bold">R$ 22,87</span>
    </p>
    <p class="service-date">Data da postagem <strong>16/09/2024</strong></p>
</div>
 */
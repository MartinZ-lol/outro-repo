
let formContato = document.getElementById('form-contato');
let url = 'https://webhook.site/9edb03be-7b3b-4c3e-a6ca-91671155ba4c';

formContato.addEventListener('submit', function(event) {
    event.preventDefault();
4
    let inputName = formContato.querySelector('#name');
    let inputEmail = formContato.querySelector('#email');
    let inputMessage = formContato.querySelector('#message');

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "chave-secreta": "28uy4he2oin98h9ioh"
        },
        body: JSON.stringify({
            name: inputName.value,
            email: inputEmail.value,
            message: inputMessage.value
        })
    }

    fetch(url, options).then(function(response) {
        return response.text();
    }).then(function(responseBody) {
        console.log(responseBody);
    });

})
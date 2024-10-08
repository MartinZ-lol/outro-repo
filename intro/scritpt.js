let tagH1 = document.getElementsByTagName('h1');

tagH1 = tagH1[0];

//console.log(tagH1.textContent);
//console.log(tagH1.innerText);
//console.log(tagH1.innerHTML);
//console.log(tagH1.outerHTML);

let tagP1 = document.getElementById('texto-p1');

const mostraAlert = () => {
    alert(123);
}

tagP1.addEventListener('mouseover', mostraAlert);

let tagButton = document.getElementById('my-button')

tagButton.addEventListener('click', () => {
    tagH1.textContent = 'Israel'
    tagH1.style.color = 'blue'
    tagH1.style.backgroundColor = 'gray'
});

let tagA = document.querySelector('a');

tagA.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.style.color = 'red';
});


let novaTag = document.createElement('h2');
novaTag.textContent = "Martins"
novaTag.classList.add('text-bold');

tagH1.appendChild(novaTag)
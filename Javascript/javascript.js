window.onload = function () {
    var teste = document.getElementById('search-bar');
    console.log(teste);
    teste.onclick = function () {
        teste.classList.add('wide');
    }
    teste.addEventListener('focusout', (event) => {
        teste.classList.remove('wide')
    });
}



window.onload = function () {
    var teste = document.getElementById('search-bar');
    var teste2 = document.getElementById('search-bar2');
    console.log(teste);
    teste.onclick = function () {
        teste.classList.add('wide');
        
    }
    teste.addEventListener('focusout', (event) => {
        teste.classList.remove('wide')


    });
    teste2.onclick = function () {
        teste2.classList.add('wide');
        
    }
    teste2.addEventListener('focusout', (event) => {
        teste2.classList.remove('wide')


    });
}



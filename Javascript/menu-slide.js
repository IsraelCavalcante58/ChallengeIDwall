
    var botaoMenu = document.getElementById('openSidebarMenu');
    var spinner1 = document.getElementById('spinner1');
    var spinner2 = document.getElementById('spinner2');
    var spinner3 = document.getElementById('spinner3');
    console.log(spinner1);
    console.log(spinner2);
    console.log(spinner3);
    botaoMenu.onclick = function () {
        spinner1.classList.toggle('spinner-inactive')
        spinner2.classList.toggle('spinner-inactive')
        spinner3.classList.toggle('spinner-inactive')
    }

window.onload = function(){
    var botaoMenu = document.getElementById('openSidebarMenu');
    botaoMenu.onclick = function () {
        var botaoSpinner = document.getElementsByClassName('spinner');
        console.log(botaoSpinner);
        botaoSpinner.style.color = "black";
    }
}
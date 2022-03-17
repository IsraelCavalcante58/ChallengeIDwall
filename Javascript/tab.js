var chartStatus = document.querySelectorAll('div.chart-status')
var chartStatusSpan = document.querySelectorAll('span.chart-status')
var tableStatus = document.getElementById('table-status')
var tableList = document.getElementById('table-list')
var containerMainContent = document.getElementById('container-main-content')
console.log(tableList)

var resumoGeral = document.getElementById('tab1');
var listaProtocolo = document.getElementById('tab2');
    
resumoGeral.onclick = function () {
    containerMainContent.classList.remove('box-shadow-inactive');

    tableList.classList.remove('tab-list')
    tableStatus.classList.add('tab-inactive')
    if (!resumoGeral.classList.contains('tab-selected')){
        resumoGeral.classList.add('tab-selected');
        listaProtocolo.classList.remove('tab-selected');
        for (var i = 0; i < chartStatus.length; i++) {
            chartStatus[i].classList.remove('tab-inactive')
        }
        for (var i = 0; i < chartStatusSpan.length; i++) {
            chartStatusSpan[i].classList.remove('tab-inactive')
        }
        for (var i = 0; i < chartStatusSpan.length; i++) {
            chartStatus[i].style.marginTop
        }
    }
}
listaProtocolo.onclick = function () {
    containerMainContent.classList.add('box-shadow-inactive');
    tableList.classList.add('tab-list');
    if (!listaProtocolo.classList.contains('tab-selected')){
        listaProtocolo.classList.add('tab-selected');
        resumoGeral.classList.remove('tab-selected');
        tableStatus.classList.remove('tab-inactive');
        for (var i = 0; i < chartStatus.length; i++){
            chartStatus[i].classList.add('tab-inactive')
        }
        for (var i = 0; i < chartStatusSpan.length; i++){
            chartStatusSpan[i].classList.add('tab-inactive')
        }
}
}

    
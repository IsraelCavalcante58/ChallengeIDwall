var chartStatus = document.querySelectorAll('div.chart-status')
var chartStatusSpan = document.querySelectorAll('span.chart-status')
console.log(chartStatus);
console.log(chartStatusSpan);
var resumoGeral = document.getElementById('tab1');
var listaProtocolo = document.getElementById('tab2');
    
    resumoGeral.onclick = function () {
        if (!resumoGeral.classList.contains('tab-selected')){
            resumoGeral.classList.add('tab-selected');
            listaProtocolo.classList.remove('tab-selected');
            for (var i = 0; i < chartStatus.length; i++) {
                chartStatus[i].classList.remove('tab-inactive')
            }
            for (var i = 0; i < chartStatusSpan.length; i++) {
                chartStatusSpan[i].classList.remove('tab-inactive')
            }
        }
    }
    listaProtocolo.onclick = function () {
        if (!listaProtocolo.classList.contains('tab-selected')){
            listaProtocolo.classList.add('tab-selected');
            resumoGeral.classList.remove('tab-selected');
            for (var i = 0; i < chartStatus.length; i++){
                chartStatus[i].classList.add('tab-inactive')
            }
            for (var i = 0; i < chartStatusSpan.length; i++){
                chartStatusSpan[i].classList.add('tab-inactive')
            }
        }
}

    
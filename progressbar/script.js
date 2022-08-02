var Probar = document.getElementById('probar');
var PercentArr = ['10%','20%','50%','100%']
var index = -1
function progress(){
            index++
            Probar.style.width = PercentArr[index]
            if(index >= PercentArr.length-1)
                clearInterval(stop)
}
var stop = setInterval(progress, 2000)
var leonardo = window.document.getElementById("leonardo") 
var samanta = window.document.getElementById("samanta") 
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")
var setadiretia = window.document.getElementById("setadireta")


function  RolarParaDireita() {
    leonardo.style= "display:none"
    bruna.style = "display: flex"
    setadiretia.style ="display :none "
    setaesquerda.style= "display: flex;  margin-top: 55px; margin-left: 50px"
    


}

function RolarParaEsquerda() {

    leonardo.style = "display : felx"
    bruna.style = "display : none"
    setadiretia.style = "display : felx"
    setaesquerda.style = "display : none"
}
function main() {
    time()
    obterData()
    idade()
    mudarTela()
}

var anoagr, mesagr, diaagr, horaagr, minutosagr, milissegundosagr, dia, ano, mes, hora, minutos
var input = document.querySelector(".Input")
var titulo = document.querySelector("#titulo")
var assinatura = document.querySelector("#assinatura")
var container = document.querySelector(".container")
var suaIdade = document.querySelector("#SuaIdade")
var voltar = document.querySelector("#voltar")

function time() {
    now = new Date()
    anoagr = now.getFullYear()+1
    mesagr = now.getMonth()+1
    diaagr = now.getDate()
    horaagr = now.getHours()
    minutosagr = now.getMinutes()
    segundosagr = now.getSeconds()
    milissegundosagr = now.getMilliseconds()
    setTimeout('time()',500)
}

function obterData() {
    var inputData = document.getElementById("Data")
    var data = inputData.value
    var inputHorario = document.getElementById("Horario").value;
    var horario = inputHorario.split(":")
    hora = horario[0]
    minutos = horario[1]
    var dataSelecionada = new Date(data)
    dia = dataSelecionada.getDate()+1
    ano = dataSelecionada.getFullYear()+1
    mes = dataSelecionada.getMonth()+1
        
}

function idade() {

    
    var anoidade = anoagr - ano
    var mesidade = mesagr - mes
    var diaidade = diaagr - dia
    var horaidade = horaagr - hora
    var minutosidade = minutosagr - minutos
    segundosagr += milissegundosagr/1000
    minutosidade += segundosagr/60
    horaidade += minutosidade/60
    diaidade += horaidade/24
    mesidade += diaidade/30
    anoidade += mesidade/12
    var decimal = anoidade%Math.floor(anoidade)*10000000000000000
    anoidade = Math.floor(anoidade)
    document.getElementById("decimal").innerHTML = "."+decimal
    document.getElementById("idade").innerHTML = anoidade
    setTimeout('idade()',500)
}

function mudarTela() {
    input.style.display = "none"
    suaIdade.style.display = "flex"
    container.style.display = "flex"
    titulo.style.display = "none"
    assinatura.style.display = "none"
    voltar.style.display = "block"
}

function Voltar(){
    input.style.display = "flex"
    titulo.style.display = "block"
    assinatura.style.display = "block"
    voltar.style.display = "none"
    container.style.display = "none"
    suaIdade.style.display = "none"
}
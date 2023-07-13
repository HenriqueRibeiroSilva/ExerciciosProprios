let num = document.querySelector('input#numN1')
let lista = document.querySelector('select#caixadevalores')
let res = document.getElementById('res')
let adc = document.getElementById('adicionar')
let fin = document.getElementById('finalizar')
let lim = document.getElementById('limpar')
let valores = []

function isNumero(n) {
    if (Number(n)>=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=`Em analise \u{26A1}`
    } else {
        alert('Valor invalido ou já adicionado a lista!')
    }
    num.value = ''
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
        num.value = ''
        num.focus()
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma/(valores.length)
            if (valores[pos]> maior) {
                maior = valores[pos]
            } if(valores[pos]<menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML = `<p>Temos ${tot} numeros.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(01)}</p>`

    }
}
function clean(){
    lista.innerHTML =''
    num.focus()
    res.innerHTML=`Em analise \u{26A1}`
}

function entrou(){
    adc.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.473)"
}
function saiu(){
    adc.style.boxShadow = "0px 0px 0px black"
}

function entrou1(){
    fin.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.473)"
}
function saiu1(){
    fin.style.boxShadow = "0px 0px 0px black"
}

function entrou2(){
    lim.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.473)"
}
function saiu2(){
    lim.style.boxShadow = "0px 0px 0px black"
}


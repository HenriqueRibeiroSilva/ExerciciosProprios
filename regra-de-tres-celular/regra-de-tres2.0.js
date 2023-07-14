let num01 = document.getElementById('num001')
let num02 = document.getElementById('num002')
let variavel01 = document.getElementById('variavel1')
let variavel02 = document.getElementById('variavel2')
let res= document.getElementById('res')

function resolver() {

  if (isNaN(variavel01.value)) {
    res.innerHTML = '';
    let p1 = document.createElement('p');
    p1.textContent = `${Number(num02.value)}${variavel01.value} = ${Number(num01.value)} * ${Number(variavel02.value)}`;
    res.appendChild(p1);
    let p2 = document.createElement('p');
    p2.textContent = `${Number(num02.value)}${variavel01.value} = ${Number(num01.value)* Number(variavel02.value)}`;
    res.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = `${variavel01.value} = ${Number(num01.value)*Number(variavel02.value)} / ${Number(num02.value)}`;
    res.appendChild(p3);
    let p4 = document.createElement('p');
    p4.textContent = `${variavel01.value} = ${(Number(num01.value)*Number(variavel02.value)/Number(num02.value)).toFixed(2)}`;
    res.innerHTML = p1.outerHTML + p2.outerHTML + p3.outerHTML + p4.outerHTML;
  } else {
    res.innerHTML= '';                                                             
    let p1 = document.createElement('p');
    p1.textContent = `${Number(num01.value)}${variavel02.value} = ${Number(num02.value)} * ${Number(variavel01.value)}`;
    res.appendChild(p1);
    let p2 = document.createElement('p');
    p2.textContent = `${Number(num01.value)}${variavel02.value} = ${Number(num02.value)*Number(variavel01.value)}`;
    res.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = `${variavel02.value} = ${Number(num02.value)*Number(variavel01.value)} / ${Number(num01.value)}`;
    res.appendChild(p3);
    let p4 = document.createElement('p');
    p4.textContent = `${variavel02.value} = ${(Number(num02.value)*Number(variavel01.value)/Number(num01.value)).toFixed(2)}`;
    res.appendChild(p4);
    res.innerHTML = p1.outerHTML + p2.outerHTML + p3.outerHTML + p4.outerHTML;
  }   
}

function updateRuleOfThree() {
    let ruleOfThree = document.getElementById('mostrador');
    let num01 = document.getElementById('num001').value;
    let num02 = document.getElementById('num002').value;
    let variavel01 = document.getElementById('variavel1').value;
    let variavel02 = document.getElementById('variavel2').value;
    
    ruleOfThree.innerHTML = `${num01} ----------- ${num02}`;
    ruleOfThree.innerHTML += `<br>X`
    ruleOfThree.innerHTML += `<br>${variavel01} ----------- ${variavel02}`
}
  
function limpar() {
    res.innerHTML = '';
    num01.value = '';
    num02.value = '';
    variavel01.value = '';
    variavel02.value = '';
    mostrador.innerHTML ='';
    num01.focus();  
}
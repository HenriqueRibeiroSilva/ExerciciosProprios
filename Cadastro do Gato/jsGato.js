var nome = document.getElementById('id-input-nome')
var vulgo = document.getElementById('id-input-vulgo')
var idade = document.getElementById('id-input-idade')
var saram = document.getElementById('id-input-saram')
var seção = document.getElementById('id-input-seção')


function aceito() {
    alert('Termos aceitos com sucesso!')
}

function recuso() {
    alert('Vai tomar no rabo então!')
    limparform()
}

function limparform() {
    nome.value = "";
    vulgo.value = "";
    idade.value = "";
    saram.value = "";
    seção.value = "";
    nome.focus()
}

function enviarform() {

    print()

    window.open(
        "https://png.pngtree.com/png-vector/20240531/ourmid/pngtree-cute-monkey-giving-thumb-up-png-image_12580205.png",
        "_blank"
    );
}
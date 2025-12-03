const inputDia = document.querySelector("#dia")

const btnEnviar = document.querySelector("#btnEnviar")

const pResultado = document.querySelector("#resultado")

function enviar() {
    let dia = parseInt(inputDia.value)

    let patente = ""

    if (dia == 1) {
        patente = "Pessoa Normal"
    } else if (dia == 2) {
        patente = "Pessoa Incomum"
    } else if (dia == 3) {
        patente = "Já descarreguei Tudo"
    } else if (dia >= 4 && dia <= 6) {
        patente = "Já tá só a Carne"
    } else if (dia >= 7 && dia <= 10) {
        patente = "Não Aguento mais"
    } else if (dia == 11) {
        patente = "Soldado 1"
    } else if (dia == 12) {
        patente = "Soldado 2"
    } else if (dia == 13) {
        patente = "Soldado 3"
    } else if (dia >= 14 && dia <= 21) {
        patente = "Cadê o Jamanta?"
    } else if (dia == 22) {
        patente = "Persistente Bronze"
    } else if (dia == 23) {
        patente = "Persistente Prata"
    } else if (dia == 24) {
        patente = "Persistente Ouro"
    } else if (dia == 25) {
        patente = "Só o Vento"
    } else if (dia == 26) {
        patente = "Fuzileiro"
    } else if (dia == 27) {
        patente = "Broxou"
    } else if (dia == 28) {
        patente = "Descabela Broxado"
    } else if (dia == 29) {
        patente = "Sou Destransante"
    } else if (dia == 30) {
        patente = "Jamanta pré-sigma"
    } else if (dia == 31) {
        patente = "Jamanta Sigma"
    } else if (dia > 31) {
        dia = 31
        inputDia.value = "31"
    }

    pResultado.innerHTML = `Patente: ${patente}`
}

btnEnviar.addEventListener("click", enviar)
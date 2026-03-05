function digitar(caractere) {
    let visor = document.getElementById("visor");

    if (visor.value === "0" || visor.value === "Erro") {
        visor.value = caractere;
    } else {
        visor.value += caractere;
    }
}

function limpar() {
    document.getElementById("visor").value = "0";
}

function apagar() {
    let visor = document.getElementById("visor");
    visor.value = visor.value.slice(0, -1);

    if (visor.value === "") {
        visor.value = "0";
    }
}

function calcular() {
    let visor = document.getElementById("visor");

    try {
        let expressao = visor.value.replace('%', '/100');
        let resultado = Function("return " + expressao)();

        if (!isFinite(resultado)) {
            visor.value = "Erro";
        } else {
            visor.value = resultado;
        }

    } catch {
        visor.value = "Erro";
    }
}

function raiz() {
    let visor = document.getElementById("visor");
    let valor = parseFloat(visor.value);

    if (valor < 0) {
        visor.value = "Erro";
    } else {
        visor.value = Math.sqrt(valor);
    }
}

function potencia() {
    let visor = document.getElementById("visor");
    let valor = parseFloat(visor.value);
    visor.value = Math.pow(valor, 2);
}
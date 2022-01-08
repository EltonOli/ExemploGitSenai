var listaDePecas = ["Filtro de Ar", "Motor", "Amortecedor"];

    if(listaDePecas.length < 2) {
        // É possível cadastrar peças?
        console.log("É possível cadastrar mais peças?")
    }
    else {
        console.log("Lista sem espaço, impossível cadastrar!");
    }

let peso = 150;
    if(peso < 100) {
        console.log("A peça deve pesar no mínimo 100g")
    }
    else {
        console.log("A peça possui peso adequado")
    }

let nomePeca = "calota";
    if(nomePeca.length > 3) {
        console.log("Nome da peça ok, Pode cadatrar!")
    } else if (nomePeca.length ==0) {
        console.log("O nome da peça não pode ser vazio.")
    } 
    else {
        console.log("O nome da peça deve ter mais de 3 caracteres, digite um nome válido!")
    }

switch (nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio, Insira o nome da peça!")
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais de 3 caracteres, digite um nome válido!  ")
        break;
    default:
        console.log("Nome da peça ok, pode cadastrar!")
}










const prompt = require("prompt-sync")();

let aux;

const GERAR_LETRA = (data) => {
    let aux_letra = [];
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    letras = letras.split("");
    
    for(let i = 0; i < 4; i++) {
        aux_letra.push(letras[Math.floor(Math.random() * letras.length)]);

    }
    
    aux_letra = aux_letra.join("");
    
    data = data + aux_letra;
    return data;
}

const CREATE = () => {
    let jogo = {};
    let aux_preco;

    jogo.id = Math.floor((Math.random() * 10000) + 1);
    jogo.id = GERAR_LETRA(jogo.id);

    do{
        jogo.nome = prompt("Nome desse jogo: ");

        if(jogo.nome == "") {
            console.log("não pode ser vazio.");
    
        }
    } while(!jogo.nome);

    do{
        jogo.ano_lancamento = parseInt(prompt("Ano de lançamento: "));

        if(jogo.ano_lancamento == "") {
            console.log("não pode ser vazio.");
    
        } else if(
            isNaN(jogo.ano_lancamento) ||
            jogo.ano_lancamento < 1958 ||
            jogo.ano_lancamento > 2024
        ) {
            console.log("Ano inválido. ");
            jogo.ano_lancamento = "";

        }
    } while(!jogo.ano_lancamento);

    do{
        jogo.duracao = prompt("duração média de jogo(hh:mm): ").replaceAll(":", ".");
        jogo.duracao = Number(jogo.duracao);

        if(jogo.duracao == "") {
            console.log("não pode ser vazio.");
    
        } else if(
            isNaN(jogo.duracao) ||
            jogo.duracao < 0
        ) {
            console.log("Duração inválida ");
            jogo.duracao = "";

        }
    } while(!jogo.duracao);

    do{
        jogo.preco = prompt("preço: ").replaceAll(",", ".");
        jogo.preco = Number(jogo.preco);

        if(
            isNaN(jogo.preco) ||
            jogo.preco > 0 ||
            jogo.preco < 0
    ) {
            console.log("Preço inválido. ");
            jogo.preco = "";

        } else {
            aux_preco = true;
        }
    } while(!aux_preco);

    do{
        jogo.estudio = prompt("Estudio desse jogo: ");

        if(jogo.estudio == "") {
            console.log("não pode ser vazio.");
    
        }
    } while(!jogo.estudio);
    
    do{
        aux = prompt("Têm sequência('s' para sim e 'n' para não): ");
        let count;
        let sequencias =[];

        if(aux == "s") {
            do {
                count  = parseInt(prompt("Quantas sequencias: "));

                if(
                    count == "" ||
                    count < 1 ||
                    isNaN(count)
                ) {
                    count = "";

                } else {
                    for(let i = 0; i < count; i++) {
                        let aux_sequencia = prompt(`digite a ${i + 1}* sequencia: `);
                        sequencias.push(aux_sequencia);

                    }

                    jogo.sequencia = sequencias;

                }
            } while(!count);
    
        } else if(aux == "n") {

            return jogo;
        } else {
            aux = "";
    
        }
    } while(!aux);

    return jogo;
}

const UPDATE = (data) => {
    console.log(data);

    let resposta = prompt("Escolha o nome do jogo que deseja atualizar: ");
    let aux_rm = -1;
    let aux_rm2 = -1;

    for(let i = 0; i < data.length; i++) {
        if(data[i].nome == resposta) {
            aux_rm = i;

        }
    }

    if(aux_rm != -1) {
        for(let i = 0; i < data.length; i++) {
            if(data[i].nome == resposta) {
                console.log(data[i]);

            }
        }

        resposta = prompt("Escolha o id do jogo que deseja atualizar: ");

        for(let i = 0; i < data.length; i++) {
            if(data[i].id == resposta) {
                aux_rm2 = i;

            }
        }
    
        if(aux_rm2 != -1) {
            data.splice(aux_rm2, 1, CREATE());
    
        } else {
            console.log("Id inválido");

        }
        

    } else {
        console,log("Nome inválido");

    }

    return data;
}

const DELETE = (data) => {
    console.log(data);

    let resposta = prompt("Escolha o nome do jogo que deseja remover: ");
    let aux_rm = -1;
    let aux_rm2 = -1;

    for(let i = 0; i < data.length; i++) {
        if(data[i].nome == resposta) {
            aux_rm = i;

        }
    }

    if(aux_rm != -1) {
        for(let i = 0; i < data.length; i++) {
            if(data[i].nome == resposta) {
                console.log(data[i]);

            }
        }

        resposta = prompt("Escolha o id do jogo que deseja remover: ");

        for(let i = 0; i < data.length; i++) {
            if(data[i].id == resposta) {
                aux_rm2 = i;

            }
        }
    
        if(aux_rm2 != -1) {
            data.splice(aux_rm2, 1);
    
        } else {
            console.log("Id inválido");
            
        }
        

    } else {
        console,log("Nome inválido");
        
    }

    return data;
}

module.exports = {
    CREATE,
    UPDATE,
    DELETE
}
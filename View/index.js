const { CREATE, UPDATE, DELETE } = require("../Model/crud.js");
const prompt = require("prompt-sync")();

let save = [];
let saida = false;

do{
    let resposta = prompt("'ADD', 'UP', 'RM', 'Q'. Resposta: ").toLowerCase().trim();
    
    switch (resposta) {
        case "add":
            save.push(CREATE());
            resposta = "";
            
        break;
            
        case "up":
            save = UPDATE(save);
            resposta = "";

        break;

        case "rm":
            save = DELETE(save);
            resposta = "";

        break;

        case "q":
            saida = true;

        break;
    }
} while(!saida);

console.log("Lista final:", save);
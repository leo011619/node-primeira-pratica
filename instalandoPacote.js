const {cpf} = require("cpf-cnpj-validator");



let num = cpf.generate();
num = cpf.format(num);

let isValid = cpf.isValid(num);

module.exports = {cpf:num, isValid, message: "Um cpf aleatorio para vc :D"};

// . ? * + - ^ $ | [] {} () \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))
// Meta-caracteres precisam da contrabarra \ para serem referenciados
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
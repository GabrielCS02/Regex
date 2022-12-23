const textoUmaLinha = '...' // aspas simples ou duplas

const textoMultiLinha = `
    linha 1
    linha 2
`

// cuidado com o tab!
console.log('	'.match(/\s/g))

//regex entende o tab como três espaços, ou seja, é um conteúdo vazio que contem três espaços
//É necessário configurar o VSCode ou a IDE de preferência para que o tab seja uma identação de TAB e não seja utilizados espaços vazios ao apertar tab

//Não selecionar uma parte do código para rodar, é sempre necessário rodar o código todo para não retornar problemas.
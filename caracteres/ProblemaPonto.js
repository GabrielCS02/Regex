const texto = 'Bom\ndia'
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi)) // o ponto não engloba o \n

// dotall - algumas linguagens tem flag /exp/s, mas o JS não!
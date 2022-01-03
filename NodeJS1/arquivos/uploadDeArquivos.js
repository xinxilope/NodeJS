const fs = require('fs')

fs.readFile('C:\\Users\\Administrador\\Desktop\\Codigos\\Codigos estagio\\NodeJS\\NodeJS1\\assets\\salsicha.jpg', (erro, buffer) => {
    console.log("imagem buffada")
    
    fs.writeFile('C:\\Users\\Administrador\\Desktop\\Codigos\\Codigos estagio\\NodeJS\\NodeJS1\\assets\\salsicha2.jpg', buffer, (erro) => {
        console.log("imagem escrita")
    })
})
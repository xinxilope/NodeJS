const fs = require('fs')

fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
    console.log("imagem buffada")

    fs.writeFile('./assets/salsicha2.jpg', buffer, erro => {
        console.log("imagem escrita")
    })
})
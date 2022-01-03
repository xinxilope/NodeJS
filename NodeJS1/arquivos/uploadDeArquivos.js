const fs = require('fs')

fs.createReadStream('C:\\Users\\Administrador\\Desktop\\Codigos\\Codigos estagio\\NodeJS\\NodeJS1\\assets\\salsicha.jpg')
    .pipe(fs.createWriteStream('C:\\Users\\Administrador\\Desktop\\Codigos\\Codigos estagio\\NodeJS\\NodeJS1\\assets\\salsicha-stream.jpg'))
    .on('finish', () => console.log("imagem escrita"))
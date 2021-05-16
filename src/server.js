const express = require ('express')
const server = express()
const routers = require ('./routers')
const path = require ('path')

// Usando template engine
server.set('view engine','ejs')

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//Habilitando arquivos estaticos
server.use(express.static("public"))
 
//Usar o req.body (Habilitando)
server.use(express.urlencoded({extended: true})); 
server.use(express.json());   

//Rotas
server.use(routers)

server.listen(3000, () => console.log('Server On'))
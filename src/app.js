const express = require('express')
const {Server, Socket} = require('socket.io')

const app = express()

const PORT = process.env.PORT || 8080
app.set('views', './views')
app.set('view engine', 'ejs' )

const server = app.listen(PORT, ()=>{
    console.log(`server up ${PORT}`)
})
const io = new Server(server)

app.use(express.static('./src/public'))

io.on('connection', socket => socket.broadcast.emit('NewClientJustEntered'))
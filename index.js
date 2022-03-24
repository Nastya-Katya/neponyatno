// создаем HTTP-сервер

const { connected } = require('process')
const { Socket } = require('socket.io')

//подключаем к серверу socket.IO
const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})
const log = console.log

const registrMessengeHandlers = require('./handlers/messangeHandlers')
const registrUserHandlers = require('./handlers/userHandlers')
//получаем обработчика событий

//данная функция выполняется при подключении каждого сокета
// обычно, один клиент = один сокет

const onConnection = (Socket) => {

    //Выводим сообщение о подключении пользователя
    log ('user connected')


    socket.on('disconnect', ()=>{
        //выводим сообщение
        log (`'User disconnected`)
    })

}

//обрабатываем подключение
io.on('connection', onConnection)

//запускаем сервер
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    log(`Server ready connect/ Port: ${PORT}`)
})



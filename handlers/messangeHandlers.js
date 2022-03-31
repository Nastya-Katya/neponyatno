const {nanoid} = require ('nanoid')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/messenges.json')
const db = low(adapter)

db.defaults({
    mesenges: [
        {
            mesageid: '1',
            userid: '1',
            sanderName: 'Bob',
            messageText: 'Привет, Вася!',
            createdAt: '2021-01-14',
            avatar: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg',
            


        },

        {
            mesageid: '2',
            userid: '2',
            sanderName: 'Vasya',
            messageText: 'Привет, Боб!',
            createdAt: '2021-01-14',
            avatar: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg', 

        }

    ]
}).write()

module.exports = (io,socket) => {
    const getMessages = () => {
        const messages = db.get('mesenges').value()
        console.log(messages)
        io.emit('messages', messages)

    }

    const addMessages = (messsage) => {
        db.get('mesenges')
        .push({
            messageId: nanoid(8),
            createdAt: new Date(),
            ...messsage
        })
.write()
getMessages()


    }
    socket.on('message:get', getMessages)
    socket.on('message:add', addMessages)
}


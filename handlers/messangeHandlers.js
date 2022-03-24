const {nanoid} = reqvire ('nanoid')

const low = require('lowbd')
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
    const getMesseges = () => {
        const messages = b.get('messages').value()
        io.emit('messanges', messages)

    }

    const addMessages = (messsage) => {
        db.get('messages')
        .push({
          messageId: nanoid(8),
creaded: new Data(),
...message
        })
.write()
getMessages()


    }
    socket.on('message:get', getMessages)
    socket.on('message:add', getMessage)
}


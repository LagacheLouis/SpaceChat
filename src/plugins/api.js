import io from 'socket.io-client';

const url = 'https://bddi-2019-chat.herokuapp.com';
// const url = 'http://10.12.0.164:3000'

const socket = io.connect(url);

const api = {
    get connected() {
        return socket.conected;
    },
    userRegister (username, avatar = '') {
        return new Promise((resolve, reject) => {
            socket.once('user registered', (user) => {
                resolve(user)
            })
            socket.once('error', (error) => {
                reject(error)
            })
            emitProxy('user register', {
                username,
                avatar
            });
        })
    },
    messageSend(message = ''){
        emitProxy('message new', message);
    },
    commandSend (command, value='') {
        this.messageSend(`/${command} ${value}`);
    },

    //Events
    onMessage(cb) {
        socket.on('message new', cb)
    },
    
    onUsersUpdate(cb) {
        socket.on('users update', cb)
    },

    onError (cb) {
        socket.on('chat error', cb)
    }
}

function emitProxy(event, ...args) {
    if (socket.connected) {
        socket.emit(event, ...args);
    } else {
        console.log('Socket disconected... waiting for connect... ... ... ... ... ...');
        socket.on('connect', () => {
            console.log('youpi, socket reconnected')
            socket.emit(event, ...args);
        })
    }
}

export default {
    install (Vue, options) {
        Vue.prototype.$api = Vue.$api = api;
    }
}
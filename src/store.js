import Vue from 'vue'

const store = new Vue ({
    data: {
        messages: [],
        user: null,
        users: []
    },
    created () {
        Vue.nextTick(() => { //ça va trop vite donc on ralenti
            this.$api.onMessage(({user,message}) => {
                store.message.push(data)
            })
    
            //@ts-ignore pour le $api sauf que moi il s'en fou
            this.$api.onUsersUpdate(({type, user ,users}) => {
                store.users = user
                //enhanced : join left avec le type pour faire des anims
            })
        })

    }
})

export default store
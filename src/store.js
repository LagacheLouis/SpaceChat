import Vue from 'vue'

const store = new Vue ({
    data: {
        messages: [],
        user: null,
        users: []
    },
    created () {
        Vue.nextTick(() => { //ça va trop vite donc on ralenti
            this.$api.onMessage((data) => {
                store.messages.unshift(data.message)
            })
    
            //@ts-ignore pour le $api sauf que moi il s'en fou
            this.$api.onUsersUpdate(({type, user ,users}) => {
                store.users = users
                //enhanced : join left avec le type pour faire des anims
            })

            this.$api.onError((data) => {
                //console.log('error')
                console.error('Error from API:', data)
            })
        })

    }
})

export default store
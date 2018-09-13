<template>
    <div id ="chatBox">
        <MessagesList :messages = "messages"/>
        <SendBox  @messageSent ="onMessageSent"/>
    </div>
</template>

<script>
import MessagesList from "@/components/MessagesList.vue";
import SendBox from "@/components/SendBox.vue";
export default {
    data(){
        return{
            messages:[
                'a que coucou bob ldfdfklkdffddfklkldfkl dkfdkdkfkkdjdf dfkklkdfkdfd  dfklkldffkl dflkkfldklfd fkfdlkflkdfkl  dfkldfikdfl ffdfkdflkdf fkldfkldfkl fddkfdklkldf ldfkldfkldf kkfdkkjfdf djkfjdfkdjk fdkldfkkl fdkkdfjdfk kfldlkdkld',
                'booooooonjour',
                'spam'
            ]
        }
    },
    components :{
        MessagesList,
        SendBox
    },
    methods : {
        onMessageSent(message){
            this.messages.push(message);
        }
    }
}
</script>

<style lang="scss" scoped>
    #chatBox{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>

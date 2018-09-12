<template>
    <div>
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
                'a que coucou bob',
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


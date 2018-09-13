<template>
    <div id ="chatBox">
        <MessagesList :messages= "messages"/>
        <SendBox  @messageSent="onMessageSent"/>
    </div>
</template>

<script>
import MessagesList from "@/components/MessagesList.vue";
import SendBox from "@/components/SendBox.vue";
import store from "../store";

export default {
    computed: {
        messages: () => store.messages
    },
    methods : {
        onMessageSent(message){
            // store.messages.push(message);
            this.$api.messageSend(message)
        }
    },
    components :{
        MessagesList,
        SendBox
    },
}
</script>

<style lang="scss" scoped>
    #chatBox{
        flex-grow: 1;
    }
</style>

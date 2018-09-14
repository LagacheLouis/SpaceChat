<template>
    <div id ="chatBox" class="chatbox">
        <audio src="/sound/music.mp3" type="audio/mpeg" autoplay loop  style="display:none"/>
        <MessagesList :messages="messages"/>
        <SendBox  @messageSent="onMessageSent"/>
    </div>
</template>

<script>
import MessagesList from "./MessagesList.vue";
import SendBox from "./SendBox.vue";
import store from "../store";

export default {
    computed: {
        messages: () => store.messages
    },
    methods : {
        onMessageSent(message){
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
    .chatbox {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>

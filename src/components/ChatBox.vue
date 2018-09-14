<template>
    <div id ="chatBox" class="chatbox">
        <audio src="/sound/music.mp3" type="audio/mpeg" autoplay loop  style="display:none"/>
        <MessagesList :messages="messages"/>
        <SendBox  @messageSent="onMessageSent"/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <Asteroide/>
        <div class="degrade"></div>
    </div>
</template>

<script>
import MessagesList from "./MessagesList.vue";
import SendBox from "./SendBox.vue";
import Asteroide from "./Asteroide"
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
        SendBox,
        Asteroide
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/var.scss';
.chatbox {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
    .degrade{
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;
    background-image:linear-gradient(to bottom, $background_color 0%, transparent 50%);
    z-index: 1;
    
}
</style>

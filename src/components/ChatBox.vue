<template>
    <div id ="chatBox" class="chatbox">
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
    // data() {
    //     return {
    //         messages :[
    //             'je suis un message de USER1',
    //             'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, iure!',
    //             '...',
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam repellendus asperiores necessitatibus a est sunt assumenda eaque quae neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam repellendus asperiores necessitatibus a est sunt assumenda eaque quae neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam repellendus asperiores necessitatibus a est sunt assumenda eaque quae neque.',
    //             'je suis un message de USER3'
    //         ]
    //     }
    // },
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

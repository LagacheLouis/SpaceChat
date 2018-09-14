<template>
    <div id="messagesList">
        <Message v-for="(message,index) in messages" :key="index" :message="message"/>
        <div class="degrade"></div>
    </div>
</template>

<script>
import Message from "./Message.vue"
export default {
    props:['messages'],
    components:{
        Message
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/var.scss";

 #messagesList{
     overflow-y: scroll;
          display: flex;
     flex-direction: column-reverse;
     max-height: 93vh;
     height: 93vh;
 }

 #messagesList::-webkit-scrollbar { 
    display: none; 
}
 .degrade{
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;
    background-image:linear-gradient(to bottom, $background_color 0%, transparent 50%);
 }
</style>


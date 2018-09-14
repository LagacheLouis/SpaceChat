<template>
    <div id="messagesList">
        <Message v-for="(message,index) in messages" :key="index" :message="message"/>
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
</style>


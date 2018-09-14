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
     flex-grow: 1;
     overflow-y: scroll;
     display: flex;
     display: flex;
     justify-content: flex-end;
     flex-direction: column;
 }
 .degrade{
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;
    background-image:linear-gradient(to bottom, $background_color 0%, transparent 50%);;
 }
</style>


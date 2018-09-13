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
 #messagesList{
     flex-grow: 1;
 }
</style>


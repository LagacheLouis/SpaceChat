<template>
    <div>
        <Message v-for="(message,index) in messages" :key="index" :message="message"/>
    </div>
</template>

<script>
import Message from "@/components/Message.vue"
export default {
    props:['messages'],
    components:{
        Message
    }
}
</script>

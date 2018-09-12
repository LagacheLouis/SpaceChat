<template>
    <div>
        <div>Coucou c'est le chat</div>
        <UsersList/>
        <ChatBox/>
    </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
import ChatBox from "@/components/ChatBox.vue";
export default {
    components:{
        UsersList,
        ChatBox
    }
}
</script>

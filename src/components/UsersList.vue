<template>
    <div>
        <UsersListUser v-for="(user,index) in users" :key="index" :user="user" />
    </div>
</template>
<script>
    import UsersListUser from "@/components/UsersListUser";
    import store from "../store";
    export default {
        computed: {
            users: () => store.users
        },
        components:{
            UsersListUser
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/var.scss';

    div {
        max-height: 40vh;
        margin-top: 70px;
        overflow: hidden;
        overflow-y: scroll;
    }
</style>
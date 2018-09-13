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

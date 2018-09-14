<template>
    <div>
        <UsersListUser v-for="(user,index) in users" :key="index" :user="user" />
    <div class='list-degrade'></div>
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
        margin: 70px auto 0 auto;
        overflow: hidden;
        overflow-y: scroll;
        position: relative;
        width: 70%;

        &::-webkit-scrollbar {
            position: absolute;
            background-color: rgba(255,255,255, 0.2);
            border-radius: 10px;
            width: 7px;
            // margin-right: 20px;
            right: -20px;
        }

        &::-webkit-scrollbar-thumb {
            background: blue;
            background-color: rgba(255,255,255, 0.6);
            border-radius: 10px;
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
        }
    }
</style>
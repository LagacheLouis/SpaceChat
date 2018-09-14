<template>
    <div id="lateralBox" class="lateralbox">
        <div class="user-box">
            <img src="/img/avatar.svg" alt="Le super avatar">
            <h2 class="current-user">{{ currentUser }}</h2>
        </div>
        <UsersList/>
    </div>
</template>

<script>
import store from "../store";
import UsersList from "@/components/UsersList.vue";
export default {
    components :{ 
        UsersList
    },
    computed: {
        currentUser: () => store.user.username
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/var.scss';

    .user-box {
        position: relative;
        
        img {
            width: 70%;
            margin: 0 auto;
        }

        h2 {
            padding: 12px 0;
            border: 2px #313950 solid;
            width: 100%;
            margin: 0 auto;
            position: absolute;
            background-color: $title;
        }
    }
    .current-user {
        text-transform: uppercase;
        font-family: 'title_font';
        color: $background_color;
    }

    .lateralbox{
        background-color: $red_panel_color;
        max-width: 25vw;
        min-width: 25vw;
        max-width: 25vw;
        box-shadow: 0px 15px 15px 4px black;
        z-index: 1;
    }
</style>

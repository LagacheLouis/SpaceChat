<template>
    <div id="lateralBox" class="lateralbox">
        <div class="user-box">
            <img @click="Logout" class="deco" src="/img/icone_deconnexion.svg" alt="">
            <img class="avatar"  src="/img/avatar.svg" alt="Le super avatar">
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
    },
    methods: {
        Logout() {
            location.reload();
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/var.scss';

    .user-box {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-top: 30px;

        .deco {
            cursor: pointer;
            align-self: flex-end;
            padding-right: 30px;
            transition: .25s transform;

            &:hover {
                transform: scale(0.8)
            }
        }
        
        .avatar {
            width: 70%;
            margin: 0 auto;
            transform: scaleX(-1)
        }

        h2 {
            padding: 9px 12px;
            border: 2px #313950 solid;
            margin: 0 auto;
            position: relative;
            background-color: $title;
            bottom: 31px;
            max-width: 70%;
            word-break: break-all;
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
        z-index: 2;
    }
</style>

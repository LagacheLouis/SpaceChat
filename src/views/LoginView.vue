<template>
    <div id="loginView">
        <parallaxBackground/>
        <loginForm @submit = "onFormSubmit"/>
    </div>
</template>

<script>
import ParallaxBackground from "@/components/ParallaxBackground.vue";
import LoginForm from "@/components/LoginForm.vue";
import store from "../store";

export default {
    components :{
        LoginForm,
        ParallaxBackground
    },methods :{
        onFormSubmit (username){
            this.$api.userRegister({
                username
            }).then(user => {
                store.user = user;
                this.$router.push({name: 'chat'})
            });
        },
    }
}
</script>


<style lang="scss" scoped>
    #loginView{
            height : 100vh;
    }
</style>

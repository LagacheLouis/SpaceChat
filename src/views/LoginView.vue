<template>
    <div id="loginView">
        <div>
            <div>
                <h1>SPACE</h1>
                <h1>CHATROOM</h1>
            </div>
            <loginForm @submit = "onFormSubmit"/>
        </div>
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue"
import store from "../store"

export default {
    components :{
        LoginForm
    },methods :{
        onFormSubmit (username){
            this.$api.userRegister({
                username
            }).then(user => {
                store.user = user;
                this.$router.push({name: 'chat'})
            });
        }
    }
}
</script>


<style lang="scss" scoped>
    #loginView{
            height : 100vh;
    }
</style>

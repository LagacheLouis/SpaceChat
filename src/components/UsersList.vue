<template>
    <div>
        <UsersListUser v-for="(user,index) in users" :key="index" :user="user" />
    </div>
</template>
<script>
    import UsersListUser from "@/components/UsersListUser";
    export default {
        data(){
            return{
                users : [
                    'Matchete',
                    'Planet Terror',
                    'Alien'
                ]
                
            }
        },
        components:{
            UsersListUser
        }
    }
</script>

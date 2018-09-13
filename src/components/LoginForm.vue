<template>
    <form action="" @submit.prevent="onFormSubmit">
        <input type="text" placeholder="Pseudooooo" v-model="username">
        <button><img src="/img/icone_enter.svg"/></button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        onFormSubmit() {
            if (this.username.length > 0) {
                this.$emit('submit', this.username)
            } else {

            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/var.scss';
    form{
        background-color: white;
        width: 550px;
        display: flex;
        border-radius: 30px;
        z-index: 30;
    }
    form *{
        height: 60px;
        border: none;
        background-color: transparent;
        z-index: 30;
    }
    input{
         flex-grow: 4;  
         border-right: 5px solid red;      
    }
    button{
       flex-grow: 1;
    }

</style>

<template>
    <div>
        <form action="" @submit.prevent="onFormSubmit">
            <input type="text" placeholder="Pseudooooo" v-model="username">
            <button>Login</button>
        </form>
    </div>
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
        width: 30%;
        display: flex;
        border-radius: 30px;
    }
    form *{
        height: 30px;;
        border: none;
        flex-grow: 1;
        background-color: transparent;
    }

</style>

<template>
    <form action="" @submit.prevent="onFormSubmit">
        <audio src="/sound/sound_asteroid.wav" type="audio/wav"  style="display:none"/>
        <input type="text" placeholder="Write your pseudo" v-model="username">
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
            document.querySelector('audio').play();
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
        z-index: 0;
        position: absolute;
        top: 60%;
        left: calc(50% - 275px);
        z-index: 30;
    }
    form *{
        min-height: 60px;
        max-height: 60px;
        border: none;
        background-color: transparent;
        outline: none;
    }
    input{
         flex-grow: 1;  
         border-right: 3px solid $grey_bar;    
         padding-left: 30px;
         font-family: normal_font;
         font-size: 26px;
    }

    input::-webkit-input-placeholder{
        color: $grey_bar;
    }
    button{
       width: 60px;
       cursor: pointer;
    }
    img{
        height: 30px;
        width: 30px;
        transition: 0.2s;
    }

    button:hover img{
        transform: scale(0.8);
    }
</style>

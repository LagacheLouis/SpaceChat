<template>
    <form id ="sendBox" @submit.prevent="onFormSubmit">
        <div id="inputZone">
            <textarea v-model="input" @keyup="resizeTextArea()"/>
        </div>
        <button>CLICK ME</button >
    </form>
</template>
<script>
export default {
    data(){
        return {
            input : ''
        }
    },
    methods : {
        onFormSubmit(){
            this.$emit('messageSent',this.input);
            this.input = '';
        },
        resizeTextArea(){
            let textarea = document.querySelector('textarea');
            var rows = textarea.value.split("\n");
            textarea.setAttribute('rows', rows.length);
        }
    }
    /*
    <form action ="#" @submit.prevent="onFormSubmit">
            <input type="text" v-model="input"/>
            <button>CLICK ME</button>
        </form>
    */
}
</script>

<style lang="scss" scoped>
    @import '@/assets/var.scss';

    #sendBox{
        padding: 30px;
        display: flex;
        min-height: 10vh;
        background-color: $red_panel_color;
    }
    textarea{
        overflow: hidden;
        width: 100%;
    }

    #inputZone{
        max-width: 70%;
        width: 70%;
        text-align: left;
    }
</style>

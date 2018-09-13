<template>
    <form id ="sendBox" class="sendbox" @submit.prevent="onFormSubmit">
        <div id="inputZone" class="input-zone">
            <textarea placeholder="Write your message here and send it !"  :rows="1" :max-rows="15" v-model="input" @keydown.enter.exact.prevent="onFormSubmit" @keyup="resizeTextArea"/>
        </div>
        <input type="submit" value="▲" class="submit">
    </form>
</template>
<script>
export default {
    data() {
        return {
            input: ''
        }
    },
    methods : {
        onFormSubmit(){            
            this.$emit('messageSent',this.input);
            this.input = '';
            document.querySelector('textarea').rows = '1';
        },
        resizeTextArea(){
            let textarea = document.querySelector('textarea');
            let rows = textarea.value.split("\n");

            if (rows.length < 6) {
                textarea.setAttribute('rows', rows.length);
            }
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

    .sendbox {
        padding: 30px;
        display: flex;
        height: 3vh;
        min-height: 60px; 
        background-color: $red_panel_color;
    }
    textarea {
        overflow: hidden;
        border:none;
        min-height: 30px;
        padding: 15px 30px 15px 25px;
        resize: none;
        width: 100%;
        border-radius: 35px;
        font-size: 1.5rem;
        line-height: 30px;
        font-size: 1.6rem;
    }

    .input-zone {
        max-width: 70%;
        width: 70%;
        text-align: left;
    }

    .submit {
        cursor: pointer;
        border: none;
        padding: 0px 0px 6px 0px;
        resize: none;
        height: 60px;
        border-radius: 60px;
        font-size: 35px;
        width: 60px;
        background-color: white;
        color: #FBC3BF;
        margin-left: 83px;
    }
</style>

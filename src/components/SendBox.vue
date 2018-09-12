<template>
    <div>
    <form action ="#" @submit.prevent="onFormSubmit">
            <input type="text" v-model="input"/>
            <button>CLICK ME</button>
        </form>
    </div>
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
        }
    }
}
</script>

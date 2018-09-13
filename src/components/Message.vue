<template>
    <div class = "message">
        <div>
            <h2>USER</h2>
            <p>{{message}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['message']
}
</script>

<style lang="scss" scoped>
     @import '@/assets/var.scss';
    .message{
        text-align: left;
        margin: 0 25px;
    }

    .message div{
        display: inline-block;
        position: relative;
        max-width: 70%;
        border-radius: 20px;
        background-color: $orange_message;
        margin: 1vh;
        padding: 1vh;
        line-height: 1.5rem;
        color: white;

        &:after {
            content: '◣';
            color: $orange_message;
            position: absolute;
            left: -5px;
            bottom: -7.5px;
            font-size: 10px;
        }
    }

    .userMessage{
        float: right;
        text-align: right;

        div {
             background-color: $red_panel_color;
            &:after {
                content: '◢';
                color: $red_panel_color;
                position: absolute;
                left: inherit;
                right: -5px;
            }
        }
    }
</style>

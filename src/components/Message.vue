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
    .message{
        text-align: left;
    }

    .message div{
        display: inline-block;
        max-width: 70%;
        border-radius: 50px;
        background-color: orange;
        margin: 1vh;
        padding: 1vh;
    }

    .userMessage{
        float: right;
        text-align: right;
    }
</style>

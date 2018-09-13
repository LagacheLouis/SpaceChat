<template>
    <div id="ChatView">
        <ChatBox/>
        <LateralBox/>
    </div>
</template>

<script>
import LateralBox from "@/components/LateralBox.vue";
import ChatBox from "@/components/ChatBox.vue";
export default {
    components:{
        LateralBox,
        ChatBox
    }
}
</script>
<style lang="scss" scoped>
    #ChatView{
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
</style>

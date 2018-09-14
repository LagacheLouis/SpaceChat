<template>
    <transition name="slide">
        <div id="ChatView">
            <ChatBox/>
            <LateralBox/>
        </div>
    </transition>
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

        /* Enter and leave animations can use different */
        /* durations and timing functions.              */
        .slide-enter-active {
        transition: all .3s .8s ease;
        }
        .slide-leave-active {
        transition: all .8s .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-enter, .slide-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(100vh);
        opacity: 0;
        }
    #ChatView{
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
</style>

<template>
    <div>
        <ParallaxItem :info="[20,95,60,80,20]" :source="'/img/asteroide_4.svg'"/>
        <ParallaxItem :info="[75,0,40,30,10]" :source="'/img/asteroide_5.svg'"/>
        <ParallaxItem :info="[80,60,30,15,0]" :source="'/img/asteroide_1.svg'"/>
        <ParallaxItem :info="[30,20,15,5,3]" :source="'/img/asteroide_4.svg'"/>
        <ParallaxItem :info="[20,55,10,2,5]" :source="'/img/asteroide_5.svg'"/>
        <ParallaxItem :info="[50,20,30,4,0]" :source="'/img/text_space.svg'"/>
        <ParallaxItem :info="[50,37,30,8,0]" :source="'/img/avatar.svg'"/>
        <ParallaxItem :info="[50,52,33,13,0]" :source="'/img/text_chatroom.svg'"/>
       
    </div>
</template>

<script>
import ParallaxItem from "@/components/ParallaxItem.vue";


export default {
    components:{
        ParallaxItem,
    }
}
</script>
<style lang="scss" scoped>
div{
    
    max-height: 100vh;
}
</style>

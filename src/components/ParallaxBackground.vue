<template>
    <div>
        <ParallaxItem :info="[20,95,800,80,20]" :source="'/img/asteroide_4.svg'"/>
        <ParallaxItem :info="[75,0,400,30,10]" :source="'/img/asteroide_5.svg'"/>
        <ParallaxItem :info="[80,60,400,15,0]" :source="'/img/asteroide_1.svg'"/>
        <ParallaxItem :info="[30,20,200,5,3]" :source="'/img/asteroide_4.svg'"/>
        <ParallaxItem :info="[20,55,100,2,5]" :source="'/img/asteroide_5.svg'"/>
        <ParallaxItem :info="[50,20,550,4,0]" :source="'/img/text_space.svg'"/>
        <ParallaxItem :info="[50,37,550,8,0]" :source="'/img/avatar.svg'"/>
        <ParallaxItem :info="[50,52,600,12,0]" :source="'/img/text_chatroom.svg'"/>
       
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

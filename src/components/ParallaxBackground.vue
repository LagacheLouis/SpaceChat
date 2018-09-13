<template>
    <div>
        <ParallaxItem :info="[20,95,800,80]"/>
        <ParallaxItem :info="[75,0,400,30]"/>
        <ParallaxItem :info="[80,60,400,10]"/>
        <ParallaxItem :info="[30,20,200,5]"/>
        <ParallaxItem :info="[20,55,100,2]"/>
    </div>
</template>

<script>
import ParallaxItem from "@/components/ParallaxItem.vue"

export default {
    components:{
        ParallaxItem
    }
}
</script>
<style lang="scss" scoped>
div{
    
    max-height: 100vh;
}
</style>

<template>
    <img v-bind:style="style" v-bind:src="source"/>
</template>
<script>
export default {
    // 0 : posX 1: posY 2: size 3: parallaxpower 4: blur
    props : ['info','source'],
    data(){
        return {
            mouseY : 0,
            mouseX : 0,
            posX : 0,
            posY : 0
        }
    },
    computed :{
        style(){
            return {
                transform : `translate3d( ${(window.innerWidth/2-this.mouseX)/100 * this.info[3]}px,  ${(window.innerHeight/2-this.mouseY)/100 * this.info[3]}px,0)`,
                left : `${this.info[0]/100 * window.innerWidth - this.info[2]/100 * window.innerHeight * 0.5}px`,
                top : `${this.info[1]/100 * window.innerHeight - this.info[2]/100 * window.innerHeight * 0.5}px`,
                height : `${this.info[2]/100 * window.innerHeight}px`,
                width : `${this.info[2]/100 * window.innerHeight}px`,
                'z-index' : this.info[3],
                filter : `blur(${this.info[4]}px)`
            }
        }
    },
    methods :{
        mouseParallax(event){
            this.mouseY = event.y;
            this.mouseX = event.x;       
            //console.log(this.mouseY,this.mouseX);
            
        }
    },
    mounted(){
        window.addEventListener('mousemove',this.mouseParallax);
    },

    destroyed: function() {
        window.removeEventListener('mousemove', this.mouseParallax);
    }
}
</script>
<style lang="scss" scoped>
img{
    pointer-events: none;
    position: absolute;
    width: 250px;
    height: 250px;
}
</style>

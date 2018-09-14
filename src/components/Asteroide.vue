<template>
    <img v-bind:style="style" src="/img/asteroide_1.svg" @transitionend="respawn" @mouseover="push"/>
</template>

<script>
export default {
    data(){
        let bool = Math.random() < 0.5;
        return{
            goleft: bool,
            posX: bool ? window.innerWidth : 0,
            posY: Math.random() * window.innerHeight,
            width: Math.random() * 15 + 5,
            height: Math.random() * 15+ 5,
            speed: 0,
            rotation : Math.random() * 360,
        }
    },
    computed:{
        style(){
            return{
                transform : `translate3d( ${this.posX}px,  ${this.posY}px,0) rotate(${this.rotation}deg)`,
                width : `${this.width}%`,
                height : `${this.height}%`,
                transition: `linear ${this.speed}s`
            }
        }
    },
    methods:{
        respawn(){
            this.speed = Math.random() * 6 + 4;
            this.rotation = Math.random() * 360;
            if(this.goleft){
                this.posX = 0;
                this.posY = Math.random() * window.innerHeight;
                this.goleft = false;
            }else{
                this.posX = window.innerWidth;
                this.posY = Math.random() * window.innerHeight;
                this.goleft = true;
            }
            
        },
        push(){
             this.speed = 0.5;
             this.rotation = Math.random() * 360;
             if(this.goleft){
                this.posX = 0;
                this.posY = Math.random() * window.innerHeight;        
                this.goleft = false;
            }else{
                this.posX = window.innerWidth;
                this.posY = Math.random() * window.innerHeight;
                this.goleft = true;
            }
        }
    },mounted(){
        this.respawn();
    }
}
</script>

<style lang="scss" scoped>
img{
    position: absolute;
    transition: linear 1000s;
    top:0;
    left:-20%;
} 
</style>

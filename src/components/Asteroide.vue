<template>
    <img v-bind:style="style" v-bind:src="image" @transitionend="respawn" @mouseover="push"/>
</template>

<script>
import Vue from 'vue';
import store from "../store";

export default {
    data(){
        let bool = Math.random() < 0.5;
        let images = ["/img/asteroide_1.svg","/img/asteroide_2.svg","/img/asteroide_3.svg","/img/asteroide_4.svg","/img/asteroide_5.svg"];
        return{
            image : images[Math.floor(Math.random() * images.length)],
            goleft: bool,
            posX: bool ? window.innerWidth : 0,
            posY: Math.random() * window.innerHeight,
            width: Math.random() * 15 + 5,
            height: Math.random() * 15+ 5,
            speed: 0,
            index : Math.random() < 0.4 ? 0 : 1,
            rotation : Math.random() * 360,
        }
    },
    computed:{
        style(){
            return{
                transform : `translate3d( ${this.posX}px,  ${this.posY}px,0) rotate(${this.rotation}deg)`,
                width : `${this.width}%`,
                height : `${this.height}%`,
                'z-index': `${this.index}`,
                transition: `linear ${this.speed}s`
            }
        }
    },
    methods:{
        respawn(){
            this.speed = Math.random() * 6 + 4;
            this.rotation = Math.random() * 360;
            this.index = Math.random() < 0.4 ? 0 : 1;
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
    },
    mounted(){
        Vue.nextTick( () => {
            this.respawn();

            this.$api.onCommand((command) => {
                console.log(command);
                if (command.message.text === '/wizz') {
                    this.push()
                }
            
            })
        })
     
    }
}
</script>

<style lang="scss" scoped>
img{
    position: absolute;
    top:0;
    left:-20%;
} 
</style>

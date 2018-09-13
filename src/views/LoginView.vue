<template>
    <div id="loginView">
        <div>
            <div>
                <h1>SPACE</h1>
                <h1>CHATROOM</h1>
            </div>
            <form action ="#" @submit.prevent="onFormSubmit">
                <input type="text"/>
                <button>connect</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
     methods : {
        onFormSubmit(){
            console.log("connect");
            window.location.replace("./");
        }
    }
}
</script>


<style lang="scss" scoped>
    #loginView{
            height : 100vh;
    }
</style>

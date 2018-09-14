<template>
    <div id="lateralBox" class="lateralbox">
        <p>USER NAME</p>
        <UsersList/>
    </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
export default {
    components :{ 
        UsersList
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/var.scss';

    .lateralbox{
        background-color: $red_panel_color;
        max-width: 25vw;
        min-width: 25vw;
        max-width: 25vw;
        box-shadow: 0px 15px 15px 4px black;
        z-index: 1;
    }
</style>

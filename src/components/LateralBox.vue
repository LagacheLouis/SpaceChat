<template>
    <div id="lateralBox">
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

    #lateralBox{
        background-color: $red_panel_color;
        min-width: 15vw;
    }
</style>

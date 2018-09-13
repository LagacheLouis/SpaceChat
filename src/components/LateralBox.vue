<template>
    <div id="lateralBox">
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
    #lateralBox{
        background-color: red;
    }
</style>

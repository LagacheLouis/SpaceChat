<template>
    <p>{{user.username}}</p>
</template>
<script>
export default {
    props:['user']
}
</script>

<style lang="scss" scoped>
    @import '@/assets/var.scss';

    p {
        line-height: normal;
        text-transform: uppercase;
        font-family: 'title_font';
        color: $title;
    }
</style>

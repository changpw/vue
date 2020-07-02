<template>
    <van-nav-bar
    title="home"
    left-text="Back"
    @click-left="backUp"
    left-arrow
    border
    >

    </van-nav-bar>
</template>

<script>
    import {Toast} from 'vant'
    export default {
        name: "Home",
        methods:{
            backUp(){
                Toast("Back to Home")
            }
        }
    }
</script>

<style scoped>


</style>
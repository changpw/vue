<template>
    <van-form @submit="login">
        <van-field
        v-model="userName"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        >
        </van-field>
        <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                @focus="showKeyBoard"
        >
        </van-field>
        <van-cell  @touchstart.native.stop="show = true">

        </van-cell>
        <van-number-keyboard
                :show="show"
                @blur="show = false"
                @input="onInput"
        />
    </van-form>
</template>

<script>
    import {Toast} from 'vant'
    export default {
        name: "Login",
        methods:{
            login(){
                Toast("密码错误")
            },
            showKeyBoard(){
                this.show=true
            },
            onInput(value){
                this.password+=value;
            }
        },
        data(){
            return{
                userName:"",
                password:"",
                show:false
            }
        }
    }
</script>

<style scoped>

</style>
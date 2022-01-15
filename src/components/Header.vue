<template>
    <div class="header">
        <div>
            <a-avatar icon="user" />
            <span>管理员</span>
            <span @click="loginOut">退出登录</span>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        loginOut(){
            this.$store.commit("SET_TOKEN","")
            this.$store.commit("SET_ROUTERS",[])
            localStorage.setItem('routers','')
            localStorage.setItem('token','')
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="less" scoped>
.header{
    background: rgb(121, 121, 228);
    >div{
        height: 70px;
        position: absolute;
        right: 40px;
        top:0;
        box-sizing: border-box;
        >span{
            margin-left: 20px;
            color: red;
        }
    }
}
</style>
<template>
  <div class="header">
    <div>
      <a-button @click="handlerLogin">登录</a-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handlerLogin() {
      this.$store.dispatch("Login").then(res=>{
          this.loginSuccess(res)
      })
    },
    loginSuccess(res) {
      this.$router.push("/");
      console.log(res)
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  height: 70px;
  background: rgb(121, 121, 228);
  > div {
    height: 70px;
    position: absolute;
    right: 40px;
    top: 0;
    box-sizing: border-box;
    padding: 20px 0;
    > span {
      margin-left: 20px;
    }
  }
}
</style>
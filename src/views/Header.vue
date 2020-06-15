<template>
  <div class="header">
    <div class="header-container">
      <div class="navbar">
        <router-link :to="{ name: 'home' }">首页</router-link>
        <router-link v-for="item in data.slice(0,5)" :key="item.channelId" :to="{ name: 'channel', params: { id: item.channelId } }">{{item.name}}</router-link>
      </div>
      <div class="user">
        <!-- 情况一: 正在远程加载中 -->
        <span v-if="isLoginIng">Loading...</span>
        <!-- 情况二: 当前有登录用户-->
        <template v-else-if="loginUser">
          <router-link :to="{ name:'personal' }">用户名:{{loginUser.nickname}}</router-link>
          <a href="#" @click.prevent="handleLoginOut">退出登录</a>
        </template>
        <template v-else>
          <router-link :to="{ name: 'login' }" class="login">登录</router-link>
          <router-link :to="{ name: 'reg' }" class="registered">注册</router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState("channels",["data","isLoading"]),
    ...mapState("loginUser", {
      loginUser: "data",
      isLoginIng: "isLoading"
    })
  },
  methods: {
    handleLoginOut() {
      this.$store.dispatch("loginUser/loginOut")
      this.$router.push({name: 'login'})
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  /*height: 60px;*/
  margin-bottom: 10px;
  background-color: #424242;
  min-width: 940px;
}
.header .header-container {
  width: 940px;
  height: 100%;
  display: flex;
  /*background-color: #18bfff;*/
  justify-content: space-between;
  align-items: center;
}
.header .header-container .navbar a {
  display: inline-block;
  padding: 20px 22px;
  box-sizing: border-box;
}
.header .header-container .navbar a:first-child {
  padding-left: 0;
}
.header .header-container a {
  color: #fff;
}
.header .header-container .navbar a.router-link-exact-active {
  color: orange;
}
.header .header-container .user a {
  margin-left: 10px;
}
.header .header-container .user span {
  color: #fff;
}
</style>

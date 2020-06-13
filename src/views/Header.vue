<template>
  <div class="header">
    <div class="header-container">
      <div class="navbar">
        <router-link :to="{ name: 'home' }">首页</router-link>
        <router-link v-for="item in data.slice(0,5)" :key="item.channelId" :to="{ name: 'channel', params: { id: item.channelId } }">{{item.name}}</router-link>
      </div>
      <div class="user">
        <router-link :to="{ name: 'login' }" class="login">登录</router-link>
        <router-link :to="{ name: 'reg' }" class="registered">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState("channels",["data","isLoading"])
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
.header .header-container .user .registered {
  margin-left: 10px;
}
</style>

<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/views/Header"
export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style scoped>
  .container {
    max-width: 940px;
    margin: 0 auto;
    min-width: 940px;
  }
</style>

<template>
  <Center>
    <h1>登录验证中...</h1>
  </Center>
</template>

<script>
  import Center from '@/components/Center.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      Center
    },
    computed: {
      ...mapState("loginUser",["data","isLoading"])
    },
    methods: {
      handleLogin() {
        if(this.isLoading) {
          return
        }
        if(this.data) {
          if (this.$route.query.returnurl) {
            this.$router.push(this.$route.query.returnurl)
          }
        } else {
          this.$router.push({name:"login"})
        }
      }
    },
    watch: {
      data: {
        immediate: true,
        handler() {
          this.handleLogin()
        }
      },
      isLoading: {
        immediate: true,
        handler() {
          this.handleLogin()
        }
      }
    }
  }
</script>
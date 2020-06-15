<template>
  <div class="error" :class="{textCenter: isCenter}" :style="{
    visibility: msg ? 'visible' : 'hidden'
  }">{{msg}}</div>
</template>

<script>
  export default {
    name: 'FormError',
    props: {
      isCenter: {
        type: Boolean,
        default: false
      },
      msg: {
        type: String,
        default: "错误消息"
      }
    }
  }
</script>

<style scoped>
  .error {
    color: red;
    font-size: 12px;
    padding: 5px 0;
  }
  .error.textCenter {
    text-align: center;
  }
</style>

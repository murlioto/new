<template>
  <div id="app">
    <div class="container">
      <mySwiper :swipers="swipers" :duration="2000"/>
      <myChannels />
    </div>

  </div>
</template>

<script>
import mySwiper from './components/Swiper.vue'
import myChannels from './components/news/Channels.vue'
export default {
  name: 'App',
  components: {
    mySwiper,
    myChannels
  },
  data () {
    return {
      swipers: [
        {
          id: 0,
          ImgUrl: require('./assets/swiper/1.jpg'),
          link: 'https://www.baidu.com'
        },
        {
          id: 1,
          ImgUrl: require('./assets/swiper/1.jpg'),
          link: 'https://www.baidu.com'
        },
        {
          id: 2,
          ImgUrl: require('./assets/swiper/1.jpg'),
          link: 'https://www.baidu.com'
        }
      ]
    }
  }
}
</script>

<style>
  .container {
    max-width: 940px;
    margin: 0 auto;
  }
</style>

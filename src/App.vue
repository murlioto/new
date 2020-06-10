<template>
  <div id="app">
    <div class="container">
      <mySwiper :swipers="swipers" :duration="2000"/>
      <myChannels @changeId="handleChangeId"/>
      <myNewsList :news="news" />
    </div>

  </div>
</template>

<script>
import mySwiper from './components/Swiper.vue'
import myChannels from './components/news/Channels.vue'
import myNewsList from './components/news/NewsList.vue'
import { getNews } from './services/newsServices'
export default {
  name: 'App',
  components: {
    mySwiper,
    myChannels,
    myNewsList
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
      ],
    news: []
    }
  },
  async created() {
    let resp = await getNews("5572a108b3cdc86cf39001cd")
    this.news = resp
    console.log(resp)
  },
  methods: {
    handleChangeId(newId) {
      console.log(newId)
    }
  }
}
</script>

<style>
  .container {
    max-width: 940px;
    margin: 0 auto;
    min-width: 940px;
  }
</style>

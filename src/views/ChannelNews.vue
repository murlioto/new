<template>
  <div>
    <div class="type-title">{{ channelName }}</div>
    <Loading v-if="isLoading"></Loading>
    <NewsList v-else :news="news"></NewsList>
    <Pager @pageChange="handleChange" :page="page" :total="total" :limit="limit" :panelNumber="panelNumber"></Pager>
  </div>
</template>

<script>
import Pager from '../components/Pager.vue';
import NewsList from '../components/news/NewsList.vue';
import { getNewsChannels, getNews } from '../services/newsServices.js';
import Loading from '../components/Loading.vue'
export default {
  name: 'ChannelNews',
  data() {
    return {
      channelName: '',
      page: 1,
      total: 0,
      limit: 10,
      panelNumber: 10,
      news: [],
      isLoading: true
    };
  },
  components: {
    Pager,
    NewsList,
    Loading
  },
  watch: {
    "$route.params.id": {
        immediate: true,
        handler() {
          this.setChannelName()
          this.setChannelList()
        }
    }
  },
  methods: {
    // 设置频道名称
    async setChannelName() {
      let channels = await getNewsChannels();
      let contentlist = channels.channelList
      let channel = contentlist.find(item => {
        return item.channelId === this.$route.params.id
      })
      this.channelName = channel.name
    },
    // 设置新闻相关数据
    async setChannelList() {
      this.isLoading = true
      let resp = await getNews(this.$route.params.id, this.page, this.limit);
      this.total = resp.allNum;
      this.news = resp.contentlist;
      this.isLoading = false
    },
    // 处理分页返回的数据
    handleChange(newPage) {
      this.page = newPage;
      this.setChannelList();
    }
  }
};
</script>

<style scoped>
.type-title {
  font-size: 2em;
  color: #888;
  border-bottom: 1px solid #888;
  padding: 10px 0;
}
</style>

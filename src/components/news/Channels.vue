<template>
  <div class="news-types">
    <div class="item" v-for="(item, i) in showChannles" :key="item.channelId" :class="{active: isActive == i}">
      <span class="name">{{item.name}}</span>
    </div>
    <a href="#" @click.prevent="isCollapse = !isCollapse">{{isCollapse ? '展开' : '收起'}}</a>
  </div>
</template>

<script>
import { getNewsChannels } from '@/services/newsServices'
export default {
  data() {
    return {
      channels: [], // 分类数据
      isCollapse: true, // 是否为折叠体
      isActive: 0
    }
  },
  computed: {
    showChannles() {
      if (this.isCollapse) {
          return this.channels.slice(0, 8)
      }else {
        return this.channels
      }
    }
  },
  async created() {
    let resp = await getNewsChannels()
    // console.log(resp)
    this.channels = resp
  },
  methods: {

  }
}
</script>

<style scoped>
  .news-types {
    margin: 30px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding: 15px;
  }
  .item {
    padding: 10px 20px;
    border-radius: 5px;
    border:1px solid #ccc;
    margin-right: 15px;
    margin: 7px 15px 7px 0;
    cursor: pointer;
    position: relative;
  }
  .item:hover {
    background-color: #ccc;
  }
  .item.active {
    background: #000;
    color: #fff;
  }
  .news-types a {
    align-self: flex-end;
    margin-bottom: 20px;
    color: #409eff;
  }
</style>

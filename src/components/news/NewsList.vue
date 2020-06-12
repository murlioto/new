<template lang="html">
  <div>
    <div v-for="item in news" class="news-item-normal" :key="item.id">
      <div class="image" v-if="item.havePic">
        <a :href="item.link" target="_blank">
          <img :src="item.imageurls[0].url" alt="">
        </a>
      </div>
      <div class="words">
          <h2 class="title">
            <a :href="item.link" target="_blank">
              {{item.title}}
            </a>
          </h2>
          <div class="aside">
            <span>{{item.channelName}}</span>
            <span>来源: {{item.source}}</span>
            <span>发布日期: {{item.pubDate}}</span>
          </div>
          <div class="content">
            {{item.content}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
  .news-item-normal {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .news-item-normal:first-of-type {
    border-top: 1px solid #ccc;
  }
  .news-item-normal .image {
    width: 120px;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
  }
  .news-item-normal .image img {
    width: auto;
    height: auto;
    max-height: 120px;
    max-width: 120px;
  }
  .news-item-normal .image + .words,
  .news-item-normal .words {
    flex: 1;
    height: auto;
  }

  .news-item-normal .image + .words {
    margin-left: 10px;
  }
  .news-item-normal .words .title {
    color: #18bfff;
    font-size: 22px;
    font-weight: 600;
  }
  .news-item-normal .words .aside span {
    color: #666;
    margin-right: 10px;
    line-height: 40px;
    font-size: 14px;
  }
  .news-item-normal .words .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    line-height: 24px;
    font-size: 14px;
  }
</style>

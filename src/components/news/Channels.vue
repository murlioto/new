<template>
  <div class="news-types" v-if="data.length > 0">
    <div class="item" v-for="item in showChannles" :key="item.channelId" :class="{ active: item.channelId == chooseId }" @click="switchTo(item.channelId)">
      <span class="name">{{ item.name }}</span>
    </div>
    <a href="#" @click.prevent="isCollapse = !isCollapse">{{ isCollapse ? '展开' : '收起' }}</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isCollapse: true, // 是否为折叠体
      chooseId: null, // 当前选中的项
    }
  },
  computed: {
    ...mapState("channels",["data"]),
    showChannles() {
      if (this.isCollapse) {
          return this.data.slice(0, 7)
      }else {
        return this.data
      }
    }
  },
  created() {
    console.log(this.data)
  },
  watch: {
    data: {
      immediate: true,
      handler() {
        if(this.data.length > 0) {
          this.switchTo(this.data[0].channelId)
        }
      }
    }
  },
  methods: {
    switchTo(id) {
      this.chooseId = id
      this.$emit('changeId', this.chooseId)
    }
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
  border: 1px solid #ccc;
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
}
</style>

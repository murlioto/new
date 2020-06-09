<template lang="html">
  <div class="swiper-container" @mouseenter="autoStop" @mouseleave="autoStart">
    <div class="images" :style="{
        width: swipers.length * 100 + '%',
        marginLeft: - currentIndex * 100 + '%'
      }">
      <a :href="item.link" target="_blank" v-for="item of swipers" :key="item.id">
        <img :src="item.ImgUrl" :alt="item.link">
      </a>
    </div>
    <ul class="dots">
      <li
        v-for="(item, i) in swipers"
        :key="i"
        :class="{
          active: i == currentIndex ? 'active' : ''
        }"
        @click="currentIndex = i"
        ></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'mySwiper',
    props:{
      swipers:{
        type: Array,
        required: true,
        default: () => []
      },
      duration: {
        type: Number || String,
        required: false,
        default: 3000
      }
    },
    data () {
      return {
        currentIndex: 0,
        timer: null
      }
    },
    created() {
      this.autoStart()
    },
    methods: {
      autoStart() {
        if(this.timer) {
          return
        }
        this.timer = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.swipers.length
        },this.duration)
      },
      autoStop() {
        clearInterval(this.timer)
        this.timer = null
      }
    }
}
</script>

<style lang="css" scoped>
  .swiper-container {
    width: 940px;
    height: 280px;
    min-width: 940px;
    min-height: 280px;
    overflow: hidden;
    position: relative;
  }
  .swiper-container .images {
    height: 100%;
    transition: .5s;
  }
  .swiper-container .images a {
    display: inline-block;
    overflow: hidden;
  }
  .swiper-container .images img{
    float: left;
    display: block;
  }
  .swiper-container .dots {
    display:flex;
    padding:0 5px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .swiper-container .dots li {
    cursor: pointer;
    width: 8px;
    height: 8px;;
    border-radius: 50%;
    /* background-color: blue; */
    border: 2px solid #FFF;
    margin: 0 5px;
  }
  .swiper-container .dots li.active {
    background-color: #ccc;
  }
</style>

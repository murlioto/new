<template>
  <div class="pager" v-if="total > 0">
    <a
      href="#"
      class="pager-item"
      :class="{
        disabled: page === 1
      }"
      @click.prevent="handleChange(1)"
    >
      首页
    </a>
    <a
      href="#"
      class="pager-item"
      :class="{
        disabled: page === 1
      }"
      @click.prevent="handleChange(page - 1)"
    >
      上一页
    </a>
    <a class="pager-item" @click="handleChange(n)" :class="{ active: n === page }" v-for="n in numbers" :key="n">{{ n }}</a>
    <a
      href="#"
      class="pager-item"
      :class="{
        disabled: page === pageNumber
      }"
      @click.prevent="handleChange(page + 1)"
    >
      下一页
    </a>
    <a
      href="#"
      class="pager-item"
      :class="{
        disabled: page === pageNumber
      }"
      @click.prevent="handleChange(pageNumber)"
    >
      尾页
    </a>
    <span class="pager-text">
      <i>{{ page }}</i>
      /
      <i>{{ pageNumber }}</i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'pager',
  methods: {
    handleChange(newPage) {
      if (newPage <= 1) {
        newPage = 1;
      } else if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.page) {
        return;
      }
      this.$emit('pageChange', newPage);
    }
  },
  computed: {
    // 总页码
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 计算当前显示页码的最小数字
    minNumber() {
      let minN = this.page - this.panelNumber / 2;
      if (minN < 1) {
        minN = 1;
      }
      return minN;
    },
    // 计算当前显示页码的最大数字
    maxNumber() {
      let maxN = this.minNumber + this.panelNumber - 1;
      if (maxN > this.pageNumber) {
        maxN = this.pageNumber;
      }
      return maxN;
    },
    numbers() {
      let nums = [];
      for (let i = this.minNumber; i <= this.maxNumber; i++) {
        nums.push(i);
      }
      return nums;
    }
  },
  props: {
    // 当前页码
    page: {
      default: 1,
      type: Number
    },
    // 总数据量
    total: {
      default: 0,
      type: Number
    },
    // 页总量
    limit: {
      default: 10,
      type: Number
    },
    // 面板显示数据
    panelNumber: {
      default: 10,
      type: Number
    }
  }
};
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}
.pager-item {
  display: inline-block;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 5px;
  font-size: 0.9em;
  cursor: pointer;
}
.pager-item.disabled {
  color: #cccccc;
  cursor: not-allowed;
}
.pager-item.active {
  border: 0;
  color: orange;
}
</style>

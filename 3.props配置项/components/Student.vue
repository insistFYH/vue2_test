<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '张平',
      age: 18
    }
  },
  // 第一种接收方式
  // props: ['hobby', 'strong']
  // 第二种
  // props: {
  //   hobby: String,
  //   strong: String
  // }
  // 第三种
  props: {
    hobby: {
      type: String,
      required: false,
      default: '下棋'
    },
    strong: {
      type: String,
      required: false,
      default: 'true'
    }
  }
}
</script>

<style>
.demo {
  background-color: pink;
}
</style>

<template>
  <div class="demo">
    <h2>{{ name | mySlice }}</h2>
    <h2>{{ age }}</h2>
    <input type="text" v-fbind:value="name" />
    <button @click="test">点我获取一个hello</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '张平你好啊啊啊啊',
      age: 18
    }
  },
  methods: {
    test() {
      this.hello()
    }
  }
}
</script>

<style>
.demo {
  background-color: pink;
}
</style>

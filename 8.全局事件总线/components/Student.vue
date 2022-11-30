<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="zhangPing">点我传递学生名字</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张平',
      age: 18
    }
  },
  methods: {
    zhangPing() {
      this.$bus.$emit('passName', this.name, 'x', 'y')
    }
  },
  beforeDestroy() {
    this.$bus.off('passName')
  }
}
</script>

<style scoped>
.demo {
  background-color: pink;
}
</style>

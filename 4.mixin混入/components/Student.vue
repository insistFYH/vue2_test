<template>
  <div class="demo">
    <h2 @click="show">{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
// import { hello } from '../mixin'
export default {
  data() {
    return {
      name: '张平',
      age: 18
    }
  }
  // mixins: [hello]
}
</script>

<style>
.demo {
  background-color: pink;
}
</style>

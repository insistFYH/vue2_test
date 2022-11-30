<template>
  <div>
    <h2 @click="show">{{ name }}</h2>
    <h2>{{ address }}</h2>
    <student></student>
  </div>
</template>

<script>
import Student from './Student.vue'
// import { hello } from '../mixin'
export default {
  components: {
    Student
  },
  data() {
    return {
      name: '重庆理工',
      address: '中国重庆'
    }
  }
  // mixins: [hello]
}
</script>

<style></style>

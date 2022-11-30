<template>
  <div>
    <h2 @click="show" ref="name">{{ name }}</h2>
    <h2 ref="address">{{ address }}</h2>
    <student ref="xuesheng"></student>
  </div>
</template>

<script>
import Student from './Student.vue'
export default {
  components: {
    Student
  },
  data() {
    return {
      name: '重庆理工',
      address: '中国重庆'
    }
  },
  methods: {
    show() {
      console.log(this.$refs.name)
      console.log(this.$refs.address)
      console.log(this.$refs.xuesheng)
    }
  }
}
</script>

<style></style>

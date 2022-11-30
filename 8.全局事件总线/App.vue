<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {
    passName(name, ...params) {
      console.log('成功从student传递名字到app' + name, params)
    }
  },

  mounted() {
    // this.$refs.xs.$on('passName', this.passName)
    this.$bus.$on('passName', this.passName)
  }
}
</script>

<style></style>

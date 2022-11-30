<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
import pubsub from 'pubsub-js'
export default {
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {
    passName(msgName, data) {
      console.log('成功从student传递名字到app' + data)
    }
  },

  mounted() {
    // this.$refs.xs.$on('passName', this.passName)
    // this.$bus.$on('passName', this.passName)
    this.pb = pubsub.subscribe('passName', this.passName)
  },
  beforeDestroy() {
    // this.$bus.off('passName')
    pubsub.unsubscribe(pb)
  }
}
</script>

<style></style>

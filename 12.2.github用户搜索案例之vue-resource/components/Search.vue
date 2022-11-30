<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keywords"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    getUsers() {
      this.$bus.$emit('getUsers', {
        isFirst: false,
        loading: true,
        errMsg: '',
        users: []
      })
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keywords}`)
        .then(
          (response) => {
            console.log('@', response.data)
            this.$bus.$emit('getUsers', {
              loading: false,
              errMsg: '',
              users: response.data.items
            })
          },
          (error) => {
            console.log('获取用户失败！')
            this.$bus.$emit('getUsers', {
              loading: false,
              errMsg: error.message,
              users: []
            })
          }
        )
    }
  }
}
</script>

<style></style>

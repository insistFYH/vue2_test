<template>
  <div>
    <button @click="getStudent">获取学生数据</button>
    <button @click="getCar">获取汽车数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    getStudent() {
      axios.get('http://localhost:8080/api1/students').then(
        (response) => {
          console.log('拿到学生数据', response.data)
        },
        (error) => {
          console.log('出错了', error.message)
        }
      )
    },
    getCar() {
      axios.get('http://localhost:8080/api2/cars').then(
        (response) => {
          console.log('拿到汽车数据', response.data)
        },
        (error) => {
          console.log('出错了', error.message)
        }
      )
    }
  }
}
</script>

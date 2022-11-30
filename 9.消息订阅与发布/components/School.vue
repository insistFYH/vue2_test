<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '重庆理工',
      address: '中国重庆'
    }
  }
}
</script>

<style></style>

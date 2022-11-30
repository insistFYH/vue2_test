<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张平",
      age: 18,
    };
  },
};
</script>

<style>
.demo {
  background-color: pink;
}
</style>

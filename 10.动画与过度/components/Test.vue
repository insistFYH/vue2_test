<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="zhang" appear>
      <h2 class="name" v-show="isShow">张平</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
.name {
  width: 800px;
  background-color: pink;
}
.zhang-enter-active {
  animation: zhangping linear 0.5s;
}
.zhang-leave-active {
  animation: zhangping linear 0.5s reverse;
}
@keyframes zhangping {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>

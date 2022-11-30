<template>
  <div class="container">
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(f, index) in games" :key="index">{{ f }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <ul>
          <li v-for="(f, index) in games" :key="index">{{ f }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="yx">
        <ul>
          <li v-for="(f, index) in yx.games" :key="index">{{ f }}</li>
        </ul>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category }
}
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>

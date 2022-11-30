<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1Z9291TIBZ6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665199194&t=7b089a1444f592cda09e8c3832c37134"
        alt=""
      />
      <a slot="foot" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(f, index) in foods" :key="index">{{ f }}</li>
      </ul>
      <div class="foot" slot="foot">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:foot>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
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

<template>
  <div>
    <!-- 全局路由组件 -->
    <Nav />
    <Carousel />
    <Recommend />
    <Rank />
    <GuessLike />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import Carousel from './Carousel'
import Recommend from './Recommend'
import Rank from './Rank'
import GuessLike from './GuessLike'
import Floor from './Floor'
import Brand from './Brand'
export default {
  components: {
    Carousel,
    Recommend,
    Rank,
    GuessLike,
    Floor,
    Brand
  }
}
</script>

<style>
</style>
<template>
  <div>
    <home-header></home-header>
    <home-swipe :list="swipeList"></home-swipe>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwipe from './components/Swipe'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeSwipe,
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swipeList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucceed)
    },
    getHomeInfoSucceed (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swipeList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="wrapper">
    <swiper :options="swipeOption" v-if="showSwipe">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipe-image"
             :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwipe',
  props: {
    list: Array
  },
  data () {
    return {
      swipeOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwipe () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.57%
    background #eee

    .swipe-image
      width 100%
</style>

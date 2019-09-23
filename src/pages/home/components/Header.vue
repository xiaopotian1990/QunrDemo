<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe659;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff

    .header-left
      width .64rem
      float left

      .back-icon
        text-align center
        font-size .5rem

    .header-input
      margin-top .12rem
      margin-left .2rem
      background #fff
      border-radius .1rem
      line-height .64rem
      color #ccc
      height .64rem
      padding-left .2rem
      flex 1

    .header-right
      width 1.24rem
      float right
      text-align center
      color white
      .arrow-icon
        font-size .3.5rem
        margin-left -.04rem
</style>

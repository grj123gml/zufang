<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- /子路由出口 -->

    <!-- 标签导航栏 -->
    <!--
      route: 开启路由模式
     -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/home" >
        <van-icon name="wap-home-o" class="tar-bar-title"/>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/list">
        <van-icon name="shop-o" class="tar-bar-title"/>
        <span class="text">找房</span>
      </van-tabbar-item>
      <van-tabbar-item to="/news">
       <van-icon name="newspaper-o" class="tar-bar-title"/>
        <span class="text">资讯</span>
      </van-tabbar-item>
      <van-tabbar-item to="/profile">
       <van-icon name="contact" class="tar-bar-title"/>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    flex:1 1;
    .van-tabbar-item--active{
    color:#21B97A
    }

    :deep(.tar-bar-title){
    font-size: 40px;
    display: flex;
    }

    }
    :deep(span.text) {
      font-size: 22px;
      margin:3px 0 0;
    }
  }
</style>

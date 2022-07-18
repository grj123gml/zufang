<template>
  <div>
    <div class="header">
      <van-nav-bar
      left-arrow
      @click-left="$router.back()"
    />
    </div>
    <div>
      <van-tabs v-model="active">
      <van-tab title="区域">内容 1</van-tab>
      <van-tab title="方式">内容 2</van-tab>
      <van-tab title="租金">内容 3</van-tab>
      <van-tab title="筛选">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  background-color: #21b97a;
}
:deep(.van-icon) {
  color: #fff;
}

</style>

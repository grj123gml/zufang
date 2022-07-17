<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true
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
:deep(.van-nav-bar__title) {
  color: #fff;
}
</style>

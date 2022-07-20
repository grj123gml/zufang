<template>
<div>
    <div class="header">
     <van-icon name="arrow-left" size="25px"/>
     <div class="search">
        <div class="search-box">
          <span class="">杭州</span>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="form">
              <i class="iconfont icon-sousuo"></i>
              <van-form>
                <van-field placeholder="请输入小区或地址" />
              </van-form>
        </div>
     </div>
    <i class="iconfont icon-didiandingwei_o tp"></i>
    </div>
    <div class="root">

    </div>
</div>
</template>

<script>
export default {
  created () {},
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
.header{
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background-color: #21b97a;
  .van-icon{
    color: #fff
  }
  .search{
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 530px;
    height: 68px;
    margin-left: 20px;
    margin-right: 30px;
    border-radius: 10px;
    .search-box{
      display: flex;
      font-size: 28px;
      margin-left: 20px;
      border-right: 2px solid #666;
      padding-right: 20px;
    }
    .form{
      display: flex;
      align-items: center;
      margin-left: 10px;
      .van-form{
        display: flex;
        width: 260px;
        .van-cell{
          padding: 0;
        }
      }
    }
  }
  .tp{
    font-size: 60px;
    color: #fff
  }
}
.root{
    // background-color: #000;
    height: 80px;
    width: 100%;
    border-bottom: 2px solid #666;
}
</style>

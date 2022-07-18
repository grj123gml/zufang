<template>
  <div>
    <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in Img" :key="item.id">
    <img :src="'http://liufusong.top:8080'+item.imgSrc" alt="">
    </van-swipe-item>
    </van-swipe>
    </div>
     <div class="header">
      <div class="search">
        <div class="search-box">
          <span>杭州</span>
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
    <div>
    <van-grid class="grid" :border="false">
       <van-grid-item  text="整租">
       <template #icon><img src="../../assets/cz.png" alt=""></template>
       </van-grid-item>
       <van-grid-item  text="合租">
      <template #icon><img src="../../assets/hz.png" alt=""></template>
       </van-grid-item>
       <van-grid-item  text="地图找房">
       <template #icon><img src="../../assets/wz.png" alt=""></template>
       </van-grid-item>
       <van-grid-item  text="去出租">
       <template #icon><img src="../../assets/fz.png" alt=""></template>
       </van-grid-item>
       </van-grid>
    </div>
    <div class="group">
      <h3 class="group-title">租房小组</h3>
      <span class="more">更多</span>
    </div>
    <div class="row">
    <van-row type="flex" justify="space-around">
    <van-col class="col" span="12" v-for="item in bigImg" :key="item.id">
      <img :src="'http://liufusong.top:8080'+item.imgSrc" alt="" srcset="">
      <div class="desc">
      <p>{{item.title}}</p>
      <p>{{item.desc}}</p>
      </div>
    </van-col>
    </van-row>
      </div>
  </div>
</template>

<script>
import { Lubt, ZuF } from '@/api/home.js'
export default {
  data () {
    return {
      Img: [],
      bigImg: []
    }
  },
  created () {
    this.getLubt()
    this.getZuF()
  },
  methods: {
    async getLubt () {
      try {
        const res = await Lubt()
        console.log(res)
        this.Img = res.data.body
      } catch (error) {
        this.$toast.fail('请重新请求数据')
      }
    },
    async getZuF () {
      try {
        const res = await ZuF()
        this.bigImg = res.data.body
        console.log(res)
      } catch (error) {
        this.$toast.fail('请重新请求数据')
      }
    }
  }

}
</script>

<style scoped lang="less">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    height: 410px;
    text-align: center;
    img{
    width: 100%;
    }
    .van-swipe__indicator{
      width: 16px;
      height: 16px;
      margin: 0 6px;
      border-radius: 50%;
    }
  }
  .header {
  position: absolute;
  top: 30px;
  left: 40px;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  .van-icon {
    color: #fff;
  }
  .icon-xiajiantou{
    margin-left: 6px;
    font-size: 24px;
    color:#7f7f80;
  }
  .iconfont icon-sousuo{
   vertical-align: middle;
   padding: 0 4px 0 24px;
   color:#9c9fa1;
   font-size: 30px;
  }
  .search {
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 530px;
    height: 68px;
    margin-left: 20px;
    margin-right: 30px;
    border-radius: 10px;
    .search-box {
      display: flex;
      font-size: 28px;
      margin-left: 20px;
      border-right: 2px solid #666;
      padding-right: 20px;
    }
    .form {
      display: flex;
      align-items: center;
      margin-left: 10px;
      .van-form {
        display: flex;
        width: 260px;
        .van-cell {
          padding: 0;
        }
      }
    }
  }
  .tp {
    font-size: 60px;
    color: #fff;
  }
}
  .grid{
    .van-grid-item__text{
      font-size: 28px;
      font-weight: 400;
      margin: 24px 0;
    }
   img{
    width: 120px;
    height: 120px;
   }
  }
  .group{
   display: flex;
   justify-content: space-between;
   background-color: #f6f5f6;
   padding: 0 20px;
   .group-title{
    position: relative;
    margin: 30px 0 30px 20px;
    font-size: 30px;
   }
   .more{
    position: relative;
    margin: 30px 0 30px 20px;
    font-size: 30px;
   }
  }
  .row{
    text-align: left;
    overflow: hidden;
    display: flex;
    background-color: #f6f5f6;
    .col{
      display: flex;
      background-color: #fff;
    }
    .desc{
      align-items: center;
      font-size: 28px;
    }
    img{
    width: 100px;
    height: 100px;
    margin: 0 20px;
    }
  }
</style>

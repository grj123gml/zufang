<template>
  <div>
    <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in Img" :key="item.id">
    <img :src="'http://liufusong.top:8080'+item.imgSrc" alt="">
    </van-swipe-item>
    </van-swipe>
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
      <p>{{item.title}}</p>
      <p>{{item.desc}}</p>
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
      background-color: #fff;
    }
    p{
      font-size: 28px;
    }
    img{
    width: 100px;
    height: 100px;
    margin: 0 20px;
    }
  }
</style>

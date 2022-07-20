<template>
  <div>
    <van-nav-bar
      title="城市列表"
      @click-left="$router.back()"
      left-arrow
      :fixed="true"
    />
    <div class="city">
    <!-- <van-index-bar :index-list="cityIndex" highlight-color="#21b97a">
     <div v-for="(item,index) in cityIndex" :key="index" />
     <van-index-anchor index="#">当前城市</van-index-anchor>
     <van-cell/>

     <van-index-anchor index="热">热门城市</van-index-anchor>
     <van-cell v-for="item in hotcity" :key="item.label" :title="item.label" />

    <div v-for="(item,index) in city" :key="index">
     <van-index-anchor :index="index">{{index}}</van-index-anchor>
     <van-cell v-for="ele in item" :key="ele.label" :title="ele.label" />
     </div>
    </van-index-bar> -->
      <van-index-bar :index-list="cityIndex"  highlight-color="#21b97a">
      <div
        v-for="(item,index) in cityIndex"
        :key="index"
      >
        <van-index-anchor :index="cityIndex[index]"></van-index-anchor>
        <van-cell
          v-for="(ele, index) in city[item]"
          :key="index"
        >
          {{ele.label}}
        </van-cell>
      </div>
    </van-index-bar>
    </div>
  </div>
</template>

<script>
import { CityList, HotCity } from '@/api/area/area.js'
export default {
  data () {
    return {
      cityList: [], // 所有城市列表数据
      city: {}, // 按字母分类的城市索引
      cityIndex: [], // 城市索引
      hotcity: []// 热门城市
    }
  },
  created () {
    this.getCityList()
    this.getHotCity()
  },
  methods: {
    // 获取所有城市列表的方法
    async getCityList () {
      try {
        const res = await CityList('?level=1')
        console.log(res)
        // 所有城市列表数据
        this.cityList = res.data.body
        // 遍历城市列表
        this.cityList.forEach(ele => {
        // 获取每一个城市的首字母
          const first = ele.short.substr(0, 1).toUpperCase()
          // 判断city中是否有该分类
          if (this.city[first]) {
          // 有就push进去
            this.city[first].push(ele)
          } else {
            // 没有就先创建一个数组，然后把当前城市信息添加到数组中
            this.city[first] = [ele]
          }
        })
        // sort() 方法用于对数组的元素进行排序，并返回数组。默认排序顺序是根据字符串UniCode码。
        // 获取城市索引数据
        this.cityIndex = Object.keys(this.city).sort()
        this.cityIndex = ['#', '热', ...this.cityIndex]
        this.city['热'] = this.hotcity
        console.log(this.cityIndex)
        console.log(this.hotcity)
      } catch (error) {
        console.log(error)
      }
    },
    async getHotCity () {
      const res = await HotCity()
      console.log(res)
      this.hotcity = res.data.body
    }
  }
}
</script>

<style scoped lang='less'>
:deep(.van-nav-bar) {
  background-color: #21b97a;
  height: 90px;
  z-index: 4;
.van-nav-bar__title{
  color:#fff
}
:deep(.van-nav-bar .van-icon) {
    color: #fff;
}
}
.city{
  margin-top: 20px;
}
</style>

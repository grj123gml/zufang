<template>
  <div>
    <!-- 复用组件 -->
     <NavBar title="发布房源"></NavBar>
    <div class="body">
      <van-cell title="房源信息" style="color: #21b97a" />
      <van-cell title="小区名称" is-link value="请输入小区名称" />
      <van-field
        v-model="houseObj.price"
        name="price"
        label="租金"
        placeholder="请输入租金/月"
      >
      <template #extra>
        ￥/月
      </template>
      </van-field>
      <van-field
        v-model="houseObj.size"
        name="size"
        value="内容"
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
      <template #extra>
        m²
      </template>
      </van-field>
      <!-- 户型 -->
      <van-cell
        title="户型"
        is-link
        :value="houseObj.roomType"
        @click="showPicker = true"
      />
      <!-- 所在楼层 -->
      <van-cell
        title="所在楼层"
        is-link
        :value="floorValue"
        @click="showFloor = true"
      />
      <!-- 朝向 -->
      <van-cell
        title="朝向"
        is-link
        :value="houseObj.oriented"
        @click="showLook = true"
        class="bd-none"
        :border="false"
      />

      <!-- 房屋标题 -->
      <van-cell value="房屋标题" />
      <van-field
        v-model="houseObj.title"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
        :border="false"
      />
      <van-cell title="房屋图像" />

      <!-- 房屋图像 -->
      <van-field name="uploader" :border="false">
        <template #input>
          <van-uploader v-model="houseObj.houseImg" />
        </template>
      </van-field>
      <!-- 房屋配置 -->
      <div class="house">
        <van-cell title="房屋配置" />
        <van-grid square :column-num="5" clickable :border="false">
          <van-grid-item />
        </van-grid>
      </div>

      <!-- 房屋描述 -->
      <van-cell value="房屋描述" />
      <van-field
        v-model="houseObj.description"
        rows="7"
        size="large"
        autosize
        type="textarea"
        placeholder="请输入房屋描述信息"
      />

      <!-- 底部取消/提交按钮 -->
      <div class="flexbox-footer">
        <!-- 取消按钮 -->
        <div class="close-button" @click="closeBtn">取消</div>
        <!-- 提交按钮 -->
        <div class="success-button">提交</div>
      </div>
    </div>
    <!-- 户型弹出 -->
    <!-- <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup> -->
    <!-- 户型弹出 /-->

    <!-- 楼层弹出 -->
    <!-- <van-popup v-model="showFloor" position="bottom">
      <van-picker
        show-toolbar
        :columns="floors"
        @confirm="floorFn"
        @cancel="showFloor = false"
      />
    </van-popup> -->
    <!-- 楼层弹出/ -->

    <!-- 朝向 -->
    <!-- <van-popup v-model="houseObj.oriented" position="bottom">
      <van-picker
        show-toolbar
        :columns="4"
        @confirm="lookFn"
        @cancel="showLook = false"
      />
    </van-popup> -->
    <!-- 朝向/ -->
  </div>
</template>

<script>
import { deployHouse } from '@/api/house'
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      houseObj: {
        title: '',
        description: '',
        houseImg: [],
        oriented: '请选择', // 朝向
        supporting: [],
        price: '',
        roomType: '请选择', // 户型
        size: '',
        floor: [],
        community: '请选择' // 所在楼层
      },
      // 所在楼层
      floors: [],
      floorValue: '请选择',
      showFloor: false,
      // 户型
      showPicker: false,
      columns: [],
      // 朝向
      showLook: false,
      // 房屋描述
      houseSupList: [],
      index: 1
    }
  },
  methods: {
    // 户型
    // onConfirm (value) {
    //   this.showPicker = false
    // },
    // 楼层
    // floorFn (value) {
    //   this.showFloor = false
    // },
    // 朝向
    // lookFn (value) {
    //   this.showLook = false
    // },
    // 房屋图像
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    // 取消按钮
    closeBtn () {
      this.$dialog.confirm({
        title: '提示',
        message: '放弃发布房源?',
        confirmButtonColor: 'red',
        cancelButtonText: '继续编辑',
        cancelButtonColor: '#2c9bec'
      })
        .then(() => {
          // on confirm
          this.$router.push('/layout/home')
        })
        .catch(() => {
          // on cancel
        })
    },
    // 房屋配置
    getSupport (val) {
      const index = this.houseObj.supporting.indexOf(val)
      // 判断原数组中有没有该数据  有则删除 无则添加
      if (index === -1) {
        // this.index = ind
        this.houseObj.supporting.push(val)
        // this.$refs.this.index.classList.add('font-color')
      } else {
        this.houseObj.supporting.splice(index, 1)
      }
      console.log(this.houseObj.supporting)
    }
  },
  async created () {
    try {
      const { data } = await deployHouse()
      // 楼层
      data.body.floor.forEach((item) => this.houseObj.floor.push(item))
      // 户型

      // 朝向

      // 配置----渲染
    } catch (error) {
      this.$toast(error)
    }
  }
}
</script>

<style scoped lang="less">
// .body {
//   background-color: #f9f9f9;
//   padding-top: 1.22667rem;
//   padding-bottom: 140px;
// }
.house {
  margin-bottom: 40px;
}
.van-cell-group {
  font-size: 28px;
  :deep(.bd-none .van-cell::after) {
    border: none;
  }
}
.flexbox-footer {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 90px;
  z-index: 1;
  color: #fff;
  font-size: 30px;
  background-color: #fff;
  .close-button{
    flex: 1;
    color: #21b97a;
    height: 100%;
    line-height: 90px;
  }
  .success-button{
    flex: 1;
    background-color: #21b97a;
    color: #fff;
    height: 100%;
    line-height: 90px;
  }
}
.font-color{
  color:#21b97a ;
}
</style>

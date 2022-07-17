<template>
  <div>
    <div class="am-navbar">
      <img
        :src="'http://liufusong.top:8080'+arit.houseImg"
        alt=""
        width="106px"
        height="80px"
      >
      <div class="content">
        <h3>{{arit.title}}</h3>
        <p>{{arit.desc}}</p>
        <div class="dd">
          <span>{{arit.tags[0]}}</span>
        </div>
        <div class="price">{{arit.price}}<span>元/月</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arit: {
      type: Object,
      required: true
    }
  },
  created () { },
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
.am-navbar {
  display: flex;
  flex: 1;
  height: 240px;
  position: relative;
  box-sizing: border-box;
  padding-top: 36px;
  border-bottom: 2px solid #e5e5e5;
  .content {
    margin-left: 20px;
    h3 {
      display: block;
      width: 400px;
      margin: 0;
      font-size: 30px;
      color: #394043;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      margin: 0;
      font-size: 24px;
      color: #afb2b3;
    }
    .dd {
      width: 92px;
      height: 40px;
      color: #39becd;
      background: #e1f5f8;
      font-size: 24px;
      border-radius: 6px;
      padding: 8px 10px;
      box-sizing: border-box;
      margin-right: 10px;
      line-height: 24px;
    }
    .price {
      font-size: 32px;
      color: #fa5741;
      font-weight: 700;
      span {
        font-weight: normal;
        font-size: 24px;
      }
    }
  }
}
</style>

<template>
  <div>
    <NavBar title="我的收藏"></NavBar>
    <ShowItem
      v-for="(item,index) in shuj"
      :key="index"
      :arit="item"
      @click.native="$router.push('/detail/'+item.houseCode)"
    ></ShowItem>
  </div>
</template>

<script>
import { shocList } from '@/api/user'
import NavBar from '@/components/NavBar.vue'
import ShowItem from '@/components/ShowItem.vue'
export default {
  props: {

  },
  created () {
    this.sc()
  },
  data () {
    return {
      shuj: []
    }
  },
  methods: {
    async sc () {
      try {
        const res = await shocList(this.$store.state.token)
        this.shuj = res.data.body
        console.log(this.shuj)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: { NavBar, ShowItem }
}
</script>

<style scoped lang='less'>
</style>

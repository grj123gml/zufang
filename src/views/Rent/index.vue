<template>
  <div>
    <NavBar title="房屋管理"></NavBar>
    <FangWu
      v-for="(item, index) in fbList"
      :key="index"
      :fangw="item"
      @click.native="$router.push('/detail/'+item.houseCode)"
    ></FangWu>
  </div>
</template>

<script>
import { fbuList } from '@/api/user'
import NavBar from '@/components/NavBar.vue'
import FangWu from '@/components/FangWu.vue'
export default {
  created () {
    this.fy()
  },
  data () {
    return {
      fbList: []
    }
  },
  methods: {
    async fy () {
      try {
        const res = await fbuList()
        this.fbList = res.data.body
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { NavBar, FangWu }
}
</script>

<style scoped lang='less'>

</style>

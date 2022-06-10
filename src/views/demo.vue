<template>
  <div>
    <div v-for="item in errData"
      :key="item.id">
      <h4 class="main-title">{{ item.mainName }}</h4>
      <div class="content"
        v-for="(content, index) in item.content"
        :key="index">
        <p class="err-title">{{ content.errName }}</p>
        <a :href="content.slovePath"
          class="slove-path">前往！</a>
      </div>
    </div>
  </div>
</template>

<script>
import errData from '../mock/errData.js'
export default {
  components: {},
  props: {},
  data() {
    return {
      errData: [],
    }
  },
  computed: {},
  methods: {},
  mounted() {
    this.errData = errData.errList
    console.log(this.errData)
  },
}
</script> 

<style lang="less" scoped>
</style>


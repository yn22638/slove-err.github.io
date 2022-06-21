<template>
  <div class="sign">
    <button @click="signVisible=true">打开签字版</button>
    <m-sign-board :visible.sync='signVisible'
      @confirm='onConfirm'></m-sign-board>
  </div>
</template>

<script>
import { Button } from 'vant'
import mSignBoard from '@/components/m-sign-board'
export default {
  components: { mSignBoard, Button },
  props: {},
  data() {
    return {
      signVisible: false,
    }
  },
  computed: {},
  methods: {
    onConfirm(url) {
      console.log(url, 'url')
    },
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.sign {
  min-height: 100vh;
  // min-width: 100vh;
}
</style>

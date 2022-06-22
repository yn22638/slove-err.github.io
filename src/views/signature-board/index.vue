<template>
  <div class="min-h-full signature-board__demo">
    <div class="signature-board__intro">
      <p class="font-bold  text-18px signature-board__title">m-signature-board</p>
      <p class="signature-board__introduce">介绍：</p>
      <p class="signature-board__introduce-text"> 主要采用 popup 弹出，
        借助 @bryanadamss/drawing-board 插件生成一个canvas 画板
      </p>
      <p class="signature-board__introduce">遇到的问题：</p>
      <p class="signature-board__introduce-text ">由于页面存在纵向与横向画板，我第一次是动态控制一个画板组件，后来发现无法实现需求，因为清空画板是一个问题，全屏的时候调整样式==又一个问题，总之就是各种各样的问题，后来通过动态渲染 id 去生成俩套画板，才能完成这次的需求，还有画板旋转后的偏移量，还有保存图片以后反查数据，显示的图片是反转的，但是无论是oss还是cos他们返回的图片都可以添加后缀，去控制图片的样式，具体需要看文档 (还有也记不太清了，是 2021 年 8 月份做的)
      </p>
    </div>
    <van-collapse v-model="activeNames"
      accordion
      @change="onClickChange">
      <van-collapse-item title="签字板"
        name="1">
        <p>点击打开签字板</p>
        <van-button type="info"
          size="mini"
          @click="signVisible=true">click</van-button>
      </van-collapse-item>
    </van-collapse>
    <m-sign-board :visible.sync='signVisible'
      @confirm='onConfirm'></m-sign-board>
  </div>
</template>

<script>
import { Button } from 'vant'
import mSignBoard from '@/components/m-signature-board'
export default {
  components: { mSignBoard, Button },
  props: {},
  data() {
    return {
      activeNames: '1',
      signVisible: false,
    }
  },
  computed: {},
  methods: {
    onConfirm(url) {
      console.log(url, 'url')
    },
    // collapse click
    onClickChange(index) {
      this.activeNames = `${index}`
    },
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.signature-board {
  &__demo {
    background-color: #f7f8fa;
    min-height: 100vh;
  }

  &__intro {
    padding: 24px 16px 24px 16px;
  }

  &__title {
    color: #323233;
  }

  &__introduce {
    color: #c8c9cc;
    padding-top: 12px;
    font-size: 13px;
  }
  &__introduce-text {
    color: #c8c9cc;
    padding-bottom: 6px;
    font-size: 13px;
    text-indent: 30px;
  }
}
</style>

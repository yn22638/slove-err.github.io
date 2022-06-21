<template>
  <div>
    <van-popup class="signature-board__popup"
      v-model="visible"
      :close-on-click-overlay='false'
      :overlay-style="{zIndex:1000}"
      safe-area-inset-bottom
      position="bottom"
      :style="{ height: '315px',zIndex:1001}"
      @click-overlay='onOverlayCancelClick'>
      <div class="d-flex jc-between p-15 text-16">
        <span class="text-666"
          @click="onOverlayCancelClick">取消</span>
        <span class="text-primary"
          @click="onConfimClick('min')">确认</span>
      </div>
      <div class="pos-fixed l-15">
        <!-- 签字框 -->
        <signature-board signatureIdName='board'
          signatureType='signatureMin'
          ref="signatureMinRef"
          @on-signature-img="onSignatrueConfirm"
          @is-click-text='onClickTextChange'></signature-board>
        <div class="d-flex jc-between px-32 text-15 text-666 pos-relative top40  z-index-100">
          <div class="d-flex ai-center"
            @click="onClearBoardClick">
            <van-icon name="replay" />
            <span class="ml-7">重签</span>
          </div>
          <div class="d-flex ai-center"
            @click="isShowMaxBoard = true">
            <van-icon name="expand-o" />
            <span class="ml-7">全屏</span>
          </div>
        </div>
      </div>
    </van-popup>
    <van-overlay class="d-flex ai-center jc-center"
      :show="isShowMaxBoard"
      z-index="1007">
      <div class="pos-relative">
        <div class="signature-board__max bg-fff"
          :style="{height:paintWidth ,width: paintHeight}">
          <div class="control-strip h-44 text-333 text-14 d-flex ai-center px-17 jc-between">
            <div @click="onOverlayCancelClick">
              <van-icon name="https://static.weixiaotong.com.cn/static/icon/mobile_zjll/intelligentForm/goBack.png"
                class="goback-icon mr-6" />
              <span>取消</span>
            </div>
            <div class="d-flex">
              <div class="d-flex ai-center"
                @click="onClearBoardClick">
                <van-icon name="replay" />
                <span class="ml-8">重签</span>
              </div>
              <div class="px-16">|</div>
              <div class="text-primary"
                @click="onConfimClick('max')">确定</div>
            </div>
          </div>
        </div>
        <!-- 签字框 -->
        <signature-board class="pos-fixed t-0 l-18 pt-38"
          signatureIdName='board'
          ref="signatureMaxRef"
          signatureType='signatureMax'
          @on-signature-img="onSignatrueConfirm"
          @is-click-text='onClickTextChange'></signature-board>
      </div>
    </van-overlay>

  </div>
</template>

<script>
import signatureBoard from './signatureBoard'
import { Popup, Overlay, Icon } from 'vant'
export default {
  components: { signatureBoard, Popup, Overlay, Icon },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShowMaxBoard: false,
      paintWidth: '',
      paintHeight: '',
      isClickText: false,
    }
  },
  computed: {},
  methods: {
    // 取消弹窗
    onOverlayCancelClick() {
      this.isShowMaxBoard = false
      this.onClearBoardClick()
      this.$emit('update:visible', false)
    },
    boradSize() {
      const body = document.documentElement
      // set width/height
      this.paintWidth = body.offsetWidth * 0.83 + 46 + 'px'
      this.paintHeight = body.offsetHeight * 0.9 + 47 + 'px'
    },
    // 确定
    onConfimClick(val) {
      if (this.isClickText) {
        return
      }
      val === 'min'
        ? this.$refs.signatureMinRef.onConfimClick()
        : this.$refs.signatureMaxRef.onConfimClick()
    },
    onClickTextChange(val) {
      this.isClickText = val
    },
    // 重签
    onClearBoardClick() {
      this.$refs.signatureMinRef.onClearCanvasClick()
      this.$refs.signatureMaxRef.onClearCanvasClick()
    },
    onSignatrueConfirm(img) {
      /**
       * 签名图片
       */
      this.isShowMaxBoard = false
      this.$emit('confirm', img)

      this.onClearBoardClick()

      this.$emit('update:visible', false)
    },
  },
  mounted() {
    this.boradSize()
  },
}
</script>

<style lang="less" scoped>
.p-15 {
  padding: 15px;
}
.d-flex {
  display: flex;
}
.jc-between {
  justify-content: space-between;
}
.ai-center {
  align-items: center;
}
.ml-7 {
  margin-left: 7px;
}
.p-16 {
  padding: 15px;
}
.text-16 {
  font-size: 16px;
}
.text-15 {
  font-size: 15px;
}
.z-index-100 {
  z-index: 100;
}
.px-32 {
  padding: 0px 32px 0px 32px;
}
.left-135 {
  left: 135px;
}
.top40 {
  top: 10px;
}
.top14 {
  top: -14px;
}
.text-666 {
  color: #666;
}
.text-primary {
  color: rgb(12, 126, 240);
}
.pos-fixed {
  position: fixed;
}
.pos-relative {
  position: relative;
}
.l-15 {
  left: 15px;
}
.bg-fff {
  background: #fff;
}
.h-44 {
  height: 44px;
}
.text-333 {
  color: #333;
}
.px-17 {
  padding: 0 17px 0 17px;
}

.mr-6 {
  margin-right: 6px;
}
.ml-8 {
  margin-left: 8px;
}
.t-0 {
  top: 0;
}
.l-18 {
  left: 18px;
}
.pt-38 {
  padding-top: 38px;
}
.signature-board__max {
  transform: rotate(90deg);
  .control-strip {
    .goback-icon {
      transform: rotate(-90deg);
    }
  }
}
</style>

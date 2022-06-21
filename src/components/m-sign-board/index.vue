<template>
  <div>
    <van-popup class=""
      v-model="visible"
      :close-on-click-overlay='false'
      :overlay-style="{ zIndex: 1000 }"
      safe-area-inset-bottom
      position="bottom"
      :style="{ height: '44%', zIndex: 1001 }"
      @click-overlay='onOverlayCancelClick'>
      <div class="popup-header">
        <p class="text-666"
          @click="onOverlayCancelClick">取消</p>
        <p class=""
          style="color:#1989fa"
          @click="onConfimClick('min')">确认</p>
      </div>
      <div class="popup-board">
        <!-- 签字框 -->
        <signature-board signatureIdName='boardmin'
          signatureType='signatureMin'
          ref="signatureMinRef"
          @on-signature-img="onSignatrueConfirm"
          @is-click-text='onClickTextChange'></signature-board>
        <div class="popup-board__edit">
          <div @click="onClearBoardClick">
            <van-icon name="replay" />
            <span class="ml-7">重签</span>
          </div>
          <div @click="isShowMaxBoard = true">
            <van-icon name="expand-o" />
            <span class="ml-7">全屏</span>
          </div>
        </div>
      </div>
    </van-popup>
    <van-overlay class="overlay-board"
      :show="isShowMaxBoard"
      z-index="1007">
      <div class=""
        style="position: relative;">
        <!-- transform: rotate(90deg) -->
        <div class="overlay-board__max"
          :style="{ height: paintWidth, width: paintHeight }">
          <div class="control-strip overlay-board__header">
            <div style="z-index:20000"
              @click="onOverlayCancelClick">
              <van-icon name="https://static.weixiaotong.com.cn/static/icon/mobile_zjll/intelligentForm/goBack.png"
                class="goback-icon" />
              <span class="ml-7 text-666">取消</span>
            </div>
            <div class="d-flex"
              style="z-index:20000">
              <div class="d-flex ai-center"
                @click="onClearBoardClick">
                <van-icon name="replay" />
                <span class="ml-7">重签</span>
              </div>
              <div class="px-16">|</div>
              <div class="text-primary"
                @click="onConfimClick('max')">确定</div>
            </div>
          </div>
          <signature-board class="max-board"
            signatureIdName='boardmax'
            ref="signatureMaxRef"
            signatureType='signatureMax'
            @on-signature-img="onSignatrueConfirm"
            @is-click-text='onClickTextChange'>
          </signature-board>
        </div>
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
.popup {
  &-header {
    padding: 10px 16px 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  &-board {
    position: fixed;
    left: 15px;
  }

  &-board__edit {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    font-size: 15px;
    color: #666;
    position: relative;
    top: 10px;
    z-index: 100;
  }
}

.overlay-board {
  display: flex;
  align-items: center;
  justify-content: center;

  &__max {
    transform: rotate(90deg);
    background: #ffffff;

    .control-strip {
      .goback-icon {
        transform: rotate(-90deg);
      }
    }
  }

  &__header {
    height: 44px;
    color: #333;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 0 17px;
    justify-content: space-between;
  }
}

.ml-7 {
  margin-left: 7px;
}

.text-666 {
  color: #666;
}

.d-flex {
  display: flex;
}

.ai-center {
  align-items: center;
}

.px-16 {
  padding: 0 16px;
}

.max-board {
  position: relative;
  transform: rotate(-90deg);
  top: -43%;
}
</style>

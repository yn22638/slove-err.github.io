<template>
  <div class="canvas-board"
    oncontextmenu="return false"
    onselectstart="return false"
    ondragstart="return false">
    <div :id="signatureIdName"
      class="opacity-9"
      style="zIndex:1"></div>
    <p class="canvas-board__text"
      :class="{ 'text-rotate': signatureType != 'signatureMin' }">签字区域</p>
  </div>
</template>

<script>
import DrawingBoard from '@bryanadamss/drawing-board'
// import {fileUtils, imageUtils} from 'wxt-utils'
const PARNT_IMG =
  'https://static.weixiaotong.com.cn/static/icon/mobile_zjll/intelligentForm/boardBgc.jpg'
export default {
  props: {
    signatureType: {
      type: String,
      default: '',
    },
    signatureIdName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      board: null,
      canvasInfo: { paintWidth: 0, paintHeight: 0 },
    }
  },
  methods: {
    init() {
      /**
       * canvas signature
       */
      const body = document.documentElement
      console.log(body.offsetHeight, 'body')
      // set width/height
      const paintWidth =
        this.signatureType === 'signatureMin'
          ? body.offsetWidth * 0.92
          : body.offsetWidth * 0.83
      const paintHeight =
        this.signatureType === 'signatureMin'
          ? body.offsetHeight * 0.32
          : body.offsetHeight * 0.9
      this.canvasInfo = { paintWidth, paintHeight }
      const options = {
        size: [paintWidth, paintHeight],
        penWidth: 4,
        penMode: 'paint',
        penColor: '#333333',
        className: 'signature__paint',
        interactiveMode: 'touch',
        scaleTransition: false,
      }
      this.board = new DrawingBoard(`#${this.signatureIdName}`, options)
      console.log(paintWidth, paintHeight, 'paintHeight')
      // set bgm
      this.setCanvasBgm(PARNT_IMG)
      this.board.setPenModePaint()
    },

    setCanvasBgm(url) {
      /**
       * set canvas bgm
       */
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.responseType = 'blob'
      xhr.onerror = (error) => {
        console.log('加载失败', error)
      }

      xhr.onload = () => {
        console.log('加载状态', xhr.status)
        if (xhr.status === 200) {
          const image = new Image()

          image.src = URL.createObjectURL(xhr.response)
          image.crossOrigin = 'anonymous'
          image.onload = () => {
            console.log('[paint]', 'image loaded:', url)

            const { naturalWidth, naturalHeight } = image
            this.board.setBgImg(image, naturalWidth, naturalHeight)
          }
        }
      }

      xhr.send()
    },

    async onConfimClick() {
      /**
       * 确定
       * 检查绘制质量（比划数>3）
       * 获取绘制图片并上传
       */
      //  检查绘制质量
      let time
      clearInterval(time)
      try {
        const paintCout = this.board.getPaintCount()
        if (paintCout <= 3) {
          this.$toast.fail('监测到签名质量不过关，请删除后重新签字!')
          return
        }
        this.$emit('is-click-text', true)
        let url = await this.uploadSignImg()
        if (url) {
          if (this.signatureType === 'signatureMax') {
            // url = imageUtils.imageProcess(url, {rotate: 270})
          }
          this.$emit('on-signature-img', url)
        }
      } catch (error) {
        this.$notify({ type: 'error', message: '上传失败，请重新上传' })
        this.$toast.clear()
      } finally {
        time = setTimeout(() => {
          this.$emit('is-click-text', false)
        }, 2000)
      }
    },

    async uploadSignImg() {
      /**
       * 上传签字 图片
       */
      this.$toast.loading({
        duration: 0,
        message: '上传中...',
        forbidClick: true,
      })
      try {
        const file = await this.getBlob()
        this.$notify({ type: 'primary', message: '开始图片上传' })
        // 使用上传组件上传到线上，并返回回来
        this.$toast.clear()
        return url
      } catch (error) {
        this.$notify({ type: 'danger', message: '上传失败，请重新上传' })
        this.$emit('is-click-text', false)
        this.$toast.clear()
      }
    },

    /**
     * 获取dataURL
     *
     * @param {IMG_TYPE} [type='png'] 图片类型
     * @param {number} [compressRate=1] 压缩比率
     * @returns dataURL
     * @memberof DrawingBoard
     */
    getDataUrl(type = 'jpeg', compressRate = 0.95) {
      return this.board.getDataUrl(type, compressRate)
    },

    /**
     * 获取Blob
     *
     * @param {IMG_TYPE} [type='png'] 图片类型
     * @param {number} [compressRate=1] 压缩比率
     * @returns {Promise<Blob>} 返回blob
     * @memberof DrawingBoard
     */
    getBlob(type = 'jpeg', compressRate = 0.95) {
      return Promise
        .resolve
        // fileUtils.dataUrlToBlob(this.getDataUrl(type, compressRate))
        ()
    },

    onClearCanvasClick() {
      /**
       * 清空绘制
       */
      // change  status
      this.currentPain = false
      // clear
      this.board && this.board.clear()
    },
  },

  mounted() {
    !this.board &&
      this.$nextTick(() => {
        this.init()
      })
  },
}
</script>

<style lang="less" scoped>
.canvas-board {
  display: flex;
  align-items: center;
  justify-content: center;
  &__text {
    position: absolute;
    letter-spacing: 12px;
    color: #000000;
    font-size: 32px;
  }
}

.opacity-9 {
  opacity: 0.9;
}

.text-rotate {
  transform: rotate(90deg);
}
</style>

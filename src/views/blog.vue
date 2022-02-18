<template>
  <div class="container">
    <nav class="nav-bar">
      <div class="logo-left">
        <h2 class="navbar-brand">
          <a href="/">Evan's Blog</a>
        </h2>
      </div>
      <div class="serach-right">
        <span class="iconfont icon-sousou"></span>
        <input type="text" class="serach-value" placeholder="Seach every.." />
      </div>
    </nav>
    <div class="content">
      <router-view />
    </div>
    <div class="top-or-pageType">
      <transition name="slide-fade">
        <div
          class="iconfont icon-fanhuidingbu button_blur"
          @click="bindTop"
          v-show="isShow"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      isShow: false,
      scrollTopH: 0
    }
  },
  computed: {},
  methods: {
    bindTop () {
      // 实现滚动效果
      const timeTop = setInterval(() => {
        // document.body.scrollTop = document.documentElement.scrollTop = this.scrollTopH -= 50
        // 丝滑
        document.documentElement.scrollTop = this.scrollTopH -= 50
        if (this.scrollTopH <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
      // 下边俩是直接返回顶部
      // window.scrollTo(0, 0)
      // document.documentElement.scrollTop = 0;
    },
    // 控制返回顶部显示隐藏
    scrollTop () {
      this.scrollTopH =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (this.scrollTopH > 100) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.scrollTop)
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fffafa;
  height: 100%;
  min-width: 940px;
  box-sizing: border-box;
  overflow: hidden;
  .nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 0 3.5%;
    min-width: 940px;
    height: 50px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 877;
    line-height: 50px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    overflow: hidden;
    .logo-left {
      .navbar-brand {
        color: rgba(0, 0, 0, 0.9);
        font-size: 1.25rem;
        font-weight: 700;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .serach-right {
      display: none;
    }
  }
  .content {
    max-width: 90%;
    padding-left: 18px;
    margin: 0 auto;
    margin-top: 50px;
    min-width: 940px;
  }
  .top-or-pageType {
    position: fixed;
    right: 20px;
    bottom: 80px;
    z-index: 11;

    .button_blur {
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      margin-top: 15px;
      text-align: center;
      cursor: pointer;
      // transition: all 0.5s;
      font-size: 22px;
      color: #ffffff;
      background: #11a8cd;
      box-shadow: 0 0 15px #11a8cd;
    }
  }
}
@media screen and (max-width: 600px) {
  .container {
    min-width: 0px;
    max-width: 600px;
    // overflow: hidden !important;
  }
  .nav-bar {
    max-width: 600px !important;
    overflow: hidden !important;
    min-width: 0px !important;
    // background-color: red !important;
    .serach-right {
      display: block !important;
      background-color: rgba(255, 255, 255, 0) !important;
      box-shadow: none !important;
      border-radius: none !important;
      border: none !important;
      // width: 60% !important;
      font-size: 0.3rem;
      height: 100%;
      width: 155px !important;
      span {
        margin-right: 0.5rem;
      }
      .serach-value {
        background-color: rgba(255, 255, 255, 0) !important;
        width: 50%;
        border: 0;
        overflow: hidden;
      }
    }
  }

  .content {
    min-width: 0px !important;
    max-width: 600px !important;
    padding: 0 18px;
  }
}
</style>

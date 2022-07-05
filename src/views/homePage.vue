<style lang="less" scoped>
.columns {
  .columns-left {
    float: left;
    min-width: 600px;
    max-width: 60%;
    padding: 0 10px;
    .card-content {
      width: 100%;
      margin-bottom: 15px;
      overflow: hidden;
      box-shadow: var(--boxShadow);
      border: var(--borderAll);
      border-radius: var(--borderRadius);
      .top-Img {
        width: 100%;
        height: 240px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: all 1s ease-out;
        }
        img:hover {
          transform: scale(1.07);
        }
      }
      .bottom-content {
        width: 100%;
        height: 300px;
        padding: 1rem !important;
        background-color: #ffffff;
        box-sizing: border-box;
        overflow: auto;
        .labelText {
          margin-bottom: 13px;
          a {
            margin-right: 5px;
            padding: 5px;
            font-size: 12px;
            font-weight: bold;
            color: darkorange;
            font-style: normal;
            border-radius: 10px;
            background: transparent;
            border: 2px solid darkorange;
          }
        }
        .time {
          margin: 10px 0;
        }
        .err-find {
          min-height: 60px;
          margin: 5px 0;

          .textContent {
            margin: 10 0px;
          }
          .btn {
            width: 12%;
            height: 32px;
            margin: 10px 0;
            text-align: center;
            line-height: 32px;
            display: block;
            background-color: rgba(219, 219, 219, 0.8);
          }
        }
      }
    }
  }
  .columns-right {
    float: left;
    min-width: 300px;
    max-width: 22%px;
    padding: 0 10px;
    box-sizing: border-box;
    .serach {
      background-color: #ffffff;
      width: 100%;
      height: 46px;
      padding: 12px 20px;
      margin-bottom: 15px;
      box-shadow: var(--boxShadow);
      border-radius: var(--borderRadius);
      border: var(--borderAll);
      box-sizing: border-box;
      span {
        color: #000000;
        margin-right: 5px;
      }
      input {
        border: none;
        outline: none;
        font-family: 'iconfont' !important;
        font-size: 16px;
        font-style: normal;
      }
      color: #f5f5f5;
    }
    .user-card {
      width: 100%;
      min-height: 300px;
      margin-bottom: 15px;
      box-shadow: var(--boxShadow);
      border: var(--borderAll);
      border-radius: var(--borderRadius);
      background: #ffffff;
      box-sizing: border-box;
      margin-right: 0px !important;
      .head-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        // align-items: center;
        .head-img {
          width: 180px;
          height: 180px;
          margin-top: 10px;
          border-radius: 50%;
          box-shadow: var(--headShadow);
          border: 7px solid var(--avatar-border-color);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 166px;
            height: 166px;
            border-radius: 50%;
          }
        }
      }
      .username {
        margin-top: 20px;
        text-align: center;
      }
      .introduce {
        margin-top: 12px;
        font-size: 15px;
        display: flex;
        justify-content: center;
        .blockTop {
          position: relative;
          top: -5px;
        }
        .blockBottom {
          position: relative;
          bottom: -5px;
        }
      }
      .address {
        margin-top: 12px;
        display: flex;
        justify-content: center;
        blockquote {
          margin-left: 8px;
          font-size: 22px;
        }
        span {
          font-size: 14px;
          line-height: 23px;
        }
        margin-bottom: 12px;
      }
      .ns-container {
        width: 97%;
        height: 55px;
        margin: 0 auto;
        border-top: 1px solid rgba(219, 219, 219, 0.5);
        display: flex;
        justify-content: center;
        padding: 5px 0;
        a {
          padding: 0 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 33px;
        }
        a:hover {
          color: #4169e1;
        }
      }
    }
  }
}
.animain-box {
  padding-top: 300px;
}

.myButton {
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 4px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
}
.myButton:hover {
  background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
  background-color: #e9e9e9;
}
.myButton:active {
  position: relative;
  top: 1px;
}

@media screen and (max-width: 600px) {
  .columns .columns-left {
    max-width: 600px;
    min-width: 0px;
    widows: 100%;
  }
  .top-Img {
    height: 140px !important;
  }
  .labelText {
    display: none;
  }
  h2 {
    // height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .err-find {
    margin-bottom: 1rem;
  }
  .textContent {
    // display: none;
    margin-bottom: 1rem;
  }
  .btn {
    width: 20% !important;
    background: #11a8cd !important;
    color: #fff;
    margin-top: 0.2rem;
  }
  .time {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .bottom-content {
    height: 0px;
    min-height: 100px !important;
    max-height: 266px !important;
    overflow: auto;
  }
  .columns-left {
    margin-top: 300px;
  }
  .columns-right {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 55px;
    left: 0px;
    padding: 0px !important;
    .serach {
      display: none;
    }
    .user-card {
      min-height: 0px !important;
      margin-bottom: 0px !important;
      .head-container {
        .head-img {
          width: 100px !important;
          height: 100px !important;
          img {
            width: 100% !important;
            height: 100% !important;
          }
        }
      }
      .username {
        font-size: 1rem !important;
        margin-top: 15px !important;
      }
      .introduce {
        margin-top: 10px !important;
        blockquote {
          font-size: 12px;
        }
        .text-introduce {
          font-size: 0.5rem;
          letter-spacing: 0.1rem;
        }
      }
      .address {
        margin-top: 10px !important;
        margin-bottom: 10px !important;

        blockquote {
          font-size: 20px !important;
        }
        span {
          font-size: 0.4rem !important;
          letter-spacing: 0.2rem;
        }
      }
      .ns-container {
        height: 45px !important;
      }
    }
    .float-menu {
      display: flex;
      height: 36px;
      color: #fff;
      width: 98px;
      position: fixed;
      align-items: center;
      top: 150px;
      border-radius: 405px 0 0 405px;
      background: rgba(0, 0, 0, 0.3);
      transition: all 0.5s ease;
      .menu-icon {
        height: 24px;
        margin-right: 2px;
        margin-left: 8px;
        width: 25px;
      }
      .menu-btn {
        // bg-transparent
        background: none;
        border: none;
        height: 20px;
        color: #fff;
        font-size: 13px;
        letter-spacing: 2px;
      }
    }
  }
}
</style>
<template>
  <div class="columns">
    <div class="columns-left">
      <div class="card-content"
        v-for="item in errData"
        :key="item.id">
        <div class="top-Img">
          <!-- https://picsum.photos/369/140 -->
          <img :src="item.imgUrl"
            alt="" />
        </div>
        <div class="bottom-content">
          <div class="labelText">
            <a href="">Hexo</a>
            <a href="">cuite</a>
            <a href="">tutorial</a>
          </div>
          <h2>{{ item.mainName }}</h2>
          <p class="time">2018-02-12</p>
          <div class="err-find"
            v-for="(content, index) in item.content"
            :key="index">
            <p class="textContent">{{ index + 1 }}.{{ content.errName }}</p>
            <a :href="content.slovePath"
              class="btn">Let's go!</a>
          </div>
        </div>
      </div>
    </div>
    <div class="columns-right">
      <div class="serach">
        <span class="iconfont icon-sousou"></span>
        <input type="text"
          class="serach-value"
          placeholder="Seach every.." />
      </div>
      <div class="user-card">
        <div class="head-container">
          <div class="head-img">
            <img src="https://haojen.github.io/Claudia-theme-blog/images/avatar.jpg"
              alt="" />
          </div>
        </div>
        <h3 class="username">Evan Mo</h3>
        <div class="introduce">
          <blockquote class="iconfont icon-baojiaquotation2 blockTop"></blockquote>
          <!-- <span class="text-introduce">哪有什么十全十美，凡事只求半称心</span> -->
          <!-- <span class="text-introduce">想要的都拥有,得不到的都释怀</span> -->
          <span class="text-introduce">愿你一生努力,一生被爱</span>
          <blockquote class="iconfont icon-baojiaquotation blockBottom"></blockquote>
        </div>
        <div class="address">
          <blockquote class="iconfont icon-dizhi"></blockquote>
          <span>浙江省</span>
        </div>
        <div class="ns-container">
          <a href="https://github.com/yn22638"
            class="iconfont icon-github"
            style="font-size: 37px"></a>
          <a href="http://wpa.qq.com/msgrd?v=3&uin=1941263063&site=qq&menu=yes"
            class="iconfont icon-qq-copy-copy"></a>
          <a href="https://gitee.com/Yn_22638"
            class="iconfont icon-gitee-fill-round"></a>
          <a href=""
            class="iconfont icon-twitter"
            style="font-size: 37px"></a>
          <a href=""
            class="iconfont icon-social-_round-facebook"></a>
        </div>
      </div>
      <div class="float-menu"
        v-if="windowWidth < 600"
        :style="{
      right: isShowCatalogue ? '0' : '-66px',
    }">
        <img src="@/assets/catalogue-icon.png"
          class="menu-icon"
          @click.stop="isShowCatalogue = !isShowCatalogue" />
        <button class="menu-btn"
          @click.stop="onCatalogueClick">
          知识小🏡
        </button>
      </div>
    </div>
    <div>
    </div>
    <van-action-sheet v-model="isShowActionSheet"
      :actions="actions"
      @select="onSelectClick" />
  </div>
</template>
<script>
import errData from '../mock/errData.js'
export default {
  data() {
    return {
      errData: [],
      isShowCatalogue: false,
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      isShowActionSheet: false,
      actions: [
        { name: '签字版', routerName: 'SignBoard' },
        { name: '选项二' },
        { name: '选项三' },
      ],
    }
  },
  methods: {
    onCatalogueClick() {
      // alert('正在开发中！，敬请期待')
      this.isShowActionSheet = true
    },
    onSelectClick({ routerName = '' }) {
      routerName && this.$router.push({ name: routerName })
    },
  },
  // watch: {
  //   windowWidth(newval, val) {
  //     let that = this

  //     console.log('实时屏幕宽度：', newval, val, that.windowWidth)
  //   },
  // },
  mounted() {
    console.log(
      '%chello world',
      `padding: 10px 40px;
  font-size: 24px;
  font-weight: 600;
  border-radius: 10px;
  background-color:silver;
  background-image:
    radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
    radial-gradient(circle at 0 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
    radial-gradient(circle at 50% 100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent),
    radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent),
    radial-gradient(circle at 0 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent);
  background-size: 100px 50px;`
    )
    var ascii = `
  _    _      _ _        __          __        _     _
 | |  | |    | | |       \\ \\        / /       | |   | |
 | |__| | ___| | | ___    \\ \\  /\\  / /__  _ __| | __| |
 |  __  |/ _ \\ | |/ _ \\    \\ \\/  \\/ / _ \\| '__| |/ _\` |
 | |  | |  __/ | | (_) |    \\  /\\  / (_) | |  | | (_| |
 |_|  |_|\\___|_|_|\\___/      \\/  \\/ \\___/|_|  |_|\\__,_|
`
    console.log(`%c${ascii}`, 'color:#e59de3')
    this.errData = errData.errList
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth
        this.windowWidth = window.fullWidth // 宽
      })()
    }
    // http://www.icodebang.com/article/264091 vue实时获取页面宽度
  },
}
</script>

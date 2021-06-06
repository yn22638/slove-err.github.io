<style lang="scss" scoped>
/* pageFullScreen在index.css */
.columns {
  // background-color: #F5F5F5;
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
  .textContent {
    display: none;
  }
  button {
    padding: 0.2rem;
  }
  .tiem {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .bottom-content {
    height: 9rem !important;
  }
  .columns-left {
    margin-top: 300px;
  }
  .columns-right {
    width: 100%;
    position: absolute;
    top: 55px;
    left: 0px;
    padding: 0px !important;
    .serach {
      position: fixed;
      top: 10px;
      right: -3.5rem;
      z-index: 111111111 !important;
      background-color: rgba(255, 255, 255, 0) !important;
      box-shadow: none !important;
      border-radius: none !important;
      border: none !important;
      width: 60% !important;
      font-size: 0.3rem;
      height: 40px;
      padding: 8px 0px !important;
      input {
        background-color: rgba(255, 255, 255, 0) !important;
      }
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
  }
}
</style>
<template>
  <div class="columns">
    <div class="columns-left">
      <div class="card-content">
        <div class="top-Img">
          <!-- https://picsum.photos/369/140 -->
          <img src="https://picsum.photos/369/140"
            alt="">
        </div>
        <div class="bottom-content">
          <div class="labelText">
            <a href="">Hexo</a>
            <a href="">cuite</a>
            <a href="">tutorial</a>
          </div>
          <h2>hexo theme cutie v2.x tutorial</h2>
          <p class="tiem">2018-02-12</p>
          <p class="textContent">
            Theme cutie has evolved from v1.x to v2.x with a refreshed and fine tuned design and more features. Follow the following instruction to install and use it. You may navigate this website to experience the new look and interaction of v2.x. Thank you for your stars and support.
          </p>
          <button>Let's go!</button>
        </div>
      </div>
      <div class="card-content">
        <div class="top-Img">
          <img src="https://haojen.github.io/Claudia-theme-blog/images/river.png"
            alt="">
        </div>
        <div class="bottom-content">
          <div class="labelText">
            <a href="">Hexo</a>
            <a href="">cuite</a>
            <a href="">tutorial</a>
          </div>
          <h2>hexo theme cutie v2.x tutorial</h2>
          <p class="tiem">2018-02-12</p>
          <p class="textContent">
            Theme cutie has evolved from v1.x to v2.x with a refreshed and fine tuned design and more features. Follow the following instruction to install and use it. You may navigate this website to experience the new look and interaction of v2.x. Thank you for your stars and support.
          </p>
          <button>Read more</button>
        </div>
      </div>
      <div class="card-content">
        <div class="top-Img">
          <img src="https://haojen.github.io/Claudia-theme-blog/images/lake.png"
            alt="">
        </div>
        <div class="bottom-content">
          <div class="labelText">
            <a href="">Hexo</a>
            <a href="">cuite</a>
            <a href="">tutorial</a>
          </div>
          <h2>hexo theme cutie v2.x tutorial</h2>
          <p class="tiem">2018-02-12</p>
          <p class="textContent">
            Theme cutie has evolved from v1.x to v2.x with a refreshed and fine tuned design and more features. Follow the following instruction to install and use it. You may navigate this website to experience the new look and interaction of v2.x. Thank you for your stars and support.
          </p>
          <button>Read more</button>
        </div>
      </div>
    </div>
    <div class="columns-right">
      <div class="serach">
        <span class="iconfont icon-sousou"></span>
        <input type="text"
          placeholder="Seach everything..">
      </div>
      <div class="user-card">
        <div class="head-container">
          <div class="head-img">
            <img src="https://haojen.github.io/Claudia-theme-blog/images/avatar.jpg"
              alt="">
          </div>
        </div>
        <h3 class="username">Evan Mo</h3>
        <div class="introduce">
          <blockquote class="iconfont icon-baojiaquotation2 blockTop"></blockquote>
          <!-- <span>哪有什么十全十美，凡事只求半称心</span> -->
          <!-- <span>想要的都拥有,得不到的都释怀</span> -->
          <span class="text-introduce">愿你一生努力,一生被爱</span>
          <blockquote class="iconfont icon-baojiaquotation blockBottom"></blockquote>
        </div>
        <div class="address">
          <blockquote class="iconfont icon-dizhi"></blockquote>
          <span>河北省</span>
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

    </div>
  </div>
</template>
<script>
import errData from '../mock/errData.js'
export default {
  data() {
    return {
      errData: []
    }
  },
  mounted() {
    this.errData = errData.errList
  }
}
</script>

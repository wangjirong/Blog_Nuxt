<template>
  <div id="header" class="flex-vertical-center">
    <div class="logo">
      <nuxt-link to="/">
        <img src="../../static/eric.jpg" class="logo-image" alt="" />
      </nuxt-link>
    </div>
    <ul class="menu-list flex-vertical-center">
      <li class="menu-item center" v-for="item in menuList" :key="item.title">
        <nuxt-link :to="item.href" class="item-link flex-vertical-center">
          <Icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>
    <div class="login-group center">
      <img
        class="login-btn"
        src="../../assets/iconfont/QQ.png"
        alt=""
        title="点击登录"
        width="30"
        height="30"
        v-if="isLogin"
        @click="qqLogin"
      />
      <img
        class="user avatar"
        v-if="!isLogin"
        :src="user.avatar"
        :alt="user.nickName"
        :title="user.nickName"
        width="30"
        height="30"
        @click="outQQLogin"
      />
    </div>
  </div>
</template>
<script>
import { qq } from '../../config/login'
import { setCookieQQLogin, delCookie } from '../../util/cookie'
export default {
  data() {
    return {
      user: {},
      menuList: [
        {
          title: '归档',
          icon: 'ios-map-outline',
          href: '/category',
        },
        // {
        //   title: '工具',
        //   icon: 'ios-settings',
        //   href: '/toolList',
        // },
        {
          title: '时间线',
          icon: 'md-time',
          href: '/diary',
        },
        {
          title: '友链',
          icon: 'ios-link',
          href: '/links',
        },
        {
          title: '留言',
          icon: 'md-chatboxes',
          href: '/leaveMessage',
        },
        // {
        //   title: '壁纸',
        //   icon: 'ios-link',
        //   href: '/wallpaper',
        // },
        {
          title: '关于',
          icon: 'ios-git-merge',
          href: '/about',
        },
      ],
    }
  },
  mounted(){
    this.user = this.global.getUser()
  },
  methods: {
    qqLogin() {
      const path = this.$route.fullPath
      sessionStorage.setItem('history', path)
      QC.Login.showPopup({
        appId: qq.appid,
        redirectURI: qq.redirectURI,
      })
    },
    outQQLogin() {
      delCookie('loginUser')
      this.user = {}
      QC.Login.signOut()
    },
  },
  computed: {
    isLogin() {
      return this.global.isEmpty(this.user)
    },
  },
}
</script>
<style lang="less" scoped>
#header {
  height: 7vh;
  min-height: 50px;
  width: 100vw;
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  // background-color: rgba(57, 61, 73, 1);
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  .logo {
    flex: 2;
    text-align: center;
    .logo-image {
      display: block;
      height: 7vh;
      width: auto;
      margin-left: 10vw;
      // opacity: .2;
    }
    > a {
      color: aliceblue;
      font-size: 1.2rem;
      &:hover {
        color: #cccccc;
      }
    }
  }
  .menu-list {
    flex: 5;
    justify-content: flex-end;
    height: 7vh;
    margin: 0 10vw 0 0;
    .menu-item {
      height: 7vh;
      line-height: 7vh;
      .item-link {
        display: block;
        height: 7vh;
        padding: 0 1em;
        line-height: 7vh;
        font-size: 1.1em;
        color: #777;
      }
      .nuxt-link-exact-active {
        color: lightgreen;
      }
    }
  }
  .login-btn,
  .user {
    flex: 1;
    margin-right: 100px;
    overflow: hidden;
  }
}
</style>

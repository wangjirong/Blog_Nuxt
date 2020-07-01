<template>
  <div id="header" class="flex-vertical-center">
    <div class="logo">
      <nuxt-link to="/">
      <img src="../../assets/image/logo.jpg" class="logo-image" alt="">
      </nuxt-link>
    </div>
    <ul class="menu-list flex-vertical-center">
      <li class="menu-item" v-for="item in menuList" :key="item.title">
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
        width="25"
        height="25"
        v-if="true"
        @click="qqLogin"
      />
      <img v-if="false" src="" alt="" class="avatar" width="30" height="30" />
    </div>
  </div>
</template>
<script>
import { qq } from '../../config/login'
export default {
  data() {
    return {
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
  methods: {
    qqLogin() {
      QC.Login.showPopup({
        appId: qq.appid,
        redirectURI: qq.redirectURI,
      })
    },
    outQQLogin() {
      QC.Login.signOut()
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
  background-color: #393d49;
  .logo {
    flex: 2;
    text-align: center;
    .logo-image{
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
    padding-right: 8vw;
    .menu-item {
      .item-link {
        display: block;
        padding: 1em 1.2em;
        font-size: 1.1em;
        color: aliceblue;
      }
      .nuxt-link-exact-active {
        color: aqua;
      }
    }
  }
  .login-btn {
    flex: 1;
    margin-right: 100px;
    overflow: hidden;
  }
}
</style>

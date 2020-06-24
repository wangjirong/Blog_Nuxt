<template>
  <div id="header" class="flex-vertical-center">
    <div class="logo">
      <nuxt-link to="/">艾瑞</nuxt-link>
    </div>
    <ul class="menu-list flex-vertical-center">
      <li class="menu-item" v-for="item in menuList" :key="item.title">
        <nuxt-link :to="item.href" class="item-link flex-vertical-center">
          <Icon :type="item.icon" />
          <span>{{item.title}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
        return{
            menuList:[
                {
                    title:"归档",
                    icon:"ios-map-outline",
                    href:"/category"
                },
                {
                    title:"工具",
                    icon:"ios-settings",
                    href:"/toolList"
                },
                {
                    title:"时间线",
                    icon:"md-time",
                    href:"/diary"
                },
                {
                    title:"友链",
                    icon:"ios-link",
                    href:"/links"
                },{
                    title:"留言",
                    icon:"md-chatboxes",
                    href:"/leaveMessage"
                },{
                    title:"壁纸",
                    icon:"ios-link",
                    href:"/wallpaper"
                },{
                    title:"关于",
                    icon:"ios-git-merge",
                    href:"/about"
                },
            ]
        }
    }
}
</script>
<style lang="less"  scoped>
#header {
  height: 7vh;
  width: 100vw;
  z-index: 2000;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #393d49;
  .logo {
    flex:1;
    text-align: center;
    >a{
      color: aliceblue;
      font-size: 1.2rem;
      &:hover{
        color: #cccccc;
      }
    }
  }
  .menu-list {
    flex:2;
    .menu-item {
      .item-link {
        display: block;
        padding: 1em 1.2em;
        font-size: 1.1em;
        color: aliceblue;
      }
      .nuxt-link-exact-active{
        color: aqua;
      }
    }
  }
}
</style>
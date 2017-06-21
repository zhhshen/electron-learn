<template lang="html">
<header class="ms-header">
    <router-link :to="{ path: '/' }">
        <div class="ms-header-logo">
            <span class="ms-header-logo-text">{{header.logo.title}}</span>
        </div>
    </router-link>
    <nav class="ms-header-nav-menus">
      <ul class="navbar-nav">
        <ms-drop-down class="user-menus">
          <div class="navbar-nav-menu-title" slot="title">
            <img class="user-avatar" src="../../assets/image/account/user.jpg" alt="">
            <span>admin</span>
          </div>
          <div class="navbar-nav-menu-content">
            <span @click="loginout">退出</span>
          </div>
        </ms-drop-down>
      </ul>
    </nav>
</header>
</template>

<script>
import MsDropDown from '@/components/DropDown'
import MsCard from '@/components/Cards'
import MsAvatar from '@/components/Avatar'
export default {
  name: 'GmHeader',
  data () {
    return {
      header: {
        logo: {
          title: '更美数据平台'
        },
        nav: [{
          title: '组件',
          route: '/'
        }, {
          title: '组件',
          route: '/'
        }]
      }
    }
  },
  methods: {
    loginout () {
      this.$router.push({ path: '/'})
    }
  },
  components: {
    MsDropDown,
    MsCard,
    MsAvatar
  }
}
</script>

<style lang="less">
.ms-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 4rem;
    width: 100%;
    padding: 0 3rem;
    z-index: 999;
    background: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.ms-header-logo {
    padding-top: .5rem;
    width: 12rem;
}
.ms-header-logo-img {
    display: none;
    height: 2rem;
    margin: 1rem 1rem 0 0;
}
.ms-header-logo-text {
    color: #777;
    font-size: 20px;
    font-weight: 400;
    line-height: 3rem;
}
.ms-header-nav-menus {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.user-menus {

}
.navbar-nav li {
  float: right;
  height: 100%;
  cursor: pointer;
}
.navbar-nav-menu-title {
  height: 100%;
  padding: 15px;
}
.navbar-nav-menu-content {
  width: 100px;
  padding: 15px;
  border-radius: 3px;
  text-align: center;
  border: 1px solid #ddd;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.user-avatar {
  display: inline-block;
  width: 34px;
  vertical-align: middle;
}
</style>

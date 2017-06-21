<template lang="html">
<div>
  <m-header></m-header>
  <div class="page-wrapper">
    <div class="page-side">
      <div class="sidebar">
          <side-menu :menus="menus"></side-menu>
      </div>
    </div>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
  <m-footer></m-footer>
</div>
</template>

<script>
import MHeader from './Head'
import MFooter from './Foot'
import { SideMenu } from '@/components/menu'
export default {
  name: 'app',
  data () {
    return {
      menus: [{
        showChild: true,
        title: '仓库',
        subTitle: '',
        group: true,
        subMenu: [{
          title: '',
          group: [{
            link: 'dashboard',
            title: '仪表盘',
            subTitle: ''
          }, {
            link: 'devicetopic',
            title: '设备主题',
            subTitle: ''
          }, {
            link: 'devicetime',
            title: '设备使用时长',
            subTitle: ''
          }, {
            link: 'communitytopic',
            title: '社区主题',
            subTitle: ''
          }, {
            link: 'usertrace',
            title: '用户路径',
            subTitle: ''
          }, {
            link: 'retention',
            title: '渠道留存',
            subTitle: ''
          }, {
            link: 'specialtopic',
            title: '专题主题',
            subTitle: ''
          }]
        }]
      }, {
        showChild: false,
        title: '交易',
        subTitle: '',
        group: true,
        subMenu: [{
          title: '',
          group: [{
            link: 'homepagebanner',
            title: '美购首页banner',
            subTitle: ''
          }]
        }]
      }]
    }
  },
  components: {
    MHeader,
    MFooter,
    SideMenu
  }
}
</script>

<style lang="less">
.page-wrapper {
    position: relative;
    width: 100%;
    margin: 4rem auto;
    .page-side {
      position: fixed;
      top: 4rem;
      width: 220px;
      height: calc(100% - 5rem);
      overflow-y: scroll;
      z-index: 1000;
      background-color: #fff;
      .sidebar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .page-content {
      margin-left: 210px;
      // min-height: 900px;
      height: auto;
      padding: 20px 20px 50px 30px;
      .panel-center {

      }
    }
}
.gm-sidebar-item {
    padding: 1rem 1.5rem;
    cursor: pointer;
    .gm-sidebar-nav-text {
        font-size: 14px;
    }
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Account/Login'
import Home from '@/views/Base/Home'
import Dashboard from '@/views/Warehouse/Dashboard'
// Warehouse
import DeviceTopic from '@/views/Warehouse/DeviceTopic'
import DeviceTime from '@/views/Warehouse/DeviceTime'
import CommunityTopic from '@/views/Warehouse/CommunityTopic'
import UserTrace from '@/views/Warehouse/UserTrace'
import Retention from '@/views/Warehouse/Retention'
import SpecialTopic from '@/views/Warehouse/SpecialTopic'
// Transaction
import HomePageBanner from '@/views/Transaction/HomePageBanner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      redirect: '/dashboard',
      children: [
        { path: '/dashboard', component: Dashboard },
        { path: '/devicetopic', component: DeviceTopic },
        { path: '/devicetime', component: DeviceTime },
        { path: '/communitytopic', component: CommunityTopic },
        { path: '/usertrace', component: UserTrace },
        { path: '/homepagebanner', component: HomePageBanner },
        { path: '/retention', component: Retention },
        { path: '/specialtopic', component: SpecialTopic }
      ]
    }
  ]
})

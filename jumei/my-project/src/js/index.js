import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/index.vue'
import Booking from '../pages/Booking.vue'
import MyLnof from '../pages/MyLnof.vue'
import Search from '../pages/Search.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import SearchGood from '../pages/SearchGood.vue'
import GoodsDetail from '../pages/GoodsDetail.vue'
import Cart from '../pages/Cart.vue'

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/booking',
    component: Booking
}, {
    path: '/mylnof',
    component: MyLnof,
}, {
    path: '/search',
    component: Search,
}, {
    path: '/login',
    component: Login,
}, {
    path: '/reg',
    component: Reg,
}, {
    path: '/searchgood',
    component: SearchGood,

}, {
    path: '/goodsDetail',
    component: GoodsDetail,

}, {
    path: '/cart',
    component: Cart,

}]

const router = new VueRouter({
    routes
})

export default router
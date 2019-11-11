import Vue from 'vue'
import App from './App.vue'
import router from './js/index'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false;
const store = new Vuex.Store({
    state: {
        active: 0, //底部选中状态
        name: "", //账号
        yzm: "", //验证码
        pass: '', //密码
        start: true, //是否登录；true为没有登录状态
        datails: [{
            medium_name: '',
            title: '',
        }], //详情页商品数据
        num: 1, //详情页商品购买数量
        goodname: '', //商品名字
        mxn: 20, //商品库存量
        typeify: '类型', //显示选择的类型
        model: '型号 ', //显示选择的型号
        initImg: '', //购买初始图片
        initPrice: '', //购买初始价格
        goodStart: false, //详情页购买商品的状态
        size: [{
            img: '',
            jumei_price: ''
        }], //购买商品的价格、型号、类型、库存
        size_attr: [{
                item: [{}]
            }, {
                item: [{}]
            }

        ], //购买商品的型号、类型

    },
    methods: {
        //查询cook
        getcookie(key) {
            let str = document.cookie; //username=admin; age=18
            let arr = str.split("; ");
            for (let item of arr) {
                let arr2 = item.split("=");
                if (key == arr2[0]) {
                    return arr2[1];
                }
            }
        }
    },


})


new Vue({
    store,
    router,
    render: h => h(App),

    methods: {
        //查询cook
        getcookie(key) {
            let str = document.cookie; //username=admin; age=18
            let arr = str.split("; ");
            for (let item of arr) {
                let arr2 = item.split("=");
                if (key == arr2[0]) {
                    return arr2[1];
                }
            }
        }
    },
    created() {
        if (this.getcookie('jmId')) {
            this.$store.state.start = false
        } else {
            this.$store.state.start = true;
        }
    },
}).$mount('#app')
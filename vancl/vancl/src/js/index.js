(() => {

    //构造函数
    function One() {
        this.res = null;
        this.res2 = null;
        this.str = "";
        this.html = "";
        this.index = 0;
        this.arr = [];
        this.init();

    }

    One.prototype.init = function() {

        this.title(); //下拉菜单渲染
        this.itop(); //返回顶部
         this.count(); //倒计时秒杀抢购
        this.setOut(); //下拉菜单
         this.show(); //轮播图
        this.seckill(); //秒杀物品渲染
        this.trousers(); //裤子渲染
        this.quality(); //精品渲染
        this.newGood(); //新品渲染
        this.discount(); //半价渲染
        this.log(); //登陆

    }

    /*************************函数*************************************************/
    //获取数据，下拉菜单
    One.prototype.title = function() {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: 'json',
                data: {
                    type: 'title',
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        //下拉菜单渲染
        p.then(function(data) {

            let html = data.map(item => {
                let str = "";
                if (item.secind) {
                    item.secind = item.secind.split("&");
                    item.secind.map(it => {
                        str += `<li>${it}</li>`;
                    });
                }
                if (item.stair == "衬衫") {
                    return `<li class="fl list">
                                <em></em>
                                <a  href="list.html">${item.stair}</a>
                                <span></span>
                                <ul class="down_conten">
                                <p></p>
                                ${str}
                                </ul>
                            </li>`;
                } else if (item.stair == "卫衣") {
                    return `<li class="fl list">
                                <i></i>
                                <a href="list.html">${item.stair}</a>
                                <span></span>
                                <ul class="down_conten">
                                <p></p>
                                 ${str}
                                </ul>
                            </li>`;
                } else if (item.stair == "首页") {
                    return `<li class="fl list">
                                <a  href="首页.html">${item.stair}</a>
                                <span></span>
                                <ul class="down_conten">
                                </ul>
                            </li>`;
                } else {
                    return `<li class="fl list">
                                <a href="list.html">${item.stair}</a>
                                <span></span>
                                <ul class="down_conten">
                                    <p></p>
                                   ${str}
                                </ul>
                            </li>`;
                }


            }).join("");

            $(".down_title").html(html);

        });
    }

    //返回顶部
    One.prototype.itop = function() {
        $(".FixedMenu li").last().on('click', $(".FixedMenu li").last(), function() {
            window.scrollTo(0, 0);
        });
    }

    //秒杀倒计时,每天22点更新
    One.prototype.count = function() {
        update(this); //1更新一次时间

        let date = new Date(); //系统当前时间
        let data = new Date(); //准备更改的时间
        //判断是否到当日的22点，更改天
        if (data.getHours() >= 22) {
            data.setDate(data.getDate() + 1);
        }

        data.setHours(22, 0, 0) //更改小时
        let second = (data - date) / 1000;
        second--;

        let miao = zero(second % 60); //时间转换
        let fen = zero(parseInt(second / 60) % 60);
        let shi = zero(parseInt(second / 3600));
        return {
            shi,
            fen,
            miao
        };
    }

    function update(th) { //定时器更新时间
        setTimeout(this.res2);
        this.res2 = setInterval(() => {
            th.sj(th.count());
        }, 1000);
    }

    One.prototype.sj = function(item) { //渲染倒计时
        $(".seckill").html(` <span>秒杀进行中，距介绍还有</span>
                                ${item.shi}
                                <span></span>
                                ${item.fen}
                                <span></span>
                                ${item.miao}`);
    }

    //下拉菜单
    One.prototype.setOut = function() {
        $(".down_title").on("mouseenter", 'li', function() {
            $(this).find('.down_conten').stop().slideDown();
        }).on("mouseleave", 'li', function() {
            //移开延迟收回 _this.setOut(this);
            delay(this);
        });


        //移入移出该改变字体颜色
        $('.down_title ').on('mouseover', '.down_conten li', function() {
            $(this).css('color', '#b81c22');
        })

        $('.down_title ').on('mouseout', '.down_conten li', function() {
            $(this).css('color', '#727171');
        })

        //点击跳转详情页
        $('.down_title ').on('click', '.down_conten li', function() {
            window.location.href = 'list.html';

        })

    }

    function delay(th) {
        setTimeout(() => {
            $(th).find('.down_conten').stop().slideUp();
        }, 100)
    }

    //轮播图
    One.prototype.show = function() {
        //获取图片
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: "json",
                data: {
                    type: 'show'
                },
                success: str => {
                    resolve(str);
                }
            });
        });

        p.then(data => {
            data.map(item => {
                this.arr.push(item.img);
            })

            this.apply();

        });
    }

    //图片渲染
    One.prototype.apply = function() {
        this.arr.map((item, index) => {
            this.str += `<li>
                        <img src="../${item}" alt="">
                    </li >`;
            this.html += `<li data-id="${index}" class="fl ulFocus"></li>`;
        })
        $('.vancl_banner .img').html(this.str);
        $('.vancl_banner .focus').html(this.html);
        //自动轮播
        this.res = setInterval(() => {
            this.index++;
            this.nex();
            //焦点跟着变
            $('.vancl_banner .focus li').eq(this.index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
        }, 5000);

        //切换图片
        $('.vancl_banner .img li').eq(this.index).css('z-index', this.index + 1);
        //焦点切换
        $('.vancl_banner .focus li').eq(this.index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');

        //2.点击切换。下一张

        //鼠标在轮播图上，停止滚动
        $('.vancl_banner ').on('mouseover', () => {
            clearInterval(this.res);
        }).bind(this);

        //离开继续滚动
        $('.vancl_banner').on('mouseout', () => {
            this.res = setInterval(() => {
                this.index++;
                this.nex();
                //焦点跟着变
                $('.vancl_banner .focus li').eq(this.index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
            }, 5000);
        });
        //点击切换上下
        //下
        $('.handover').on('click', '.handoverRright', () => {
            this.index++;
            this.nex();
            $('.vancl_banner .focus li').eq(this.index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
        });
        //上
        $('.handover').on('click', '.handoverLeft', () => {
            this.index--;
            this.previous();
            $('.vancl_banner .focus li').eq(this.index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
        });

        //3.划过焦点改变图片
        $('.vancl_banner .focus li').on('mouseover', function() {
            let id = $(this).attr('data-id');
            this.index = Number(id);
            $('.vancl_banner .img li').eq(this.index).css('z-index', this.index + 1).siblings().css('z-index', 0);

            $('.vancl_banner .focus li').eq(this.index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
        });
    }

    //下一张
    One.prototype.nex = function() {
        let leg = $('.vancl_banner .img li').size();
        if (this.index >= leg) {
            this.index = 0;
        }
        $('.vancl_banner .img li').eq(this.index).css('z-index', this.index + 1).siblings().css('z-index', 0);
    }

    //上一张
    One.prototype.previous = function() {
        let leg = $('.vancl_banner .img li').size();
        if (this.index < 0) {
            this.index = leg - 1;
        }

        $('.vancl_banner .img li').eq(this.index).css('z-index', this.index + 1).siblings().css('z-index', 0);
    }

    //秒杀渲染
    One.prototype.seckill = function() {
        let p1 = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: 'json',
                data: {
                    type: 'seckill',
                },
                success: str => {
                    resolve(str);
                }
            });
        });

        p1.then(function(data) {
            let html = data.map(item => {
                return ` <li data-id="${item.id}" class="fl">
                            <img src="../img/${item.img}" alt="${item.alt}">
                            <p class="liTitle">${item.title}</p>
                            <p class="liPrice1">￥${item.price}</p>
                            <p class="liPrice2">
                                <em>￥${item.prices}</em>
                                <span>充值后<a>${item.vipprice}</a>元</span></p>
                        </li>`;

            }).join("");
            $('.seckillGood').html(html);

        });
    }

    One.prototype.trousers = function() {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: 'json',
                data: {
                    type: 'trousers',
                },
                success: str => {
                    resolve(str);
                }
            });
        });

        p.then(function(data) {
            let html = data.map(item => {
                return `  <li data-id = "${item.id}" class="fl">
                            <img src="../img/${item.img}" alt="${item.alt}">
                            <h3>  <span>充值购买相当于<em>${item.price}</em>元起</span>
                                ${item.class}

                            </h3>
                        </li>`;
            }).join("");
            $('.trousers1').html(html);
        });
    }

    One.prototype.quality = function() {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: "json",
                data: {
                    type: 'quality',
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(function(data) {
            let str = "";
            let html = "";
            let num = 0;
            data.map(item => {

                if (num < 3) {
                    str += `<li data-id="${item.id}" class="fl">
                                <img src="../img/${item.img}" alt="${item.alt}">
                            </li>`;
                } else {
                    html += `<li data-id="${item.id}" class="fl">
                                <img src="../img/${item.img}" alt="${item.alt}">
                            </li>`;
                }
                num++;
            });
            $('.vancl_boutique').html(` <h2>更多精品</h2>
                <ul>
                   ${str}
                </ul>
                <ul>
                   ${html}
                </ul>`);
        });
    }

    One.prototype.newGood = function() {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: 'json',
                data: {
                    type: 'new',
                },
                success: str => {
                    resolve(str);
                }
            });
        });

        p.then(function(data) {
            let html = data.map(item => {

                return ` <li data-id = "${item.id}" class="fl">
                            <img src="../img/${item.img}" alt="${item.alt}">
                        </li>`;
            }).join("");
            $('.newGood').html(html);
        });
    }

    One.prototype.discount = function() {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: 'json',
                data: {
                    type: 'discount',
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(function(data) {
            let html = data.map(item => {
                return `<li data-id="${item.id}" class="fl">
                            <img src="../img/${item.img}" alt="${item.alt}">
                        </li>`;
            }).join("");
            $('.discount').html(html);
        });


    }

    //首页登陆
    One.prototype.log = function() {
        //登录
        $('.login').on('click', function() {
            if ($('.login').html() == '登录') {
                window.location.href = 'login.html';
                let url = decodeURIComponent(window.location.href);
                setcookie('url', url, 7);
            } else if ($('.login').html() == '退出登录') {
                removeCookie('id');
                removeCookie('url');
                removeCookie('size');
                removeCookie('kc');
                removeCookie('gid');
                removeCookie('color');
            }
            state();
        });
        //注册
        $('.reg').on('click', function() {
            if ($('.reg').html() == '注册') {
                window.location.href = 'register.html';
            } else if ($('.reg').html() == '更换用户') {
                window.location.href = 'login.html';
            }
            let url = decodeURIComponent(window.location.href);
            setcookie('url', url, 7);
        });

    }

    //购物车
    function goodss() {
        let id = getcookie('id');
        if (id) {
            gd();
        } else {
            nogd();
        }
    }

    function gd() {
        let html = "";
        let sum = 0;
        let gs = 0;
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: 'json',
                data: {
                    type: 'gg',
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(function(data) {
            if (data.length) {
                data.map(item => {
                    html += `<li class="subside">
                                <img class="fl" src="../img/${item.colorimg}" alt="${item.title}">
                                <div class="fl shopping_good">
                                    <p class="shoppingTotle">${item.title}</p>
                                    <p class="shoppingPrice">￥<span class="prce">${item.price}.00</span> x <span class="num">${item.kc}</span></p>
                                </div>
                                <p data-id="${item.gid}" color="${item.color}" size="${item.size}" class="fl shoppingDelete">删除</p>
                            </li>`;
                    sum += item.price * item.kc;
                    gs += Number(item.kc);
                });
                $('.gwc').html(html);
                $('.shoppingSubtotal').html('￥' + sum);
                $('.gs').html(gs);
                $('.gc').html('购物车(' + gs + ')');
                xiaodele();
            } else {
                $('.shopping_particulars').html("您的购物车没有任何商品")
                $('.gc').html('购物车(' + 0 + ')');
            }


        });

    }

    function state() {
        let id = getcookie('id');
        if (id) {
            $('.greet').html('您好,' + id);
            $('.login').html('退出登录');
            $('.reg').html('更换用户');
        } else {
            $('.greet').html('您好，欢迎光临凡客诚品!');
            $('.login').html('登录');
            $('.reg').html('注册');
        }
    }
    state();


    //小购物车删除
    function xiaodele() {
        $('.shoppingDelete').on('click', function() {
            let gid = $(this).attr('data-id');
            let size = $(this).attr('size');
            let color = $(this).attr('color');


            let p = new Promise(function(resolve) {
                $.ajax({
                    url: "../api/insert.php",
                    dataType: 'json',
                    data: {
                        type: 'delete',
                        gid,
                        size,
                        color
                    },
                    success: str => {
                        goodss();
                    }
                });
            });

        })

    }

    //cook购物车
    function nogd() {
        let sum = 0;
        let gs = 0;
        let gid = getcookie('gid');
        let color = getcookie('color');
        let size = getcookie('size');
        let kc = getcookie('kc');
        let html = "";
        if (gid) {
            //将cook里的值换成数组
            let gidarr = gid.split("&");
            let colorarr = color.split("&");
            let sizearr = size.split("&");
            let kcarr = kc.split("&");

            gidarr.map((item, index) => {
                let p = new Promise(function(resolve) {
                    $.ajax({
                        url: "../api/select.php",
                        dataType: 'json',
                        data: {
                            type: 'nolog',
                            gid: gidarr[index],
                            color: colorarr[index],

                        },
                        success: str => {
                            resolve(str);
                        }
                    });
                });
                p.then(function(data) {
                    data.map((item, index) => {

                        html += `<li class="subside">
                        <img class="fl" src="../img/${item.colorimg}" alt="${item.title}">
                        <div class="fl shopping_good">
                            <p class="shoppingTotle">${item.title}</p>
                            <p class="shoppingPrice">￥<span class="prce">${item.price}.00</span> x <span class="num">${kcarr[index]}</span></p>
                        </div>
                        <p data-id="${item.gid}" color="${item.color}" size="${sizearr[index]}" class="fl shoppingDelete">删除</p>
                    </li>`;
                        sum += item.price * kcarr[index];
                        gs += Number(kcarr[index]);
                    });
                    $('.gwc').html(html);
                    $('.shoppingSubtotal').html('￥' + sum);
                    $('.gs').html(gs);
                    $('.gc').html('购物车(' + gs + ')');
                    dadele();
                });

            });
        } else {
            $('.shopping_particulars').html("您的购物车没有任何商品")
            $('.gc').html('购物车(' + 0 + ')');
        }

    }

    //cook删除
    function dadele() {

        //跳转购物车
        $('.shoppinOut').on('click', function() {
            window.location.href = 'shopping.html';

        })

        $('.shoppingDelete').on('click', function() {
            let gid = $(this).attr('data-id');
            let size = $(this).attr('size');
            let color = $(this).attr('color');

            let gid2 = getcookie('gid');
            let color2 = getcookie('color');
            let size2 = getcookie('size');
            let kc2 = getcookie('kc');

            //将cook里的值换成数组
            let gidarr = gid2.split("&");
            let colorarr = color2.split("&");
            let sizearr = size2.split("&");
            let kcarr = kc2.split("&");

            console.log(gid, size, color);

            gidarr.map((item, index) => {
                let sz = sizearr[index].indexOf(size);
                let id = gidarr[index].indexOf(gid);
                let cl = colorarr[index].indexOf(color);

                if (sz >= 0 && id >= 0 && cl >= 0) {
                    gidarr.splice(index, 1);
                    colorarr.splice(index, 1);
                    sizearr.splice(index, 1);
                    kcarr.splice(index, 1);


                    cook('gid', gidarr);
                    cook('color', colorarr);
                    cook('size', sizearr);
                    cook('kc', kcarr);
                }

            });
            nogd();
        });

    }

    //存储cook
    function cook(data, arr) {
        let zz = arr.join("&");
        setcookie(data, zz, 7);
    }
    goodss(); //购物车

    new One();



})();
(() => {



    class Shopping {
        constructor() {
            this.init();
        }

        init() {
            this.apply(); //渲染数据
            this.btnall(); //按钮
            this.red(); //减少
            this.add(); //增加
            this.delete(); //删除商品
            this.tolist(); //继续购物
            this.login(); //登陆
            this.inpu(); //输入数量

        }

        //输入数量
        inpu() {
            setTimeout(function() {

                $('#tex').on('blur', function() {
                    let url = $('#tex').parent().attr('data-id');
                    let color = $(this).parent().parent().parent().children('.yy').children('a').children('.ys').html();
                    let size = $(this).parent().parent().parent().children('.sz').children('.zz').html();
                    let num = $('#tex').val();

                    let p = new Promise(function(resolve) {
                        $.ajax({
                            url: "../api/select.php",
                            dataType: "json",
                            data: {
                                type: 'kc',
                                url,
                                color,
                                size
                            },
                            success: str => {
                                resolve(str);
                            }
                        });
                    });
                    p.then(function(data) {
                        let kc = data[0].kc;
                        if (num <= 1) {
                            $('#tex').val(1);
                        } else if (num >= kc) {
                            $('#tex').val(kc);
                        }

                    })

                })
            }, 1000);



        }

        //登陆&&注册
        login() {

                $('.log').on('click', function() {
                    if ($('.log').html() == '登录') {
                        window.location.href = 'login.html';
                        let url = decodeURIComponent(window.location.href);
                        setcookie('url', url, 7);
                    } else if ($('.log').html() == '退出登录') {
                        removeCookie('id');
                        removeCookie('url');
                        removeCookie('size');
                        removeCookie('kc');
                        removeCookie('gid');
                        removeCookie('color');
                    }
                    state();
                })

                //注册
                $('.reg').on('click', function() {
                    if ($('.reg').html() == '注册') {
                        window.location.href = 'register.html';
                    } else if ($('.reg').html() == '更换用户') {
                        window.location.href = 'login.html';
                    }
                    let url = decodeURIComponent(window.location.href);
                    setcookie('url', url, 7);
                    state();
                });
            }
            //继续购物
        tolist() {
                $('.p1').on('click', function() {
                    window.location.href = 'list.html';
                })
            }
            //购物车渲染
        apply() {
            let id = getcookie('id');
            if (id) {
                log(id);

            } else {
                if (getcookie('gid')) {
                    Nolog();
                } else {
                    $('#cont').css("display", "none");
                    $('.summary').css("display", "none");
                    $('.cart_empty').css("display", "block");
                }
            }
        }

        //全选按钮
        btnall() {
            //全选
            $('#all').on('click', function() {
                let box = $('#all').prop('checked');
                $('.contet .box').prop('checked', box);
                $('#all2').prop('checked', box);
                number();
            });
            $('#all2').on('click', function() {
                let box = $('#all2').prop('checked');
                $('.contet .box').prop('checked', box);
                $('#all').prop('checked', box);
                number();
            });
            //单选控全选
            $('.contet ').on('click', '.box', function() {
                let num = 0;
                $('.contet .box').each(function(index, item) {

                    if ($(item).prop('checked') == true) {
                        num++;
                    }

                    if (num == $('.contet .box').size()) {
                        $('#all').prop('checked', true);
                        $('#all2').prop('checked', true);
                    } else {
                        $('#all').prop('checked', false);
                        $('#all2').prop('checked', false);
                    }
                });
                number();
            });
        }

        //减少
        red() {
            let _this = this;
            let isok = false;
            $('.contet').on('click', '.reduce', function() {
                repertory(this, isok);
            });

        }

        //增加
        add() {
            let _this = this;
            //移入移除改变颜色
            $('.contet').on('mouseover', '.add', function() {
                $(this).css('background-position', '-18px 0px');
            });

            $('.contet').on('mouseout', '.add', function() {
                let num = Number($(this).prev().val());
                let kc = $(this).prev().attr('data-kc');
                if (num >= kc) {
                    $(this).css('background-position', '-34px 0px');
                } else {
                    $(this).css('background-position', '0px 0px');
                }
            });

            //点击更改数量
            $('.contet').on('click', '.add', function() {
                let isok = true;
                repertory(this, isok);
            });
        }

        //删除商品
        delete() {
            let _this = this;
            //删除单个
            $('.contet').on('click', '.dele', function() {
                $(this).parent().parent().remove();
                //  _this.apply();
                number();
                deletes(this);
                noDelete(this);
                if (!getcookie('gid')) {
                    $('#cont').css("display", "none");
                    $('.summary').css("display", "none");
                    $('.cart_empty').css("display", "block");
                }
            })

            //全删
            $('.dele').on('click', function() {
                let id = getcookie('id');
                $('.contet input').each(function(index, item) {
                    if ($(item).prop('checked') == true) {
                        $(item).parent().parent().remove();
                        if (id) {
                            alldele(item);
                        } else {
                            alldelete(item);
                        }

                    }
                    _this.apply();
                });
            });
        }

    }

    //小计
    function subtotal(num, data) {
        let price = $(data).parent().parent().parent().children('.pt').children('.pe').html();
        let sum = price * num;
        $(data).parent().parent().parent().children('.pr').children('.sub').html(sum);
    }

    //计算件数&总价
    function number() {
        let num = 0;
        let sum = 0;
        $('.contet .box').each(function(index, item) {
            if ($(item).prop('checked') == true) {
                //计算件数
                num += Number($(this).parent().parent().children('.val').children('.fm').children('input').val());
                //计算总价 
                sum += Number($(this).parent().parent().children('.pr').children('.sub').html());
            }
        });

        free(sum); //是否免运费
        $('.total').html(num);
        $('.totalPrice').html(sum);
    }

    //免运费
    function free(sum) {
        if (sum >= 250) {
            $('.summary .sp2').html('您目前可享受全场购物免运费');
        } else {
            $('.summary .sp2').html('');
        }
    }

    //获取购物车数据库里的数据
    function show(data) {
        let html = '';
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: "json",
                data: {
                    type: 'gg'
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(function(data) {
            data.map(item => {

                html += `<ul data-id="${item.gid}" class="subside">
                <li class="fl">
                    <input type="checkbox" class="box">
                </li>
                <li class="fl">
                    <img src="../img/${item.colorimg}" alt="">
                </li>
                <li class="fl yy">
                    <a href="###">${item.title}<span class="ys">${item.color}</span></a>
                </li>
                <li class="fl sz">
               <span class="zz">${item.size}</span>
                </li>
                <li class="fl pt">
                    ￥<em class="pe">${item.price}</em>
                </li>
                <li class="fl val">
                    <form action="" data-id="${item.gid}" class="fm">
                        <a class="reduce ">减少</a>
                        <input data-kc="${item.kc}" type="text" id="tex" value = ${item.kc}>
                        <a class="add ">增加</a>

                    </form>
                </li>
                <li class="fl">
                    -
                </li>
                <li class="fl pr">
                    ￥<em class="sub">${item.price}</em>
                </li>
                <li class="fl">
                    <a class="dele">删除</a>
                </li>
            </ul>`;
            })

            $('.contet').html(html);
        })
    }


    //获取商品库存
    function repertory(_this, isok) {

        let url = $(_this).parent().attr("data-id");
        let color = $(_this).parent().parent().parent().children('.yy').children('a').children('.ys').html();
        let size = $(_this).parent().parent().parent().children('.sz').children('.zz').html();

        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: "json",
                data: {
                    type: 'kc',
                    url,
                    color,
                    size
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(function(data) {
            data.map(item => {
                let kc = item.kc;
                if (isok) {
                    adds(_this, kc);
                } else {
                    jian(_this, kc);
                }

            })
        })
    }

    //减少按钮
    function jian(_this, kc) {

        let num = Number($(_this).next().val());
        if (num == 1) {
            num = 1;
            $('.contet .reduce').css('background-position', '-85px 0px');
        } else {
            num--;
            $(_this).css('background-position', '-51px 0px');
        }
        subtotal(num, _this); //小计
        $(_this).next().val(num);
        $(_this).next().next().css('background-position', '0px 0px');
        number();
        let id = getcookie('id');
        if (id) {
            amend(_this);
        } else {
            alter(_this);
        }
    }

    //增加
    function adds(_this, kc) {
        let num = Number($(_this).prev().val());
        if (num >= kc) {
            num = kc;
            $(_this).css('background-position', '-34px 0px');
        } else {
            num++;
            $(_this).css('background-position', '0px 0px');
        }
        subtotal(num, _this); //小计
        $(_this).prev().val(num);
        $(_this).prev().prev().css('background-position', '-51px 0px');
        number();
        let id = getcookie('id');
        if (id) {
            amend(_this);
        } else {
            alter(_this);
        }


    }

    //删除
    function deletes(_this) {
        let gid = $(_this).parent().parent().attr('data-id');
        let color = $(_this).parent().parent().children('.yy').children('a').children('.ys').html();
        let size = $(_this).parent().parent().children('.sz').children('.zz').html();

        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/insert.php",
                dataType: "json",
                data: {
                    type: 'delete',
                    gid,
                    color,
                    size
                },
                success: str => {

                    resolve(str);
                }
            });
        });
    }

    //修改数量
    function amend(_this) {

        let gid = $(_this).parent().attr('data-id');
        let color = $(_this).parent().parent().parent().children('.yy').children('a').children('.ys').html();
        let size = $(_this).parent().parent().parent().children('.sz').children('.zz').html();
        let num = Number($(_this).parent().children('input').val());

        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/insert.php",
                dataType: "json",
                data: {
                    type: 'update',
                    gid,
                    color,
                    size,
                    num
                },
                success: str => {
                    console.log(str);

                    resolve(str);
                }
            });
        });
    }

    //登录的渲染
    function log(id) {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: "json",
                data: {
                    type: 'gouwu',
                    id
                },
                success: str => {
                    if (str.length) {
                        resolve(str);
                    } else {
                        $('#cont').css("display", "none");
                        $('.summary').css("display", "none");
                        $('.cart_empty').css("display", "block");
                    }

                }
            });
        });

        p.then(function(data) {
            data.map(item => {
                show(item.gid);
            })
        })
    }


    //没有登录的渲染
    function Nolog() {
        let gid = getcookie('gid');
        let color = getcookie('color');
        let size = getcookie('size');
        let kc = getcookie('kc');
        let html = "";
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

                data.map(item => {

                    html += `<ul data-id="${item.gid}" class="subside">
                            <li class="fl">
                                <input type="checkbox" class="box">
                            </li>
                            <li class="fl">
                                <img src="../img/${item.colorimg}" alt="">
                            </li>
                            <li class="fl yy">
                                <a href="###">${item.title}<span class="ys">${item.color}</span></a>
                            </li>
                            <li class="fl sz">
                        <span class="zz">${sizearr[index]}</span>
                            </li>
                            <li class="fl pt">
                                ￥<em class="pe">${item.price}</em>
                            </li>
                            <li class="fl val">
                                <form action="" data-id="${item.gid}" class="fm">
                                    <a class="reduce ">减少</a>
                                    <input data-kc="${kcarr[index]}" type="text" id="tex" value = ${kcarr[index]}>
                                    <a class="add ">增加</a>

                                </form>
                            </li>
                            <li class="fl">
                                -
                            </li>
                            <li class="fl pr">
                                ￥<em class="sub">${item.price}</em>
                            </li>
                            <li class="fl">
                                <a class="dele">删除</a>
                            </li>
                        </ul>`;
                });

                $('.contet').html(html);
            })
        })
    }

    //没有登陆的改变商品数量
    function alter(_this) {
        let gid = $(_this).parent().attr('data-id');
        let color = $(_this).parent().parent().parent().children('.yy').children('a').children('.ys').html();
        let size = $(_this).parent().parent().parent().children('.sz').children('.zz').html();
        let num = Number($(_this).parent().children('input').val());

        let gid2 = getcookie('gid');
        let color2 = getcookie('color');
        let size2 = getcookie('size');
        let kc2 = getcookie('kc');
        let html = "";
        //将cook里的值换成数组
        let gidarr = gid2.split("&");
        let colorarr = color2.split("&");
        let sizearr = size2.split("&");
        let kcarr = kc2.split("&");

        gidarr.map((item, index) => {
            let sz = sizearr[index].indexOf(size);
            let id = gidarr[index].indexOf(gid);
            let cl = colorarr[index].indexOf(color);

            if (sz >= 0 && id >= 0 && cl >= 0) {
                kcarr[index] = num;
            }
        })
        let str = kcarr.join("&");
        setcookie('kc', str, 7);
    }

    //没有登陆的删除
    function noDelete(_this) {
        let gid = $(_this).parent().parent().attr('data-id');
        let color = $(_this).parent().parent().children('.yy').children('a').children('.ys').html();
        let size = $(_this).parent().parent().children('.sz').children('.zz').html();

        let gid2 = getcookie('gid');
        let color2 = getcookie('color');
        let size2 = getcookie('size');
        let kc2 = getcookie('kc');

        //将cook里的值换成数组
        let gidarr = gid2.split("&");
        let colorarr = color2.split("&");
        let sizearr = size2.split("&");
        let kcarr = kc2.split("&");

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

        })

    }

    //存储cook
    function cook(data, arr) {
        let zz = arr.join("&");
        setcookie(data, zz, 7);
    }

    //初始化登陆

    function state() {
        let id = getcookie('id');
        if (id) {
            $('.nihao').html('您好,' + id);
            $('.log').html('退出登录');
            $('.reg').html('更换用户');
        } else {
            $('.nihao').html('您好，欢迎光临凡客诚品!');
            $('.log').html('登录');
            $('.reg').html('注册');
        }

    }

    //选中删除数据库
    function alldele(data) {
        let id = getcookie('id');
        let gid = $(data).parent().parent().attr('data-id');
        let color = $(data).parent().parent().children('.yy').children('a').children('.ys').html();
        let size = $(data).parent().parent().children('.sz').children('.zz').html();

        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/insert.php",
                dataType: 'json',
                data: {
                    type: 'delete',
                    gid,
                    color,
                    size
                },
                success: str => {
                    log(id);
                }
            });
        });

    }

    function alldelete(data) {
        let gid = $(data).parent().parent().attr('data-id');
        let color = $(data).parent().parent().children('.yy').children('a').children('.ys').html();
        let size = $(data).parent().parent().children('.sz').children('.zz').html();

        let gid2 = getcookie('gid');
        let color2 = getcookie('color');
        let size2 = getcookie('size');
        let kc2 = getcookie('kc');

        //将cook里的值换成数组
        let gidarr = gid2.split("&");
        let colorarr = color2.split("&");
        let sizearr = size2.split("&");
        let kcarr = kc2.split("&");

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

        })

    }

    state();
    new Shopping();

})()
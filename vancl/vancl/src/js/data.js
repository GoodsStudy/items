(() => {

    class Datail {
        constructor() {
            this.init();
        }

        init() {
            this.link(); //获取商品id&渲染
            this.cut(); //切换颜色
            this.picture(); //小图换大图
            this.measure(); //点击尺码
            this.magnifying(); //放大镜
            this.shopping(); //加入购物车
            this.liuyan(); //提问
        }


        //获取商品id
        link() {
            let url = Number(location.search[1]);
            show(url);
        }

        //切换颜色
        cut() {
            $('.color').on('click', 'li', function() {

                $('.color li .queding').removeClass('colorHoverok');
                $('.color li').attr('border', '1px solid #B4B4B4');
                $(this).attr('border', '1px solid #a10000');
                $(this).children('.queding').addClass('colorHoverok');
                let src = ($(this).children('img').attr('src'));
                $('.danpinColCenter img').attr('src', src);
                let color = $(this).attr('title');
                $('.SelectName').html(color);
                let url = Number(location.search[1]);
                let p = new Promise(function(resolve) {
                    $.ajax({
                        url: "../api/select.php",
                        dataType: "json",
                        data: {
                            type: 'colorimg',
                            url,
                            color
                        },
                        success: str => {
                            resolve(str);
                        }
                    });
                });
                p.then(function(data) {
                    let html = data.map(item => {
                        return ` <li>
                                    <img src="../img/${item.img}" alt="">
                                </li>`;
                    }).join("");

                    $('#imageMenu').html(html);
                })
                repertory();
            })
        }

        //小图换大图
        picture() {
            $('#imageMenu').on('mouseover', 'li', function() {
                let src = $(this).children('img').attr('src');
                $('.danpinColCenter .img').attr('src', src);
                $('#imageMenu li').removeClass('avter');
                $(this).addClass('avter');
            })
        }

        //点击尺寸
        measure() {
            $('.size').on('click', 'li', function() {
                $('.size li span').removeClass('colorHoverok');
                $(this).children('span').addClass('colorHoverok');
                $('.chima').html($(this).children('.cc').html());
                repertory();
            })
        }

        //放大镜
        magnifying() {
            //移入
            $('.danpinColCenter').on('mousemove', function(ev) {
                let src = $('.danpinColCenter .img').attr('src')
                $('.show img').attr('src', src);
                //显示遮罩和放大镜
                $('.show ').css('display', 'block');
                $('.mask ').css('display', 'block');

                //获取容器到left&top的距离和宽高
                let img = $('.img').offset();
                let lt = img.left;
                let tp = img.top;
                let bw = $('.danpinColCenter').width();
                let bh = $('.danpinColCenter').height();

                //获取遮罩的宽高
                let iw = $('.mask').width() / 2;
                let ih = $('.mask').height() / 2;
                //获取放大镜的宽高
                let fiw = $('.show').width();
                let fih = $('.show').height();

                //获取光标的位置
                let disx = ev.pageX;
                let disy = ev.pageY;

                //遮罩移动的距离
                let left = disx - iw;
                let top = disy - ih;

                //限制范围
                if (left <= lt) {
                    left = lt;
                } else if (left >= lt + bw - iw * 2) {
                    left = lt + bw - iw * 2;
                }

                if (top <= tp) {
                    top = tp;
                } else if (top >= tp + bh - ih * 2) {
                    top = tp + bh - ih * 2;
                }

                //设置遮罩跟着鼠标走
                $('.mask').offset({ left: left, top: top });
                //放大镜图片大小
                let siw = $('.show img').width();
                let sih = $('.show img').height();
                //移动比例
                let blx = (left - lt) / (bw - iw * 2);
                let bly = (top - tp) / (bh - ih * 2);

                //放大镜到边的距离
                let show = $('.show').offset();
                //放大镜移动
                $('.show img').offset({ left: show.left - fiw * blx, top: show.top - fih * bly });

            })

            //移出
            $('.danpinColCenter').on('mouseout', function() {

                $('.show ').css('display', 'none');
                $('.mask ').css('display', 'none');
            })
        }

        //加入购物车
        shopping() {
            $('.addToShoppingCar').on('click', function() {
                let color = $('.SelectName').html();
                let size = $('.chima').html();
                let url = Number(location.search[1]);


                let num = $('#sel option:selected').val();
                if (color && size) {
                    $('.shoppimg').css('display', 'none');
                    let id = getcookie('id');
                    let sz = getcookie('size');
                    if (id) {
                        cookToDb(url, size, color, num);
                    } else {
                        if (sz) {
                            //尺码增加
                            cook('size', size);
                            //颜色
                            cook('color', color);
                            //商品id
                            cook('gid', url);
                            //商品件数
                            cook('kc', num);

                        } else {
                            setcookie('size', size, 7);
                            setcookie('color', color, 7);
                            setcookie('gid', url, 7);
                            setcookie('kc', num, 7);
                        }
                    }
                } else {
                    $('.shoppimg').css('display', 'block');

                }

            })
        }

        //提问
        liuyan() {
            $('.tiw').on('click', function() {
                let id = getcookie('id');
                if (id) {
                    $('.fs').css('display', 'block');
                    fasong();
                } else {
                    let url = decodeURIComponent(window.location.href);
                    setcookie('url');
                    window.location.href = 'login.html';
                }


            })
        }

    }

    //商品渲染
    function show(data) {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/good.php",
                dataType: 'json',
                data: {
                    type: 'data',
                    url: data
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(data => {
            $('head title').html(data.list[0].title);
            let html = '';
            let str = "";
            data.Cimg.map(str => {
                //颜色图片渲染
                html += `<li class="fl" title="${str.color}">
                            <img class="fl" src="../img/${str.colorimg}" alt="">
                            <p class="fl">${str.color}</p>
                            <span class="queding"></span>
                        </li>`;
            });
            //尺寸渲染
            data.size.map(item => {
                str += `<li class="fl"><em class="cc">${item.size}</em>
                            <span class=""></span>
                        </li>`;
            })

            //大图渲染
            $('.danpinColCenter .img').attr('src', '../img/' + data.Cimg[0].colorimg);
            listimg(data.Cimg[0].color);

            $('.danpinArea h2').html(data.list[0].title);
            $('.danpinArea h2').attr('title', data.list[0].title);
            $('.price').html(data.list[0].price + '.00');
            $('.color').html(html);
            $('.size').html(str);
        })
    }

    //判断是否有库存
    function repertory() {
        let color = $('.SelectName').html();
        let size = $('.chima').html();
        let num = $('#sel option:selected').val();
        let url = Number(location.search[1]);

        if (color && size) {
            let p = new Promise(function(resolve) {
                $.ajax({
                    url: "../api/select.php",
                    dataType: 'json',
                    data: {
                        type: 'kc',
                        color,
                        size,
                        num,
                        url
                    },
                    success: str => {
                        resolve(str);
                    }
                });
            });
            p.then(function(data) {
                let kc = Number((data[0].kc));
                if (num > kc) {
                    $('.NowHasGoods').html('现在没货，库存只有' + kc + '件');
                } else {
                    $('.NowHasGoods').html('现在有货');
                }

            })
        }


    }

    //存货cook
    function cook(data, num) {
        let cc = getcookie(data);
        let arr = cc.split("&");
        arr.push(num);
        let zz = arr.join("&");
        setcookie(data, zz, 7);
    }

    //cook值传入数据库
    function cookToDb(gid, size, color, kc) {
        let uid = getcookie('id');
        console.log(uid);

        let p = new Promise(function(resolve) {
            $.ajax({
                url: '../api/insert.php',
                dataType: 'json',
                data: {
                    type: 'cook',
                    gid,
                    size,
                    color,
                    kc,
                    uid
                },
                success: str => {
                    resolve();
                }
            });
        });
        p.then(function() {
            $('.winds').css('display', 'block');
        })
    }

    //小图初始化
    function listimg(data) {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
                dataType: 'json',
                data: {
                    type: 'listimg',
                    colo: data
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(function(data) {
            let html = data.map(item => {
                return `<li>
                            <img src="../img/${item.img}" alt="">
                        </li>`;

            }).join("");

            $('#imageMenu').html(html);
        })

    }

    //发送
    function fasong() {
        $('.fa').on('click', function() {
            let uid = getcookie('id');
            let text = $('#tex').val();
            let p = new Promise(function() {
                $.ajax({
                    url: '../api/insert.php',
                    dataType: "json",
                    data: {
                        type: 'fs',
                        text,
                        uid
                    },
                    success: str => {
                        
                    }
                });
            });


        })

    }


    repertory();
    new Datail();

})()
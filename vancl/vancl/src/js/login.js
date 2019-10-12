(() => {

    class Login {
        constructor() {
            //构造函数
            this.state = true;
            this.init();
        }

        init() {
            this.cut(); //切换登录方式
            this.enter(); //用户名&密码不能为空

        }

        //登录方式切换
        cut() {
            //普通登录
            $('.show').on('click', '.show_left', () => {
                $('.show_left').css('background', '#b42025');
                $('.show_left').css('font-weight', 'bolder');
                $('.show_left').css('color', '#fff');
                $('.show_right').css('background', '#f5f5f5');
                $('.show_right').css('font-weight', '');
                $('.show_right').css('color', '#656565');
                this.state = true;
                $('.box').html(`<label for="" class="login">
                                    <input type="text" id="name" placeholder="请输入用户名 ">
                                </label>
                                <label for="" class="paw">
                                    <input type="password" id="paws" placeholder="请输入密码 ">
                                    <p class="pt"></p>
                                </label>
                                <p class="fr find">找回密码</p>`);
            })

            //快速登录
            $('.show').on('click', '.show_right', () => {
                $('.show_right').css('background', '#b42025');
                $('.show_right').css('font-weight', 'bolder');
                $('.show_right').css('color', '#fff');
                $('.show_left').css('background', '#f5f5f5');
                $('.show_left').css('font-weight', '');
                $('.show_left').css('color', '#656565');
                this.state = false;
                $('.box').html(`<label for="" class="mb">
                                    <input type="text" id="mobile" class="fl" placeholder="输入手机号">
                                    <p class="fl yzm">获取短信验证码</p>
                                </label>
                                <label for="" class="auth">
                                    <input type="text" id="code" class="fl" placeholder="验证码">
                                    <p class="fl _quickpiccodeimg"></p>
                                    <span class="cut">
                                        看不清?换一张
                                    </span>
                                </label>
                                <input type="text" placeholder="请输入手机验证码" id="inpu">`);
            })
        }

        //登录
        enter() {
            $('.show').on('click', '.lg', () => {
                //普通登陆
                let name = $('#name').val().trim();
                let paw = $('#paws').val().trim();
                if (this.state) {
                    if (name) {
                        if (paw) {
                            let p = new Promise(function(resolve) {
                                $.ajax({
                                    url: "../api/log.php",
                                    dataType: 'json',
                                    data: {
                                        type: 'log',
                                        name,
                                        paw
                                    },
                                    success: str => {
                                        resolve(str);
                                    }
                                });
                            });
                            p.then(data => {
                                if (data.name && data.paw) {
                                    setcookie('id', name, 7); //用户id存储，七天免登陆
                                    showcook();
                                    let url = getcookie('url'); //获取登陆成功后跳转的地址
                                    window.location.href = url;

                                } else if (data.name) {
                                    $('.pt2').css('display', 'block');
                                    $('.pa').html('账号与密码不匹配!');
                                } else {
                                    $('.pt2').css('display', 'block');
                                    $('.pa').html('账号不存在!');
                                }
                            });
                        } else {
                            $('.pt2').css('display', 'block');
                            $('.pa').html('密码不能为空!');
                        }
                    } else {
                        $('.pt1').css('display', 'block');
                    }
                }

            })

            //用户名提示消失
            $('#name').on('blur', function() {
                let name = $('#name').val().trim();
                if (name) {
                    $('.pt1').css('display', 'none');
                }
            })

            //密码提示消失
            $('#paws').on('blur', function() {
                let paws = $('#paws').val().trim();
                if (paws) {
                    $('.pt2').css('display', 'none');
                }
            })
        }

    }


    //获取cook里的值
    function showcook() {
        let gid = getcookie('gid');
        let size = getcookie('size');
        let color = getcookie('color');
        let kc = getcookie('kc');
        let gidarr = gid.split("&");
        let sizearr = size.split("&");
        let colorarr = color.split("&");
        let kcarr = kc.split("&");

        gidarr.map((item, index) => {
            console.log(gidarr[index], sizearr[index], colorarr[index], kcarr[index]);

            cookToDb(gidarr[index], sizearr[index], colorarr[index], kcarr[index]);

        })
    }

    //cook值传入数据库
    function cookToDb(gid, size, color, kc) {
        let uid = getcookie('id');
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
                    console.log(str);
                }
            });
        });

    }
    new Login
})()
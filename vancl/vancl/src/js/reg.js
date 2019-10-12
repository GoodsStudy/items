(() => {

    class Reg {
        constructor() {
            //构造函数
            this.init();
            this.yy = false; //验证码的校验状态
            this.ss = false; //手机的校验状态
            this.mm = false; //密码的校验状态
            this.mms = false; //确认密码的校验状态
        }
        init() {
            this.yzm(); //随机生成验证码
            this.yzms(); //正则判断验证码
            this.sj(); //手机验证
            this.paw(); //密码验证
            this.verify(); //确认密码
            this.agree(); //同意条款
            this.reg(); //注册
            this.noto(); //获取短信
        }

        //验证码
        yzm() {
            $('.renovate').on('click', () => {
                sjyzm(); //随机生成验证码，颜色和旋转
            });
        }

        //正则判断验证码
        yzms() {
            //验证码聚焦
            $('#text').on('focus', function() {
                $('#text').css('border', 'solid 1px #90B0E3'); //聚焦改变边框颜色
            });

            //验证码验证
            $('#text').on('blur', () => {
                $('#text').css('border', 'solid 1px #cbcbcb'); //失去焦点变回原边框颜色
                let tex = $('#text').val().toLowerCase().trim();
                let yz = analysis().toLowerCase();

                if (tex) {
                    if (tex == yz) {
                        $('.imgyzm').css('height', '0');
                        $('.imgyzm').css('border', '0px #ffd5d5 solid');
                        this.yy = true;
                    } else {
                        $('.imgyzm').css('height', '24px');
                        $('.imgyzm').css('border', '1px #ffd5d5 solid');
                        this.yy = false;
                    }
                } else {
                    $('.imgyzm').css('height', '0');
                    $('.imgyzm').css('border', '0px #ffd5d5 solid');
                    this.yy = false;
                }
            })
        }

        //手机验证
        sj() {
            $('#phone').on('focus', function() {
                $('#phone').css('border', 'solid 1px #90B0E3'); //聚焦改变边框颜色
                $('#sj').addClass('reg_sjh'); //聚焦的样式
                $('#sj').removeClass('reg_yzm'); //失去焦点&错误的样式
                $('#sj').css('height', '20px'); //提示的高度
                $('#sj').html('请填写真实的手机号，并且进行验证'); //提示内容
            })

            $('#phone').on('blur', () => {
                $('#phone').css('border', 'solid 1px #cbcbcb'); //失去焦点变回原边框颜色
                $('#sj').addClass('reg_yzm');
                $('#sj').removeClass('reg_sjh');
                $('#sj').css('height', '0px');
                $('#sj').css('border', '0px #ffd5d5 solid'); //提示边框
                if ($('#phone').val().trim()) {
                    if (!phones()) { // 正则验证
                        $('#sj').css('height', '24px');
                        $('#sj').css('border', '1px #ffd5d5 solid');
                        $('#sj').html('请输入有效的手机号')
                        this.ss = false;
                    } else {
                        this.ss = true;
                    }
                } else {
                    this.ss = false;
                }

            })
        }

        //密码验证
        paw() {
            $('#paw').on('focus', function() {
                $('#paw').css('border', 'solid 1px #90B0E3'); //聚焦改变边框颜色
                $('#pawss').addClass('reg_sjh'); //聚焦的样式
                $('#pawss').removeClass('reg_yzm'); //失去焦点&错误的样式
                $('#pawss').css('height', '20px'); //提示的高度
                $('#pawss').html('6-16位字符，可使用字母、数字或符号的组合'); //提示内容
            })

            $('#paw').on('blur', () => {
                $('#paw').css('border', 'solid 1px #cbcbcb'); //失去焦点变回原边框颜色
                $('#pawss').addClass('reg_yzm');
                $('#pawss').removeClass('reg_sjh');
                $('#pawss').css('height', '0px');
                $('#pawss').css('border', '0px #ffd5d5 solid'); //提示边框
                if ($('#paw').val().trim()) {
                    if (!password()) { // 正则验证
                        $('#pawss').css('height', '24px');
                        $('#pawss').css('border', '1px #ffd5d5 solid');
                        $('#pawss').html('密码必须大于6位,请重新输入');
                        this.mm = false;
                    } else {
                        this.mm = true;
                    }
                } else {
                    this.mm = false;
                }
            })
        }

        //确认密码
        verify() {
            $('#paws').on('focus', function() {
                $('#paws').css('border', 'solid 1px #90B0E3'); //聚焦改变边框颜色
                $('#pas').addClass('reg_sjh'); //聚焦的样式
                $('#pas').removeClass('reg_yzm'); //失去焦点&错误的样式
                $('#pas').css('height', '20px'); //提示的高度
                $('#pas').html('请再次输入登录密码，两次输入必须一致'); //提示内容
            })

            $('#paws').on('blur', () => {
                $('#paws').css('border', 'solid 1px #cbcbcb'); //失去焦点变回原边框颜色
                $('#pas').addClass('reg_yzm');
                $('#pas').removeClass('reg_sjh');
                $('#pas').css('height', '0px');
                $('#pas').css('border', '0px #ffd5d5 solid'); //提示边框
                let tex = $('#paws').val().trim();
                let text = $('#paw').val().trim();

                if ($('#paws').val().trim()) {
                    if (tex != text) { // 正则验证
                        $('#pas').css('height', '24px');
                        $('#pas').css('border', '1px #ffd5d5 solid');
                        $('#pas').html('两次输入密码不一致,请重新输入');
                        this.mms = false;
                    } else {
                        this.mms = true;
                    }
                } else {
                    this.mms = false;
                }
            })
        }

        //同意条款
        agree() {
            $('#box').on('click', function() {
                if ($('#box').prop('checked')) {
                    $('#btn').css('background', '#B52024');
                } else {
                    $('#btn').css('background', '#9A9A9A');
                }
            })
        }

        //注册
        reg() {
            $('#btn').on('click', () => {
                if ($('#box').prop('checked')) {
                    if (this.yy && this.ss && this.mm && this.mms) {
                        sql();
                             console.log(666);
                    }
                }
            });
        }

        //获取短信验证码
        noto() {
            $('.noto').on('click', function() {
                let yzm = parseInt(Math.random() * 9000) + 1000;
                let num = $('#phone').val().trim();
                if (num) {
                    let p = new Promise(function(resolve) {
                        $.ajax({
                            url: 'http://v.juhe.cn/sms/send',
                            dataType: 'json',
                            data: {
                                mobile: num,
                                key: '5abaa79158fd2f7df8cbdb9067c59ab5',
                                tpl_id: '190358',
                                tpl_value: '#code#=' + yzm,
                            },
                            success: str => {
                                console.log(str);
                            }
                        });
                    });
                }
            });
        }

    }

    sjyzm(); //初始化验证码

    //生成随机验证码
    function sjyzm(data) {
        let str = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm0123456789';
        let html = '';
        for (let i = 0; i < 6; i++) {
            let num = parseInt(Math.random() * str.length);
            html += `<span style="${color()};${xz()};${hnk()}">${str[num]}</span>`;
        }
        $('.renovate').html(html);
    }

    //字体颜色
    function color() {
        let str = '0123456789';
        let html = '';
        for (let i = 0; i < 6; i++) {
            let num = parseInt(Math.random() * str.length);
            html += str[num];
        }
        return 'color:#' + html;
    }

    //随机旋转
    function xz() {
        var num = parseInt(Math.random() * 90);
        var html = "transform:rotateZ(" + num + "deg);";
        return html;
    }

    //行内快
    function hnk() {
        var html = "display: inline-block;margin-left:5px;"
        return html;
    }

    //遍历验证码
    function analysis() {
        let str = '';
        $('.renovate').children().each(function(index, item) {
            str += $(item).html();
        })
        return str;
    }

    //手机正则验证
    function phones() {
        let tex = $('#phone').val().trim();
        let reg = /^1[3-9]\d{9}$/;
        return reg.test(tex);
    }

    //密码验证
    function password() {
        let tex = $('#paw').val();
        let reg = /^[a-zA-Z0-9-\S]{6,16}$/;
        return reg.test(tex);
    }

    //插入数据库
    function sql() {
        let name = $('#phone').val();
        let paw = $('#paw').val();
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/insert.php",
                dataType: 'json',
                data: {
                    type: 'reg',
                    name,
                    paw
                },
                success: str => {
                    resolve(str);
                }
            });
        });
        p.then(function(data) {            
            window.location.href = 'login.html';
            
        });
    }

    new Reg();

})()
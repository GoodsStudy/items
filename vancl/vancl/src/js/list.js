(() => {

    class List {

        constructor() {
            this.ipage = 1;
            this.number = 10;
            this.overall = 0;
            this.init();

        }

        init() {
            this.show(); //渲染数据
            this.appear(); //聚焦出现价格下方框
            this.price_sort(); //价格排序
            this.pag(); //显示页数
            this.btn_number(); //点击页数跳转
            this.upDown(); //上下叶切换
            this.godata(); //跳转详情页


        }

        //渲染数据
        show() {
            let sort = true;
            let number = this.number;
            let ipage = this.ipage;
            let p = new Promise((resolve) => {
                $.ajax({
                    url: "../api/select.php",
                    dataType: 'json',
                    data: {
                        type: 'list',
                        sort,
                        number,
                        ipage
                    },
                    success: str => {
                        resolve(str);
                    }
                });
            });
            p.then(data => {
                apply(data);
            });

        }

        //聚焦出现价格下方框
        appear() {
            //价格文本框聚焦出现下方框
            $('#min').on('click', function(ev) {
                $('.btn').css('display', 'block');
                ev.stopPropagation();
            })
            $('#max').on('click', function(ev) {
                $('.btn').css('display', 'block');
                ev.stopPropagation();
            })

            //阻止冒泡
            $('.query').on('click', function(ev) {
                $('.btn').css('display', 'block');
                ev.stopPropagation();
            })

            //清空
            $('.clear').on('click', function() {
                $('#min').val("");
                $('#max').val("");
                $('#min').focus();
            })

            //确定
            $('.confirm').on('click', (ev) => {
                let sort = true;
                let min = $('#min').val().trim();
                let max = $('#max').val().trim();
                //两个都有范围
                priceSort(min, max, sort, this.number, this.ipage);
                ev.stopPropagation();
                $('.btn').css('display', 'none');
            })
        }

        //价格排序
        price_sort() {
            //升序
            $('.jg').on('click', () => {
                let sort = true;
                let min = $('#min').val().trim();
                let max = $('#max').val().trim();
                //两个都有范围
                priceSort(min, max, sort, this.number, this.ipage);
            });
            //降序
            $('.jgnext').on('click', () => {
                let sort = false;
                let min = $('#min').val().trim();
                let max = $('#max').val().trim();
                //两个都有范围
                priceSort(min, max, sort, this.number, this.ipage);
            });
        }

        //页数渲染
        pag() {
            let p = new Promise((resolve) => {
                $.ajax({
                    url: '../api/log.php',
                    dataType: 'json',
                    data: {
                        type: 'pag',
                    },
                    success: str => {
                        resolve(str);
                    }
                });
            });
            p.then(data => {
                //顶部页数
                let num = Math.ceil(data / this.number);
                this.overall = num;
                $('.num').html(this.ipage + '/' + this.overall);
                //底部页数
                let str = '';
                for (let i = 1; i <= num; i++) {
                    if (this.ipage == i) {
                        str += `<span class="currentpage">${i}</span>`;
                    } else {
                        str += `<span class="track">${i}</span>`;
                    }
                }
                $('.yeshu').html(str);
            });
        }

        //页数点击跳转
        btn_number() {
            let _this = this;
            let sort = true;
            $('.yeshu').on('click', 'span', function() {
                let sum = _this.ipage;
                let number = _this.number;
                let min = $('#min').val().trim();
                let max = $('#max').val().trim();
                _this.ipage = Number($(this).html()); //修改当前页数
                together();
                $(this).addClass('currentpage');
                let num = Number($(this).html());
                priceSort(min, max, sort, number, num);
                $('#page').val(_this.ipage);
                $('.num').html(_this.ipage + '/' + _this.overall);
            });
        }

        //上下切换
        upDown() {
            let sort = true;
            let min = $('#min').val().trim();
            let max = $('#max').val().trim();
            //上一页
            $('.number_prve').on('click', () => {
                together();
                this.ipage--;
                if (this.ipage <= 1) {
                    this.ipage = 1;
                }
                $('.yeshu span').each((index, item) => {
                    if (Number($(item).html()) == this.ipage) {
                        $(item).addClass('currentpage');
                    }
                });
                $('#page').val(this.ipage);
                priceSort(min, max, sort, this.number, this.ipage);
                $('.num').html(this.ipage + '/' + this.overall);

            });
            //底部下一页
            $('.number_next').on('click', () => {
                together();
                this.ipage++;
                if (this.ipage > this.overall) {
                    this.ipage = this.overall;
                }
                $('.yeshu span').each((index, item) => {
                    if (Number($(item).html()) == this.ipage) {
                        $(item).addClass('currentpage');
                    }
                });
                priceSort(min, max, sort, this.number, this.ipage);
                $('#page').val(this.ipage);
                $('.num').html(this.ipage + '/' + this.overall);
            });
            //确定
            $('#number_btn').on('click', () => {
                let tex = Number($('#page').val());
                if (tex <= this.overall) {
                    let sort = true;
                    let min = $('#min').val().trim();
                    let max = $('#max').val().trim();
                    this.ipage = tex;
                    priceSort(min, max, sort, this.number, this.ipage);
                    $('.num').html(this.ipage + '/' + this.overall);
                }
            })
        }

        //跳转详情页
        godata() {
            $('.pruarea').on('click', 'li', function() {
                let url = $(this).attr('data-id');
                window.location.href = 'detail.html' + '?' + url;
            })
        }


    }

    //页面渲染
    function apply(data) {
        let html = data.map(item => {
            if (item.state == 'true') {
                return ` <li data-id="${item.id}" class="fl">
                            <a href="###" title="${item.title}">
                                <img src="${item.img}" alt="">
                                <span class="teshui">${item.price}</span>
                            </a>
                            <p class="title">
                                <a href="###" title="${item.title}">
                                ${item.title}
                                </a>
                            </p>
                            <p class="price">
                                售价￥
                                <span class="tehui">${item.tehui}</span>
                            </p>
                        </li>`;
            } else if (item.state == 'false') {
                return ` <li  data-id="${item.id}" class="fl">
                <a href="###" title="${item.title}">
                    <img src="${item.img}" alt="">
                    <span class="newview"></span>
                </a>
                <p class="title">
                    <a href="###" title="${item.title}">
                    ${item.title}
                    </a>
                </p>
                <p class="price">
                    售价￥
                    <span class="newvw">${item.price}</span>
                </p>
            </li>`;
            }
        }).join("");
        $('.pruarea').html(html);
    }

    //价格排序
    function priceSort(min, max, sort, number, ipage) {

        if (min && max) {
            let p = new Promise(function(resolve) {
                $.ajax({
                    url: "../api/select.php",
                    dataType: 'json',
                    data: {
                        type: 'and',
                        sort,
                        min,
                        max,
                        number,
                        ipage
                    },
                    success: str => {
                        resolve(str);
                    }
                });
            });
            p.then(function(data) {
                apply(data);
            });
        } else if (min && !max) { //输入一个最小
            let p = new Promise(function(resolve) {
                $.ajax({
                    url: "../api/select.php",
                    dataType: 'json',
                    data: {
                        type: 'jian',
                        sort,
                        min,
                        number,
                        ipage
                    },
                    success: str => {
                        resolve(str);
                    }
                });
            });
            p.then(function(data) {
                apply(data);
            })
        } else if (!min && max) { //最大查询
            let p = new Promise(function(resolve) {
                $.ajax({
                    url: "../api/select.php",
                    dataType: 'json',
                    data: {
                        type: 'jia',
                        sort,
                        number,
                        ipage,
                        max
                    },
                    success: str => {
                        resolve(str);
                    }
                });
            });
            p.then(function(data) {
                apply(data);
            })
        } else {
            let p = new Promise(function(resolve) {
                $.ajax({
                    url: "../api/select.php",
                    dataType: 'json',
                    data: {
                        type: 'list',
                        sort,
                        number,
                        ipage,
                    },
                    success: str => {
                        resolve(str);
                    }
                });
            });
            p.then(function(data) {
                apply(data);
            })
        }
    }

    //排他
    function together() {
        $('.yeshu span').each(function(index, item) {
            if ($(item).hasClass('currentpage')) {
                $(item).removeClass('currentpage');
                $(item).addClass('track');
            }
        });
    }

    //点击window价格下方消失
    $(window).on('mouseup', function(ev) {
        $('.btn').css('display', 'none');
    })


    new List();
})()
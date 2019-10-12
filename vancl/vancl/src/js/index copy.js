(() => {

    //返回顶部
    $(".FixedMenu li").last()
        .on('click', $(".FixedMenu li").last(), function () {
            window.scrollTo(0, 0);
        });

    //秒杀倒计时,每天22点更新
    function count() {
        let date = new Date(); //系统当前时间
        let data = new Date(); //准备更改的时间
        //判断是否到当日的22点，更改天
        if (data.getHours() >= 22) {
            data.setDate(data.getDate() + 1);
        }
        //更改小时
        data.setHours(22, 0, 0)

        let second = (data - date) / 1000;
        second--;
        //时间转换
        let miao = zero(second % 60);
        let fen = zero(parseInt(second / 60) % 60);
        let shi = zero(parseInt(second / 3600));
        return {
            shi,
            fen,
            miao
        };


    }

    sj(count());
    let res = setInterval(function () {
        sj(count());
    }, 1000);

    //渲染倒计时
    function sj(item) {
        for (let i in item) {
            $(".seckill").html(` <span>秒杀进行中，距介绍还有</span>
          ${item.shi}
            <span></span>
            ${item.fen}
            <span></span>
            ${item.miao}`);

        }
    }

    //下拉菜单
    $(".down_title li").on("mouseenter", function () {

        //二级导航栏显示
        //  $(this).children('ul').css('display', 'block');
        //获取li的个数和高度
        let num = $(this).children('.down_conten').children('li').size();
        let ih = $(this).children('.down_conten').children('li').height();

        // $(this).children('.down_conten').stop().animate({
        //     "height": 'auto'
        // }, 300)

        // console.log($(this).find('.down_conten').html());
        // console.log($(this).find('.down_conten').height());
        $(this).find('.down_conten').stop().slideDown();

    }).on("mouseleave", function () {
        setTimeout(() => {
            // $(this).children('.down_conten').stop().animate({
            //     "height": 0
            // }, 500) 
            $(this).find('.down_conten').stop().slideUp();
        }, 100)


    });

})();

//轮播图
//1.渲染图片
let arr = ['img/index76.jpg', 'img/index77.jpg', 'img/index78.jpg', 'img/index79.jpg', 'img/index80.jpg', 'img/index81.jpg', 'img/index82.jpg'];
let str = "";
let html = "";
arr.map((item, index) => {
    str += `<li>
                                <img src="../${item}" alt="">
                            </li >`;
    html += `<li data-id="${index}" class="fl ulFocus"></li>`;
})
$('.vancl_banner .img').html(str);
$('.vancl_banner .focus').html(html);

let index = 0;
$('.vancl_banner .img li').eq(index).css('z-index', index + 1);
$('.vancl_banner .focus li').eq(index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');

//自动轮播
var res = setInterval(function () {

    nex();
    //焦点跟着变
    $('.vancl_banner .focus li').eq(index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
    index++;
}, 1000);



//下一张
function nex() {
    let leg = $('.vancl_banner .img li').size();
    if (index >= leg) {
        index = 0;
    }
    $('.vancl_banner .img li').eq(index).css('z-index', index + 1).siblings().css('z-index', 0);
}

//上一张
function previous() {
    let leg = $('.vancl_banner .img li').size();
    if (index < 0) {
        index = leg - 1;
    }

    $('.vancl_banner .img li').eq(index).css('z-index', index + 1).siblings().css('z-index', 0);
}

//2.点击切换。下一张
//鼠标在轮播图上，停止滚动
$('.vancl_banner ').on('mouseover', function () {
    clearInterval(res);
});
//离开继续滚动
$('.vancl_banner').on('mouseout', function () {
    res = setInterval(function () {
        nex();
        //焦点跟着变
        $('.vancl_banner .focus li').eq(index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
    }, 1000);
});
//点击切换上下
//下
$('.handover').on('click', '.handoverRright', function () {
    index++;
    console.log(index);
    nex();
    $('.vancl_banner .focus li').eq(index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
});
//上
$('.handover').on('click', '.handoverLeft', function () {
    index--;
    previous();
    console.log(index);
    $('.vancl_banner .focus li').eq(index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
});

//3.划过焦点改变图片
$('.vancl_banner .focus li').on('mouseover', function () {
    let id = $(this).attr('data-id');
    index = Number(id);
    $('.vancl_banner .img li').eq(index).css('z-index', index + 1).siblings().css('z-index', 0);

    $('.vancl_banner .focus li').eq(index).attr('class', 'fl ulFocus avert').siblings().attr('class', 'fl ulFocus');
});
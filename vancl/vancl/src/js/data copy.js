(() => {

    class Datail {
        constructor() {
            this.init();
        }

        init() {
            this.link(); //获取商品id&渲染
            this.cut(); //切换颜色
            this.picture(); //小图换大图
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
                $(this).children('.queding').addClass('colorHoverok');
                let src = ($(this).children('img').attr('src'));
                $('.danpinColCenter img').attr('src', src);
                let color = $(this).attr('title');

                let url = Number(location.search[1]);
                let p = new Promise(function(resolve) {
                    $.ajax({
                        url: "../api/select.php",
                        dataType: 'json',
                        data: {
                            type: 'data',
                            url,

                        },
                        success: str => {
                            console.log(str);
                            resolve(str);
                        }
                    });
                });
                p.then(function(data){
                    let str ='';
                    data.map(item=>{
                        item.size = item.size.split("&");
                        item.himg = item.himg.split("&");
                        item.bimg = item.bimg.split("&");
                        item.color = item.color.split("&");
                        item.colorimg = item.colorimg.split("&");

                      
                        if(color == '黑色'){
                          item.color.map(str=>{
                                  
                        })
                        }
                      

                    });
                   
                    
                });

            })
        }

        //小图换大图
        picture() {
            $('#imageMenu').on('mouseover', 'li', function() {
                let src = $(this).children('img').attr('src');
                $('.danpinColCenter img').attr('src', src);
                $('#imageMenu li').removeClass('avter');
                $(this).addClass('avter');
            })
        }

    }

    //商品渲染
    function show(data) {
        let p = new Promise(function(resolve) {
            $.ajax({
                url: "../api/select.php",
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
        p.then(function(data) {
            console.log(data)
            let sizeStr = '';
            let gimgStr = '';
            let colorStr = '';
            data.map(item => {
                item.size = item.size.split("&");
                item.himg = item.himg.split("&");
                item.bimg = item.bimg.split("&");
                item.color = item.color.split("&");
                item.colorimg = item.colorimg.split("&");
                item.size.map(str => {
                    sizeStr += `<li class="fl">${str}
                                    <span></span>
                                </li>`;
                })

                //颜色
                for (let i = 0; i < item.color.length; i++) {
                    gimgStr += `<li class="fl" title="${item.color[i]}">
                                <img class="fl" src="../img/${item.himg[i]}" alt="">
                                <p class="fl">${item.color[i]}</p>
                                <span class="queding"></span>
                            </li>`;
                }

                //小图
                item.colorimg.map(str => {
                    colorStr += `<li>
                                    <img src="../img/${str}" alt="">
                                </li>`;
                })
                $('.danpinArea h2').html(item.title);
                $('.danpinArea h2').attr('titel', item.title);
                $('.price').html(item.price + '.00');

            });
            $('.size').html(sizeStr);
            $('.color').html(gimgStr);
            $('#imageMenu').html(colorStr);

        });


    }


    new Datail();

})()
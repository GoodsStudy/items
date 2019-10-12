(() => {

    let ipage = 1;
    let number = 5;
    //渲染
    function user() {
        let html = '';
        let p = new Promise(function(res) {
            $.ajax({
                url: "../../src/api/select.php",
                dataType: "json",
                data: {
                    type: 'user',
                    ipage,
                    number
                },
                success: str => {
                    res(str);
                }
            });
        });
        p.then(function(data) {
            data.map(item => {
                html += `<tr>
								<td><input type="checkbox" /></td>
								<td class = "id">${item.id}</td>
								<td>${item.name}</td>
								<td class="center" contenteditable="true">${item.paw}</td>
								<td></td>
								<td>
									<button type="submit" class="btn btn-success">修改并保存</button>
									<button type="submit" data-id="${item.id}" class="btn btn-danger">删除</button>
									<button type="submit" class="btn btn-info">Edit</button>
								</td>
							</tr>`;
            })
            $('tbody').html(html);
            upd();
        });
    }

    //删除
    function dele() {
        $('tbody').on('click', '.btn-danger', function() {
            let uid = $(this).attr('data-id');
            let p = new Promise(function(res) {
                $.ajax({
                    url: "../../src/api/insert.php",
                    dataType: "json",
                    data: {
                        type: 'dele',
                        uid
                    },
                    success: str => {
                        user();
                        res(str);
                    }
                })
            })
            user();
        });


    }

    //切换页数
    function qiehuan() {
        $('.span12').on('click', '.fg-button ', function() {
            let num = $(this).html();
            ipage = num;
            user();
        })
    }

    //渲染页数
    function yeshu() {
        let p = new Promise(function(res) {
            $.ajax({
                url: "../../src/api/insert.php",
                dataType: "json",
                data: {
                    type: 'yeshu',
                },
                success: str => {
                    res(str)
                }
            });
        });
        p.then(function(data) {
            let num = Math.ceil(data / number);
            let str = "";
            for (let i = 0; i < num; i++) {
                str += `<a tabindex="0" class="fg-button ui-button ui-state-default">${i+1}</a>`;
            }

            $('.paging_full_numbers span').html(str);
        })
    }

    //修改
    function upd() {

        $('.btn').on('click', function() {
            let paw = $(this).parent().prev().prev().html();
            let uid =1* $(this).parent().parent().children('.id').html();
            
            let p = new Promise(function(res) {
                $.ajax({
                    url: "../../src/api/insert.php",
                    dataType: "json",
                    data: {
                        type: 'xg',
                        paw,
                        uid
                    },
                    success: str => {
                        console.log(str);
                        
                    }
                });
            });

        })

    }



    yeshu();
    qiehuan();
    dele();
    user();


})()
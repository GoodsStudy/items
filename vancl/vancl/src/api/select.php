<?php

    header('Content-type:text/html;charset=utf-8');
    $servername = "localhost";
    $dbname = "vancl";
    $username = "root";
    $password = "root";

    $conn = new mysqli($servername,$username,$password, $dbname);

    if($conn->connect_error){
        die("链接失败:".$conn->connect_error);
    }

    $type = isset($_REQUEST['type'])?$_REQUEST['type']:"";//状态
    $url = isset($_REQUEST['url'])?$_REQUEST['url']:"";//跳转的商品id
    $size = isset($_REQUEST['size'])?$_REQUEST['size']:"";//商品尺寸
    $num = isset($_REQUEST['num'])?$_REQUEST['num']:"";//商品件数
    $color = isset($_REQUEST['color'])?$_REQUEST['color']:"";//商品的颜色
    $sort = isset($_REQUEST['sort'])?$_REQUEST['sort']:"";//排序状态
    $number = isset($_REQUEST['number'])?$_REQUEST['number']:"";//分页一页多少
    $ipage = isset($_REQUEST['ipage'])?$_REQUEST['ipage']:"";//分页的页数
    $min = isset($_REQUEST['min'])?$_REQUEST['min']:"";//最小价格
    $max = isset($_REQUEST['max'])?$_REQUEST['max']:"";//最大价格
    $colo = isset($_REQUEST['colo'])?$_REQUEST['colo']:"";//颜色小图
    $id = isset($_REQUEST['id'])?$_REQUEST['id']:"";//用户id
    $gid = isset($_REQUEST['gid'])?$_REQUEST['gid']:"";//商品id
    if($ipage){
        $index = ($ipage - 1) * $number;
    }

    switch ($type) {
        case 'title'://导航栏
            $sql = "SELECT * FROM title";
            break;   
        case 'show': //轮播图
            $sql = 'SELECT * FROM `show`';
            break;
        case 'seckill':
            $sql = 'SELECT * FROM seck';
            break;
        case 'trousers':
            $sql = 'SELECT * FROM trousers';
            break;
        case 'quality':
            $sql = 'SELECT * FROM Bq';
            break;
        case 'new':  //新品衣服
            $sql = 'SELECT * FROM newGood';
            break;
        case 'discount'://首页商品
            $sql = 'SELECT * FROM discount';
            break;
        case 'data'://详情页商品
            $sql = "SELECT * FROM good,listgood WHERE good.gid = listgood.id AND listgood.id = $url";
            break;
        case 'colorimg'://商品颜色
            $sql = "SELECT img FROM colorimg WHERE gid = $url AND color ='$color'";
            break;
        case 'kc'://库存
            $sql = "SELECT  * FROM sizecolo WHERE gid =$url  AND size = '$size' AND color = '$color'";
            break;
        case 'listimg'://颜色小图
            $sql = "SELECT * FROM colorimg WHERE color = '$colo'";
            break;
        case 'gouwu'://购物车商品
            $sql = "SELECT * FROM gouwu WHERE uid='$id'";
            break;
        case 'kk'://购物车单个商品信息
            $sql = "SELECT * FROM listgood WHERE id = '$gid'";
            break;
        case 'gg'://购物车商品查询
            $sql = "SELECT * FROM listgood,gouwu,wearcolor WHERE listgood.id = gouwu.gid AND gouwu.color = wearcolor.color";
            break;
        case 'nolog'://没有登陆的购物车数据信息
            $sql = "SELECT * FROM listgood,wearcolor WHERE listgood.id = $gid AND listgood.id = wearcolor.gid AND wearcolor.color = '$color'";
            break;
        case 'user'://用户分页查询
            $sql = "SELECT * FROM `user` LIMIT $ipage,$number;";
            break;
        case 'list'://列表页商品
            switch($sort){
                case 'true':
                    $sql = "SELECT * FROM listgood ORDER BY price ASC LIMIT $index,$number";
                    break;
                case 'false':
                    $sql = "SELECT * FROM listgood ORDER BY price DESC LIMIT $index,$number";
                    break;
            }
            break;
        case 'and'://价格区间
            switch($sort){
                case 'true':$sql = "SELECT * FROM listgood WHERE price BETWEEN $min AND $max ORDER BY price ASC LIMIT $index,$number ";
                            break;
                case 'false':$sql = "SELECT * FROM listgood WHERE price BETWEEN $min AND $max ORDER BY price DESC LIMIT $index,$number ";
                            break;
            }
            break;
        case 'jian'://价格最小值查询
            switch($sort){
                case 'true': $sql = "SELECT * FROM listgood WHERE price>$min ORDER BY price ASC LIMIT $index,$number ";
                    break;
                case 'false': $sql = "SELECT * FROM listgood WHERE price>$min ORDER BY price DESC LIMIT $index,$number ";
                    break;
            }
            break;
           
        case 'jia'://价格最小值查询
            switch($sort){
                case 'true': 
                    $sql = "SELECT * FROM listgood WHERE price<$max ORDER BY price ASC LIMIT $index,$number ";
                break;
                case 'false':
                    $sql = "SELECT * FROM listgood WHERE price<$max ORDER BY price DESC LIMIT $index,$number ";
                break;
            }
            break;   
        default:
            break;
    }

    $res = $conn->query($sql);   
    $arr = $res->fetch_all(MYSQLI_ASSOC);//数组 [{},{},{}]
    echo(json_encode($arr));
   
    $conn->set_charset('utf8');//设置编码
    
    $res->close();
    $conn->close();

?>
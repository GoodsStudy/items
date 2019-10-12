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

    $url = isset($_REQUEST['url'])?$_REQUEST['url']:"";

    //单个商品信息
    $sql = "SELECT * FROM listgood WHERE id =$url";
    $res = $conn->query($sql);
    $arr = $res->fetch_all(MYSQLI_ASSOC);

    //单个商品颜色
    $sql2 = "SELECT color,colorimg FROM wearcolor WHERE gid =$url ";
    $res2 = $conn->query($sql2);
    $arr2 = $res2->fetch_all(MYSQLI_ASSOC);

    //单个商品的尺寸
    $sql3 ="SELECT distinct size FROM sizecolo WHERE gid =$url ";
    $res3 = $conn->query($sql3);
    $arr3 = $res3->fetch_all(MYSQLI_ASSOC);

    $data = array(//制作关联数组，就可以一次性传多个值给前端
        'list' => $arr,
        "Cimg"=>$arr2,
        'size'=>$arr3
    );

    echo json_encode($data);

    $res->close();
    $conn->close();
?>
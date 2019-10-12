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

    $type = isset($_REQUEST['type'])?$_REQUEST['type']:"";
    $name = isset($_REQUEST['name'])?$_REQUEST['name']:'';//账号
    $paw = isset($_REQUEST['paw'])?$_REQUEST['paw']:'';//密码
    $uid = isset($_REQUEST['uid'])?$_REQUEST['uid']:'';//用户id
    $gid = isset($_REQUEST['gid'])?$_REQUEST['gid']:'';//商品id
    $size = isset($_REQUEST['size'])?$_REQUEST['size']:'';//尺寸
    $color = isset($_REQUEST['color'])?$_REQUEST['color']:'黑色';//颜色
    $kc = isset($_REQUEST['kc'])?$_REQUEST['kc']:'';//件数
    $num = isset($_REQUEST['num'])?$_REQUEST['num']:'';//购买件数
    $text = isset($_REQUEST['text'])?$_REQUEST['text']:'';//wenben


    switch ($type) {
        //註冊賬號
        case 'reg':
            $sql2 = "SELECT * FROM `user` WHERE `name` = '$name'";
            $res = $conn->query($sql2);
            if(!$res->num_rows){
                $sql = "INSERT INTO `user`(name,paw) VALUES('$name','$paw')";
                $res= $conn->query($sql);
                echo true;
            }else{
                echo false;
            }
            echo($res->num_rows);
            break;
        case 'cook'://将cook里的商品插入数据库
            $sql2="SELECT * FROM gouwu WHERE gid = $gid AND color ='$color' AND size = '$size' AND uid = '$uid'";
            $res = $conn->query($sql2);
            if($res->num_rows){
                $sql3 ="DELETE FROM gouwu WHERE Uid = '$uid' AND gid = '$gid' AND color='$color' AND size = '$size'";
                $res= $conn->query($sql3);
                $sql = "INSERT INTO gouwu (uid,gid,color,size,kc) VALUE('$uid','$gid','$color','$size','$kc')";
                $res= $conn->query($sql);
                echo true;
            }else{
                $sql = "INSERT INTO gouwu (uid,gid,color,size,kc) VALUE('$uid','$gid','$color','$size','$kc')";
                $res= $conn->query($sql);
                echo false;
            }
            break;
        case 'delete'://删除商品
            $sql="DELETE FROM gouwu WHERE gid = $gid AND color = '$color' AND size = '$size'";
            $res= $conn->query($sql);
            echo true;
            break;
        case 'update'://修改数量
            $sql = "UPDATE gouwu set kc = $num WHERE gid =$gid AND color = '$color' AND size = '$size'";
            $res= $conn->query($sql);
            echo true;
            break;
        case 'dele'://删除用户
            $sql ="DELETE FROM `user` WHERE id = $uid";
            $res= $conn->query($sql);
            echo true;
            break;
        case 'yeshu':
            $sql = "SELECT * FROM `user`";
            $res= $conn->query($sql);
            echo($res->num_rows);
            break;
        case 'xg'://修改用户密码
            $sql = "UPDATE `user` SET paw = '$paw' WHERE id = $uid";
            $res= $conn->query($sql);
            echo true;
            break;
        case 'fs':
            $sql = "INSERT INTO lunyan (gid,text) VALUE($uid,'$text')";
            $res= $conn->query($sql);
            break;
        default:
        # code...
        break;
    }

    
   
    $conn->close();
?>
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
    $name = isset($_REQUEST['name'])?$_REQUEST['name']:'';
    $paw = isset($_REQUEST['paw'])?$_REQUEST['paw']:'';

    switch ($type) {
        case 'log':
            $sql ="SELECT * FROM `user` WHERE `name` = '$name'";
            $sql2 = "SELECT * FROM `user` WHERE `name` = '$name' AND paw = '$paw'";
            $res = $conn->query($sql);
            $res2 = $conn->query($sql2);
            $data = array(
                'name'=>$res->num_rows,
                'paw'=>$res2->num_rows
            );
            echo json_encode($data);
        break;
        case 'pag':
            $sql = "SELECT * FROM listgood";
            $res = $conn->query($sql);
            echo($res->num_rows);
        
        default:
            # code...
            break;
    }

   

    $conn->set_charset('utf8');//设置编码
    
    $conn->close();

?>
<?php

require_once 'operations.php';
require_once 'db_connection.php';
header('Content-Type: application/json');

if($_SERVER['REQUEST_METHOD']=="POST"){

    $input = json_decode(file_get_contents('php://input'),true);
    $action=$input['action'];

    switch ($action) {

            case 'insert':
               
                $response = DB::insert(test_details,$input['data']);
                if($response =="Insert Successfully"){
                    echo json_encode(['status'=>true,"message"=>"Insert Successfully", 'data'=> $response]);
                }
                else{
                    echo json_encode(['status'=>false,"message"=>"Could not insert", 'data'=> $response]);
                }
                break;
            
    }

}

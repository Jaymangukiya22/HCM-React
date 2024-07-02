<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
require_once './operations.php';
require_once './db_connection.php';
header('Content-Type: application/json');
error_reporting(E_ALL); // Enable error reporting
ini_set('display_errors', 1); // Display errors

try {
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $input = json_decode(file_get_contents('php://input'),true);
        $action = $input['action'];

        switch ($action) {
            case 'insert':
                $response = DB::insert('test_details', $input['data']);
                if ($response == "Insert Successfully") {
                    echo json_encode(['status' => true, "message" => "Insert Successfully", 'data' => $response]);
                } else {
                    echo json_encode(['status' => false, "message" => "Could not insert", 'data' => $response]);
                }
                break;

            default:
                echo json_encode(['status' => false, "message" => "Invalid action"]);
        
                break;
            }
    } else {
        echo json_encode(['status' => false, "message" => "Invalid request method"]);
    }
} catch (Exception $e) {
    echo json_encode(['status' => false, "message" => $e->getMessage()]);
}
?>

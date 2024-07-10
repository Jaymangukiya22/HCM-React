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
        $input = json_decode(file_get_contents('php://input'), true);
        $action = $input['action'];
        $caseno;

        switch ($action) {
            case 'insert':
                $response = DB::insert('test_details', $input['data']);
                if ($response['status'] == "Insert Successfully") {
                    echo json_encode(['status' => true, "message" => "Inserted Successfully", 'data' => $response]);
                } else {
                    echo json_encode(['status' => false, "message" => "Could not insert", 'data' => $response]);
                }
                break;

            case 'insert_checkup':
                $response = DB::insert('checkup_remarks', $input['data']);
                if ($response['status'] == "Insert Successfully") {
                    echo json_encode(['status' => true, "message" => "Inserted Successfully", 'data' => $response]);
                } else {
                    echo json_encode(['status' => false, "message" => "Could not insert", 'data' => $response]);
                }
                break;

            case 'insert_lab':
                $labs = $input['data']['lab'];
                $dates = $input['data']['dt'];
                $remarks = $input['data']['remarks'];
                $caseno = $input['data']['caseno'];
                $errors = [];
                foreach ($labs as $index => $lab) {
                    $date = $dates[$index];
                    $remark = $remarks[$index];
                    $response = DB::insert('lab_test', [
                        'lab' => $lab,
                        'date' => $date,
                        'remarks' => $remark,
                        'caseno' => $caseno
                    ]);
                    if ($response['status'] !== "Insert Successfully") {
                        $errors[] = "Error inserting lab entry $index: " . $response['message'];
                    }
                }
                if (empty($errors)) {
                    echo json_encode(['status' => true, 'message' => 'Inserted Successfully']);
                } else {
                    echo json_encode(['status' => false, 'message' => 'Could not insert', 'errors' => $errors]);
                }
                break;

            case 'update':
                if (!isset($input['id'])) {
                    echo json_encode(['status' => false, "message" => "ID not provided"]);
                    exit;
                }
                $id = $input['id'];
                $data = $input['data'];
                if (isset($data['mind'])) {
                    $data['mind'] = implode(",", $data['mind']);
                }
                $response = DB::update('test_details', $data, ['caseno' => $id]);
                if ($response == "Update Successfully") {
                    echo json_encode(['status' => true, "message" => "Updated Successfully", 'data' => $response]);
                } else {
                    error_log("Update failed: " . print_r($response, true));
                    echo json_encode(['status' => false, "message" => "Could not update", 'data' => $response]);
                }
                break;

                case 'update_payment':
                    if (!isset($input['id'])) {
                        echo json_encode(['status' => false, "message" => "ID not provided"]);
                        exit;
                    }
                    $id = $input['id'];
                    $data = $input['data'];
                    if (isset($data['mind'])) {
                        $data['mind'] = implode(",", $data['mind']);
                    }
                    $response = DB::update('payment', $data, ['caseno' => $id]);
                    if ($response == "Update Successfully") {
                        echo json_encode(['status' => true, "message" => "Updated Successfully", 'data' => $response]);
                    } else {
                        error_log("Update failed: " . print_r($response, true));
                        echo json_encode(['status' => false, "message" => "Could not update", 'data' => $response]);
                    }
                    break;
    

                case 'insert_payment':
                    $response = DB::insert('payment', $input['data']);
                    if ($response['status'] == "Insert Successfully") {
                        echo json_encode(['status' => true, "message" => "Inserted Successfully", 'data' => $response]);
                    } else {
                        echo json_encode(['status' => false, "message" => "Could not insert", 'data' => $response]);
                    }
                    break;











                case 'insert_prescription':
                    $medicines = $input['data']['medicine'];
                    $doses = $input['data']['dose'];
                    $caseno = $input['data']['caseno'];
                    // $dates = $input['data']['date']; // Dates array
        
                    $errors = [];
                    foreach ($medicines as $index => $medicine) {
                        $dose = $doses[$index];
                        // $date = $dates[$index]; // Use the provided date
        
                        $response = DB::insert('prescriptions', [
                            'medicine' => $medicine,
                            'dose' => $dose,
                            'caseno' => $caseno,
                            // 'date' => $date
                        ]);
        
                        if ($response['status'] !== "Insert Successfully") {
                            $errors[] = "Error inserting medicine entry $index: " . $response['message'];
                        }
                    }
        
                    if (empty($errors)) {
                        echo json_encode(['status' => true, 'message' => 'Inserted Successfully']);
                    } else {
                        echo json_encode(['status' => false, 'message' => 'Could not insert', 'errors' => $errors]);
                    }


                    $input = json_decode(file_get_contents('php://input'), true);
    $dates = $input['data']['date']; // Dates array
    $caseno = $input['data']['caseno'];

    $updateErrors = [];

    // Validate input arrays are set and are arrays
    if (!isset($dates) || !is_array($dates)) {
        echo json_encode(['status' => false, 'message' => 'Invalid input data structure']);
        exit;
    }

    // Update dates for prescriptions
    foreach ($dates as $index => $date) {
        $response = DB::update('prescriptions', ['date' => $date], ['caseno' => $caseno, 'id' => $index]);

        if ($response !== "Update Successfully") {
            $updateErrors[] = "Error updating prescription entry $index: " . $response['message'];
        }
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

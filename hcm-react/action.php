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
        // Check if it is a JSON request
        $input = json_decode(file_get_contents('php://input'), true);

        // If $input is null, it means it's not a JSON request, so use $_POST
        if ($input === null) {
            $input = $_POST;
        }

        if (!isset($input['action'])) {
            echo json_encode(['status' => false, "message" => "Invalid action"]);
            exit;
        }

        $action = $input['action'];
        $caseno;

        switch ($action) {
            case 'insert':
                // Ensure the data is set correctly from the input
                $data = isset($input['data']) ? $input['data'] : $input;
                unset($data['action']);
                // Handle file upload
                $fileUploadSuccess = false;
                $message = '';
        
                if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
                    $fileTmpPath = $_FILES['photo']['tmp_name'];
                    $fileName = $_FILES['photo']['name'];
                    $fileSize = $_FILES['photo']['size'];
                    $fileType = $_FILES['photo']['type'];
                    $fileNameCmps = explode(".", $fileName);
                    $fileExtension = strtolower(end($fileNameCmps));
        
                    // Set upload file path
                    $uploadFileDir = './uploaded_files/';
                    $dest_path = $uploadFileDir . $fileName;
        
                    if (move_uploaded_file($fileTmpPath, $dest_path)) {
                        $fileUploadSuccess = true;
                        $data['photo'] = $dest_path; // Store the file name in the database
                        $message = 'File is successfully uploaded.';
                    } else {
                        $message = 'There was some error moving the file to upload directory.';
                    }
                } else {
                    $message = 'No file uploaded.';
                }

        
                // Insert data into the database
                $response = DB::insert('test_details', $data);
                if ($response['status'] == "Insert Successfully") {
                    echo json_encode(['status' => true, "message" => "Inserted Successfully. " . $message, 'data' => $response]);
                } else {
                    echo json_encode(['status' => false, "message" => "Could not insert. " . $message, 'data' => $response]);
                }
                break;

            case 'insert_checkup':
                $data = isset($input['data']) ? $input['data'] : $input;
                unset($data['action']);
                // Handle file upload
                $fileUploadSuccess = false;
                $message = '';
        
                if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
                    $fileTmpPath = $_FILES['file']['tmp_name'];
                    $fileName = $_FILES['file']['name'];
                    $fileSize = $_FILES['file']['size'];
                    $fileType = $_FILES['file']['type'];
                    $fileNameCmps = explode(".", $fileName);
                    $fileExtension = strtolower(end($fileNameCmps));
        
                    // Set upload file path
                    $uploadFileDir = './uploaded_files/';
                    $dest_path = $uploadFileDir . $fileName;
        
                    if (move_uploaded_file($fileTmpPath, $dest_path)) {
                        $fileUploadSuccess = true;
                        $data['file'] = $dest_path; // Store the file name in the database
                        $message = 'File is successfully uploaded.';
                    } else {
                        $message = 'There was some error moving the file to upload directory.';
                    }
                } else {
                    $message = 'No file uploaded.';
                }
                $response = DB::insert('checkup_remarks',$data);
                if ($response['status'] == "Insert Successfully") {
                    echo json_encode(['status' => true, "message" => "Inserted Successfully", 'data' => $response]);
                } else {
                    echo json_encode(['status' => false, "message" => "Could not insert", 'data' => $response]);
                }
                break;

                case 'insert_lab':
                    $labs = isset($_POST['lab']) ? $_POST['lab'] : [];
                    $dates = isset($_POST['dt']) ? $_POST['dt'] : [];
                    $remarks = isset($_POST['remarks']) ? $_POST['remarks'] : [];
                    $caseno = isset($_POST['caseno']) ? $_POST['caseno'] : null;
                    $errors = [];
                
                    // Handle file uploads
                    $uploadFileDir = './uploaded_files/';
                    $files = isset($_FILES['file']) ? $_FILES['file'] : null;
                
                    foreach ($labs as $index => $lab) {
                        $date = isset($dates[$index]) ? $dates[$index] : null;
                        $remark = isset($remarks[$index]) ? $remarks[$index] : null;
                        $filePath = null;

                
                        // Handle the file upload for this lab entry
                        if ($files && isset($files['name'][$index]) && $files['error'][$index] === UPLOAD_ERR_OK) {
                            $fileTmpPath = $files['tmp_name'][$index];
                            $fileName = $files['name'][$index];
                            $destPath = $uploadFileDir . $fileName;
                            if($destPath!==$fileTmpPath){
                            if (move_uploaded_file($fileTmpPath, $destPath)) {
                                $filePath = $destPath; // Store the file path
                            } else {
                                $errors[] = "Error moving file for lab entry $index: $fileName";
                            }
                        }
                        }
                
                        $response = DB::insert('lab_test', [
                            'lab' => $lab,
                            'date' => $date,
                            'remarks' => $remark,
                            'caseno' => $caseno,
                            'file' => $filePath // Add the file path to the database
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

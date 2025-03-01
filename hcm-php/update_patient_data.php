<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    if (isset($data['caseno']) && isset($data['name']) && isset($data['age']) && isset($data['date']) &&
        isset($data['marital']) && isset($data['complexion']) && isset($data['constitution']) &&
        isset($data['address']) && isset($data['mobile']) && isset($data['occupation']) &&
        isset($data['child']) && isset($data['gender'])) {

        $caseno = $data['caseno'];
        $name = $data['name'];
        $age = $data['age'];
        $date = $data['date'];
        $marital = $data['marital'];
        $complexion = $data['complexion'];
        $constitution = $data['constitution'];
        $address = $data['address'];
        $mobile = $data['mobile'];
        $occupation = $data['occupation'];
        $child = $data['child'];
        $gender = $data['gender'];

        $conn = new mysqli('localhost', 'root', '', 'pdo');

        if ($conn->connect_error) {
            die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
        }

        $sql = "UPDATE test_details SET 
                    name='$name', age='$age', date='$date', marital='$marital', complexion='$complexion', 
                    constitution='$constitution', address='$address', mobile='$mobile', occupation='$occupation', 
                    child='$child', gender='$gender'
                WHERE caseno='$caseno'";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => "Record updated successfully"]);
        } else {
            echo json_encode(["error" => "Error updating record: " . $conn->error]);
        }

        $conn->close();
    } else {
        echo json_encode(["error" => "Invalid input"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>

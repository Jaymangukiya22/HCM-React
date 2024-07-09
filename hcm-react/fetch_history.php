<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pdo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

if (isset($_GET['caseno'])) {
    $caseno = $_GET['caseno']; // Ensure caseno is an integer

    $sql = "SELECT * FROM test_details WHERE caseno = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $caseno);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $row['test_details'] = $result->fetch_assoc();
        } else {
            echo json_encode(array("error" => "No patient found with case number $caseno"));
            exit;
        }
    } else {
        echo json_encode(array("error" => "Error preparing the statement."));
        exit;
    }

    $sql1 = "SELECT * FROM prescriptions WHERE caseno = ?";
    $stmt1 = $conn->prepare($sql1);
    $row1 = [];
    if ($stmt1) {
        $stmt1->bind_param("i", $caseno);
        $stmt1->execute();
        $result1 = $stmt1->get_result();
        if ($result1->num_rows > 0) {
            while ($row33 = $result1->fetch_assoc()) {
                $row1[] = $row33;
            }
            $row['prescriptions'] = $row1;
        } else {
            echo json_encode(array("error" => "No prescriptions found for case number $caseno"));
            exit;
        }
    } else {
        echo json_encode(array("error" => "Error preparing the prescriptions statement."));
        exit;
    }

    $sql2 = "SELECT * FROM checkup_remarks WHERE caseno = ?";
    $stmt2 = $conn->prepare($sql2);
    if ($stmt2) {
        $stmt2->bind_param("i", $caseno);
        $stmt2->execute();
        $result2 = $stmt2->get_result();
        if ($result2->num_rows > 0) {
            $row['checkup_remarks'] = $result2->fetch_assoc();
        } else {
            echo json_encode(array("error" => "No checkup remarks found for case number $caseno"));
            exit;
        }
    } else {
        echo json_encode(array("error" => "Error preparing the checkup remarks statement."));
        exit;
    }

    // Output JSON response
    echo json_encode($row);

} else {
    echo json_encode(array("error" => "Case number not provided"));
    exit;
}
?>

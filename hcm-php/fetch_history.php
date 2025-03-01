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
    $caseno = intval($_GET['caseno']);

    // Fetch test details
    $sql = "SELECT * FROM test_details WHERE caseno = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $caseno);
        $stmt->execute();
        $result = $stmt->get_result();
        $testDetails = [];
        while ($row = $result->fetch_assoc()) {
            $testDetails[] = $row;
        }
        $stmt->close();
    } else {
        echo json_encode(array("error" => "Error preparing the test details statement."));
        exit;
    }

    // Fetch prescriptions
    $sql = "SELECT * FROM prescriptions WHERE caseno = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $caseno);
        $stmt->execute();
        $result = $stmt->get_result();
        $prescriptions = [];
        while ($row = $result->fetch_assoc()) {
            $prescriptions[] = $row;
        }
        $stmt->close();
    } else {
        echo json_encode(array("error" => "Error preparing the prescriptions statement."));
        exit;
    }

    // Fetch checkup remarks
    $sql = "SELECT * FROM checkup_remarks WHERE caseno = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $caseno);
        $stmt->execute();
        $result = $stmt->get_result();
        $checkupRemarks = [];
        while ($row = $result->fetch_assoc()) {
            $checkupRemarks[] = $row;
        }
        $stmt->close();
    } else {
        echo json_encode(array("error" => "Error preparing the checkup remarks statement."));
        exit;
    }

    // Combine data by date
    $combinedData = [];
    foreach ($testDetails as $testDetail) {
        $date = $testDetail['date'];
        $combinedData[$date]['test_details'] = $testDetail;
        $combinedData[$date]['prescriptions'] = [];
        $combinedData[$date]['checkup_remarks'] = [];
    }

    foreach ($prescriptions as $prescription) {
        $date = $prescription['date'];
        if (!isset($combinedData[$date])) {
            $combinedData[$date]['test_details'] = null;
            $combinedData[$date]['prescriptions'] = [];
            $combinedData[$date]['checkup_remarks'] = [];
        }
        $combinedData[$date]['prescriptions'][] = $prescription;
    }

    foreach ($checkupRemarks as $remark) {
        $date = $remark['date'];
        if (!isset($combinedData[$date])) {
            $combinedData[$date]['test_details'] = null;
            $combinedData[$date]['prescriptions'] = [];
            $combinedData[$date]['checkup_remarks'] = [];
        }
        $combinedData[$date]['checkup_remarks'] = $remark;
    }

    echo json_encode($combinedData);

} else {
    echo json_encode(array("error" => "Case number not provided"));
    exit;
}

?>

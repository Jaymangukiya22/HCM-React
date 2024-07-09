<?php

// Remove or comment out the lines defining constants if they are already defined elsewhere
// include 'config.php'; // Ensure this includes your database configuration
// include 'db_connection.php'; // Ensure this includes your database connection

// Function to fetch initial payment details
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
function fetchPaymentDetails($caseno) {
    global $conn;

    $sql = "SELECT * FROM payment WHERE caseno = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $caseno);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

// Function to update or insert payment details
function updatePaymentDetails($data) {
    global $conn;

    $prev_amt = (float)$data['prev_amt'];
    $present_amt = (float)$data['present_amt'];
    $paid_amt = (float)$data['paid_amt'];
    $left_amt = $prev_amt + $present_amt - $paid_amt;
    $caseno = (int)$data['caseno'];

    

    // Check if payment entry exists for the given case number
    $sql_check = "SELECT * FROM payment WHERE caseno = ?";
    $stmt_check = $conn->prepare($sql_check);
    if ($stmt_check) {
        $stmt_check->bind_param("i", $caseno);
        $stmt_check->execute();
        $result = $stmt_check->get_result();
        if ($result->num_rows > 0) {
            // Update existing payment details
            $update_sql = "UPDATE payment SET prev_amt = ?, present_amt = ?, paid_amt = ?, future_amt = ? WHERE caseno = ?";
            $stmt_update = $conn->prepare($update_sql);
            if ($stmt_update) {
                $stmt_update->bind_param("iiiii", $prev_amt, $present_amt, $paid_amt, $left_amt, $caseno);
                if ($stmt_update->execute()) {
                    return ['status' => true, 'message' => 'Payment details updated successfully'];
                } else {
                    return ['status' => false, 'message' => 'Error updating payment details: ' . $stmt_update->error];
                }
            } else {
                return ['status' => false, 'message' => 'Error preparing update statement: ' . $conn->error];
            }
        } else {
            // Insert new payment details
            $insert_sql = "INSERT INTO payment (caseno, prev_amt, present_amt, paid_amt, future_amt) VALUES (?, ?, ?, ?, ?)";
            $stmt_insert = $conn->prepare($insert_sql);
            if ($stmt_insert) {
                $stmt_insert->bind_param("iiiii", $caseno, $prev_amt, $present_amt, $paid_amt, $left_amt);
                if ($stmt_insert->execute()) {
                    return ['status' => true, 'message' => 'Payment details inserted successfully'];
                } else {
                    return ['status' => false, 'message' => 'Error inserting payment details: ' . $stmt_insert->error];
                }
            } else {
                return ['status' => false, 'message' => 'Error preparing insert statement: ' . $conn->error];
            }
        }
    } else {
        return ['status' => false, 'message' => 'Error checking existing payment: ' . $conn->error];
    }
}

// Main logic to handle different request methods
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['caseno'])) {
        $caseno = $_GET['caseno'];
        $paymentDetails = fetchPaymentDetails($caseno);
        if ($paymentDetails !== null) {
            echo json_encode($paymentDetails);
        } else {
            echo json_encode(['status' => false, 'message' => 'No payment details found for caseno ' . $caseno]);
        }
    } else {
        echo json_encode(['status' => false, 'message' => 'Missing caseno parameter']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Debugging: Log received data
    // $raw_data = file_get_contents('php://input');
    // error_log('Received raw data:');
    // error_log($raw_data);

    // $data = json_decode($raw_data, true);
    if (isset($data['caseno'], $data['prev_amt'], $data['present_amt'], $data['paid_amt'])) {
        $result = updatePaymentDetails($data);
        echo json_encode($result);
    } else {
        echo json_encode(['status' => false, 'message' => 'Missing or invalid parameters']);
    }
}


?>

<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

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

if (isset($_GET['caseno'])) {
  $caseno = intval($_GET['caseno']);

  // Fetch patient details
  $sql = "SELECT * FROM payment WHERE caseno = $caseno";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $patient = $result->fetch_assoc();
    echo json_encode($patient);
  } else {
    echo json_encode(["error" => "No patient found"]);
  }
} else {
  echo json_encode(["error" => "No caseno provided"]);
}

$conn->close();
?>

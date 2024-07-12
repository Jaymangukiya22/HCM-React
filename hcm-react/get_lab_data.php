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
  $sql = "SELECT * FROM lab_test WHERE caseno = $caseno";
  $result = $conn->query($sql);
  // $result = $stmt->get_result();
  $statistic=[];
while ($data = $result->fetch_assoc())
{
    $statistic[] = $data;
}
// print_r($statistic);

  if ($result->num_rows > 0) {
    // $patient = $result->fetch_all();
    // print_r($patient);
    echo json_encode(["data"=>$statistic , "message"=>"success","status" => true,"error"=>false ]);
  } else {
    echo json_encode(["error" =>true]);
  }
} else {
  echo json_encode(["error" => "No caseno provided"]);
}

$conn->close();
?>

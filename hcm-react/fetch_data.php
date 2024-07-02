<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow cross-origin requests for local development

try {
    // Database connection settings
    $host = 'localhost'; // localhost or your DB host
    $dbname = 'pdo';
    $username = 'root';
    $password = '';

    // Establish PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch data from test_details table
    $stmt = $pdo->query('SELECT * FROM test_details');
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return data as JSON
    echo json_encode(['status' => true, 'data' => $data]);
} catch (PDOException $e) {
    echo json_encode(['status' => false, 'message' => 'Database error: ' . $e->getMessage()]);
}
?>

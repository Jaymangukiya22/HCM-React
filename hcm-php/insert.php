<?php
class Insert
{
    private $conn;
    private $table;

    public function __construct($conn, $table)
    {
        $this->conn = $conn;
        $this->table = $table;
    }

    public function insertData($data)
    {
        try {
            // Prepare the keys and values
            $keys = array_keys($data);
            $values = array_values($data);

            // Create placeholders for prepared statement
            $placeholders = array_fill(0, count($keys), '?');

            // Construct the SQL query
            $allKey = implode(',', $keys);
            $allValue = implode(',', $placeholders);

            $insert = "INSERT INTO " . $this->table . " ($allKey) VALUES ($allValue)";

            // Prepare the statement
            $stmt = $this->conn->prepare($insert);

            if ($stmt === false) {
                throw new Exception($this->conn->errorInfo()[2]);
            }

            // Execute the query
            $result['message'] = $stmt->execute($values);
            $lastInsertedId = $this->conn->lastInsertId();
            $result['lastInsertedId'] = $lastInsertedId;
            $result['status']=insertSuccess;

            // Check for success and return result
            if ($result['message']) {
                return $result;
            } else {
                throw new Exception($stmt->errorInfo()[2]);
            }
        } catch (Exception $e) {
            return ['status' => 'error', 'message' => $e->getMessage()];
        }
    }
}
?>

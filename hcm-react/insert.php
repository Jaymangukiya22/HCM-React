<?php
   class insert
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
           // Prepare the keys and values
           $keys = array_keys($data);
           $values = array_values($data);
   
           // Create placeholders for prepared statement
           $placeholders = array_fill(0, count($keys), '?');
   
           // Construct the SQL query
           $allkey = implode(',', $keys);
           $allvalue = implode(',', $placeholders);
   
           $insert = "INSERT INTO " . $this->table . " ($allkey) VALUES ($allvalue)";
   
           // Prepare the statement
           $stmt = $this->conn->prepare($insert);
   
           if ($stmt === false) {
               return ['status' => 'error', 'message' => $this->conn->error];
           }
   
           // Bind the values
           $stmt->bind_param(str_repeat('s', count($values)), ...$values);
   
           // Execute the query
           $result = $stmt->execute();
   
           // Check for success and return result
           if ($result) {
               return "Insert Successfully";
           } else {
               return ['status' => 'error', 'message' => $stmt->error];
           }
       }
   }
   
?>
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
        $key = array_keys($data);
        $value = array_values($data);
        $allkey = $key[0];
        $allvalue = "'$value[0]'";
        for ($i = 1; $i < count($key); $i++) {
            $allkey .= ',' . $key[$i];
            $allvalue .= ',' . "'$value[$i]'";
        }
        $insert = "INSERT INTO " . $this->table . " ($allkey) values ($allvalue)";
        $result = $this->conn->query($insert);
        $this->conn->close();
        if ($result != null) {
            return $dbname = insertSuccess;
        }
    }
}
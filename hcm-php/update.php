<?php

class Update
{
    private $conn;
    private $table;

    public function __construct($conn, $table)
    {
        $this->conn = $conn;
        $this->table = $table;
    }

    public function updateData($data, $id)
    {
        try {
            $key = array_keys($data);
            $fields = [];
            $values = [];

            $col_name = array_keys($id)[0]; // Get the first key (column name) from the id array
            $col_value = array_values($id)[0]; // Get the first value from the id array

            foreach ($key as $field) {
                $fields[] = "$field = :$field";
                $values[":$field"] = $data[$field];
            }
            $values[":$col_name"] = $col_value; // Adding the id value to the values array for binding

            $fieldList = implode(", ", $fields);
            $update = "UPDATE " . $this->table . " SET $fieldList WHERE $col_name = :$col_name";

            $stmt = $this->conn->prepare($update);
            $result = $stmt->execute($values);

            if ($result) {
                return updateSuccess;
            } else {
                return "updateFailed";
            }
        } catch (PDOException $e) {
            return "Error: " . $e->getMessage();
        }
    }
}

?>

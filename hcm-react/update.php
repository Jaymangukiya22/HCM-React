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

            foreach ($key as $field) {
                $fields[] = "$field = ?";
                $values[] = $data[$field];
            }
            $values[] = $id; // Adding the id to the values array for binding

            $fieldList = implode(", ", $fields);
            $update = "UPDATE " . $this->table . " SET $fieldList WHERE id = ?";

            $stmt = $this->conn->prepare($update);
            $result = $stmt->execute($values);

            if ($result) {
                return "updateSuccess";
            } else {
                return "updateFailed";
            }
        } catch (PDOException $e) {
            return "Error: " . $e->getMessage();
        }
    }
}
?>

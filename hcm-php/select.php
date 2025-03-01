<?php

class Select
{
    private $conn;
    private $table;

    public function __construct($conn, $table)
    {
        $this->conn = $conn;
        $this->table = $table;
    }

    public function selectData()
    {
        try {
            $data = "SELECT * FROM " . $this->table;
            $stmt = $this->conn->query($data);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!empty($result)) {
                return $result;
            } else {
                return "0 results";
            }
        } catch (PDOException $e) {
            return ['status' => 'error', 'message' => $e->getMessage()];
        }
    }

    public function selectById($id)
    {
        try {
            $key = key($id);
            $val = current($id);

            $data = "SELECT * FROM " . $this->table . " WHERE " . $key . " = :value";
            $stmt = $this->conn->prepare($data);
            $stmt->bindParam(':value', $val, PDO::PARAM_INT);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!empty($result)) {
                return $result;
            } else {
                return "0 results";
            }
        } catch (PDOException $e) {
            return ['status' => 'error', 'message' => $e->getMessage()];
        }
    }
}
?>

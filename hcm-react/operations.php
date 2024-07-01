<?php

include 'db_connection.php';

class DB
{
    static function select($table)
    {
        try {
            $host   = DB_HOST;
            $user   = DB_USER;
            $pass   = DB_PASS;
            $dbname = DB_NAME;
            $db = new dbConnection($host, $user, $pass, $dbname);
            $select = new select($db->connection(), $table);
            $row = $select->selectData();
            return json_encode(['status' => 'success', 'message' => 'fetch successful', 'data' => $row]);
        } catch (Exception $e) {
            return json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    static function selectbyid($id, $table)
    {
        try {
            $host   = DB_HOST;
            $user   = DB_USER;
            $pass   = DB_PASS;
            $dbname = DB_NAME;
            $db = new dbConnection($host, $user, $pass, $dbname);
            $select = new select($db->connection(), $table);
            $row = $select->selectbyid($id);
            return json_encode(['status' => 'success', 'message' => 'fetch successful', 'data' => $row]);
        } catch (Exception $e) {
            return json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    static function update($table, $data, $id = null)
    {
        try {
            $host   = DB_HOST;
            $user   = DB_USER;
            $pass   = DB_PASS;
            $dbname = DB_NAME;
            $db = new dbConnection($host, $user, $pass, $dbname);
            $update = new update($db->connection(), $table);
            $row = $update->updateData($data, $id);
            return json_encode(['status' => 'success', 'message' => 'update successful', 'data' => $row]);
        } catch (Exception $e) {
            return json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    static function insert($table, $data)
    {
        try {
            $host   = DB_HOST;
            $user   = DB_USER;
            $pass   = DB_PASS;
            $dbname = DB_NAME;
            $db = new dbConnection($host, $user, $pass, $dbname);
            $insert = new insert($db->connection(), $table);
            $row = $insert->insertData($data);
            return json_encode(['status' => 'success', 'message' => 'insert successful', 'data' => $row]);
        } catch (Exception $e) {
            return json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    static function delete($table, $id)
    {
        try {
            $host   = DB_HOST;
            $user   = DB_USER;
            $pass   = DB_PASS;
            $dbname = DB_NAME;
            $db = new dbConnection($host, $user, $pass, $dbname);
            $delete = new delete($db->connection(), $table);
            $row = $delete->deleteData($id);
            return json_encode(['status' => 'success', 'message' => 'delete successful', 'data' => $row]);
        } catch (Exception $e) {
            return json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
}

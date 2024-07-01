<?php

include './config.php';
include 'select.php';
include 'update.php';
include 'insert.php';
include 'delete.php';

class dbConnection
{
    private $host;
    private $user;
    private $pass;
    private $dbname;

    public function __construct($host, $user, $pass, $dbname)
    {
        $this->host = $host;
        $this->user = $user;
        $this->pass = $pass;
        $this->dbname = $dbname;
    }

    public function connection()
    {
        
        $conn = new mysqli($this->host, $this->user, $this->pass, $this->dbname);
        
        if ($conn->connect_error) {
            echo "Database Not Connected !!";
        }
        return $conn;
    }
}
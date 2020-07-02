<?php
require_once 'Config.php';
class database
{
    private $conn = null;
    public function __construct()
    {
        $this->conn = new mysqli(
            Config::DB_HOST,
            Config::DB_USER,
            Config::DB_PASS,
            Config::DB_NAME
        );
        if ($this->conn->connect_error) {

            die("Connect Error " . $this->conn->connect_errorno . " :\n" . $this->conn->connect_error);
        }
    }

    public function get_connection()
    {
        return $this->conn;
    }

    public function close()
    {
        $this->conn->close();
    }
}

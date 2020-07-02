<?php
require_once './interface/Model.interface.php';
require_once './inc/Database.php';

class Client implements Model
{
    private $table = 'clients';
    public function __construct()
    {
        $this->conn = (new Database())->get_connection();
    }

    public function readAll()
    {
        $rv = $this->conn->query("SELECT DISTINCT * FROM $this->table");
        $result = $rv->fetch_all(MYSQLI_ASSOC);
        $rv->free_result();
        $this->conn->close();
        return $result;
    }

    public function create()
    {
    }

    public function update()
    {
    }
}

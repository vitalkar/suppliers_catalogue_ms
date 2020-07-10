<?php

require_once './interface/Model.interface.php';
require_once './inc/Database.php';

class Item implements Model 
{
    private $table = 'items';
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

    public function create($data)
    {
        $stmt = $this->conn->prepare("INSERT INTO $this->table (name, price, has_vat) VALUES (?, ?, ?)");
        $stmt->bind_param("sis", $data['name'], $data['price'], $data['has_vat']);
        $result = $stmt->execute();
        $stmt->close();
        $this->conn->close();
        return $result;
    }

    public function update($data)
    {
        
    }

    public function delete($data)
    {
        
    }
}
<?php
require_once './interface/Controller.interface.php';
require_once './models/Diversity.model.php';

class Diversities implements Controller
{
    function __construct()
    {
        $this->diversityModel = new Diversity();
    }

    public function readAll()
    {
        return $this->diversityModel->readAll();
    }

    public function create()
    {
        $data = file_get_contents('php://input');
        $data = json_decode($data, true);
        $this->clientModel->create($data);
    }

    public function update()
    {

    }

    public function delete()
    {
        
    }
}

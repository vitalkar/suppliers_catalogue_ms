<?php
require_once './interface/Controller.interface.php';
require_once './models/Client.model.php';

class Clients implements Controller
{
    function __construct()
    {
        $this->clientModel = new Client();
    }

    public function readAll()
    {
        return $this->clientModel->readAll();
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

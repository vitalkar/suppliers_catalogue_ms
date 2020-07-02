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
    }

    public function update()
    {
    }
}

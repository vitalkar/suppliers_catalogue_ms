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

    }

    public function update()
    {

    }
}

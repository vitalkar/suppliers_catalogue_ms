<?php
require_once './interface/Controller.interface.php';
require_once './models/Item.model.php';

class Items implements Controller {

  function __construct(){
    $this->itemModel = new Item();
  }

  public function readAll() 
  {
    return $this->itemModel->readAll();
  }

  public function create() 
  {

  }

  public function update() {

  }
}

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
    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    return $this->itemModel->create($data);
  }

  public function update() {

  }

  public function delete()
  {
    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    die(json_encode($data));
    return $this->itemModel->delete($data);
  }
}

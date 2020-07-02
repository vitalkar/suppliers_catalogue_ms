<?php
  /**
   * base controller
   * loads the models and views
   */
class Controller {
  //load model
  public function model($model){
    //require model files
    require_once '../';
    //instantiate model
    return new $model();
  }
}

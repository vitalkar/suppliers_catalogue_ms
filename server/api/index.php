<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, DELETE, UPDATE");
require_once './inc/Router.php';
$router = new Router();

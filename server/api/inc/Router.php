<?php

class Router 
{
    protected $currController = 'Pages';
    protected $currMethod = 'readAll';
    protected $params = array();

    function __construct()
    {
        $url = $this->getUrl();
        if(file_exists("./controllers/" . ucwords($url[0]) . ".controller.php")) 
        {
            $this->currController = ucwords($url[0]);
            unset($url[0]);

            require_once "./controllers/" . $this->currController . ".controller.php";
            $this->currController = new $this->currController();

            if (isset($url[1])) 
            {
                //if method exists in controllers
                if (method_exists($this->currController, $url[1])) 
                {

                    $this->currMethod = $url[1];
                    unset($url[1]);
                }
                $this->params = $url ? array_values($url) : array();
                $result = call_user_func_array([$this->currController, $this->currMethod], $this->params);
                die(json_encode($result));
            }
        }
    }

    public function getUrl()
    {
        if (isset($_GET['url'])) {
            $url = rtrim($_GET['url'], '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $url = explode('/', $url);
            return $url;
        }
        die;
    }
}
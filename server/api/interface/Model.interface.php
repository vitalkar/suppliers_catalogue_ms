<?php

interface Model 
{
    public function readAll();
    public function create($data);
    public function update($data);
}
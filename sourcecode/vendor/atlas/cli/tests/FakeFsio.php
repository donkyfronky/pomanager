<?php
namespace Atlas\Cli;

class FakeFsio extends Fsio
{
    protected $files = array();
    protected $dirs = array();

    public function get($file)
    {
        return $this->files[$file];
    }

    public function put($file, $data)
    {
        $this->files[$file] = $data;
    }

    public function isFile($file)
    {
        return isset($this->files[$file]);
    }

    public function isDir($dir)
    {
        return isset($this->dirs[$dir]);
    }

    public function mkdir($dir, $mode = 0777, $deep = true)
    {
        $this->dirs[$dir] = true;
    }
}

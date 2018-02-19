<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
use SmartEditorPo\DataSource\Language\LanguageMapper;

$app = new \Slim\App;

$container = $app->getContainer();
$container['datasource'] = function ($container) {
    $atlasContainer = new \Atlas\Orm\AtlasContainer(
        'mysql:host=mysql;dbname=indici',
        'root',
        'r083rt0'
    );


    $atlasContainer->setMappers([LanguageMapper::class]);
    return $atlasContainer->getAtlas();
};

$app->get('/hello/', function (Request $request, Response $response, array $args) {

    $threadRecord = $this->datasource
    ->select(LanguageMapper::class)
        ->where('id = ?', '1')
        ->fetchRecord();
    var_dump($threadRecord);

    return $response;
});
$app->run();
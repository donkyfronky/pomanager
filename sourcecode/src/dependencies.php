<?php
// DIC configuration
use SmartEditorPo\DataSource\Language\LanguageMapper;
$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

$container['datasource'] = function ($container) {
    $atlasContainer = new \Atlas\Orm\AtlasContainer(
        'mysql:host=mysql;dbname=indici',
        'root',
        'r083rt0'
    );


    $atlasContainer->setMappers([LanguageMapper::class]);
    return $atlasContainer->getAtlas();
};
<?php

use Slim\Http\Request;
use Slim\Http\Response;
use SmartEditorPo\DataSource\Language\LanguageMapper;


// Routes

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->get('/hello/', function (Request $request, Response $response, array $args) {
    $map = new LanguageMapper();
    $threadRecord = $this->datasource
        ->select(get_class($map))
        ->where('id = ?', '1')
        ->fetchRecord();
    var_dump($threadRecord);
    return $response;
});
<?php
include __DIR__.'/vendor/autoload.php';
use Enqueue\Fs\FsConnectionFactory;

$connectionFactory = new FsConnectionFactory('file:');
$psrContext = $connectionFactory->createContext();
$fooQueue = $psrContext->createQueue('aQueue');
//$fooTopic = $psrContext->createTopic('madre');
$message = $psrContext->createMessage('Hello world!',['count'=>0]);

$psrContext->createProducer()->send($fooQueue, $message);
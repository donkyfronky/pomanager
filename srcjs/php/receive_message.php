<?php


include __DIR__.'/vendor/autoload.php';

/** recevie and die */
/*use Enqueue\Fs\FsConnectionFactory;

$connectionFactory = new FsConnectionFactory([
    'path' => '/path/to/queue/dir',
    'pre_fetch_count' => 1,
]);
$psrContext = $connectionFactory->createContext();
$fooQueue = $psrContext->createQueue('aQueue');
$consumer = $psrContext->createConsumer($fooQueue);

$message = $consumer->receive();

echo $message->getBody();

$consumer->acknowledge($message);*/
/*******************************************/

use Interop\Queue\PsrMessage;
use Interop\Queue\PsrProcessor;
use Interop\Queue\PsrContext;
use Enqueue\Consumption\ChainExtension;
use Enqueue\Consumption\QueueConsumer;
use Enqueue\Fs\FsConnectionFactory;

$connectionFactory = new FsConnectionFactory('file:');
$psrContext = $connectionFactory->createContext();
$fooQueue = $psrContext->createQueue('aQueue');
//$fooTopic = $psrContext->createTopic('madre');

$queueConsumer = new QueueConsumer($psrContext);
$queueConsumer2 = new QueueConsumer($psrContext);

$queueConsumer->bind($fooQueue, function(PsrMessage $message, PsrContext $context) {
    $count = (int) $message->getProperty('count');
    $this->
    echo 'Number delivered: '.$count.PHP_EOL;

    if (!$message->isRedelivered() &&  $count < 5) {
        $count++;
        $message->setProperty('count',$count);
        return PsrProcessor::REQUEUE;
    }
    echo 'message redelivered until '.$message->getProperty('count').' times'.PHP_EOL;

    return PsrProcessor::ACK;
});

$queueConsumer2->bind($fooQueue, function(PsrMessage $message, PsrContext $context) {
    $count = (int) $message->getProperty('count');

    echo 'Number delivered: '.$count.PHP_EOL;

    if (!$message->isRedelivered() &&  $count < 5) {
        $count++;
        $message->setProperty('count',$count);
        return PsrProcessor::REQUEUE;
    }
    echo 'message redelivered until '.$message->getProperty('count').' times'.PHP_EOL;

    return PsrProcessor::ACK;
});
$queueConsumer->consume();
$queueConsumer2->consume();
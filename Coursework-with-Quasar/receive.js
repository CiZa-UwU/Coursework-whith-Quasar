#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    const queue = 'Пользователь';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Ждём сообщений от %s.", queue);

    channel.consume(queue, function (msg) {
      console.log(" [x] Полученно сообщения: %s", msg.content.toString());
    }, {
      noAck: true
    });
  });
});

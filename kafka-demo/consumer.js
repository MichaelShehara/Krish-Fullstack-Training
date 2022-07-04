import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'employee-service',
    brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ 
    groupId: 'project',
    // retry: {
    //      initialRetryTime: 100,   <---------- If nessecary we can set the no. of retries
    //      retries: 0,
    //  }
});
await consumer.subscribe({ topic: 'employee-topic', fromBeginning: true });

await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message, heartbeat }) => {
        console.log({
            partition,
            offset: message.offset,
            value: message.value.toString(),
        });

        await new Promise((resolve) => setTimeout(resolve, 1000)); // process the message every 1 second

        await heartbeat();                                          // consumer alive indicator
        if (message.offset == 25) throw new Error('Oops..there is an error!')

        await consumer.commitOffsets([{                             // if the message is complete it will send the Offset back to the server
            topic,
            partition,
            offset: (Number(message.offset) + 1).toString(), // Add 1 to get the last published message
        }]);
    },
});





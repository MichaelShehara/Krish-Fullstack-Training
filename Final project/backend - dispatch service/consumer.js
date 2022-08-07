const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'Node-KafkaProduceConsumer',
  brokers: ['localhost:9092']
})

// const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'fdsGroup1' })

const run = async () => {
  // Producing
  // await producer.connect()
  // await producer.send({
  //   topic: 'fdsTopic',
  //   messages: [{
  //     key: 'key1',
  //     value: 'Order dispatched!'
  //   }]
  // });

  // Consuming
  await consumer.connect() 
  await consumer.subscribe({ topic: 'fdsTopic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })

  await new Promise((resolve) => setTimeout(resolve, 1000));
}
run().catch(console.error)
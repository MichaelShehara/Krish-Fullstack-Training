const { Kafka } = require('kafkajs')

const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
var app = express();
const bodyparser = require('body-parser');

const kafka = new Kafka({
    clientId: 'Node-KafkaProduceConsumer',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()


app.use(cors());
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'FuelDistribution'
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('DB Connection succesfull!')
    } else {
        console.log('DB Connection failed! \n Error:' + JSON.stringify(err, undefined, 2));
    }
});

app.listen(8081, () => console.log('Express server is running at port:8081'));

//Update order
app.put('/order/', (req, res) => {

    let order = req.body;
    var sql = "UPDATE orders SET capacity = ?, location = ?, name = ?, status = ?, type_of_fuel = ? WHERE id = ?";
    mysqlConnection.query(sql, [order.capacity, order.location, order.name, 'Dispatched', order.typeOfFuel, order.id], (err, rows, fields) => {
        if (!err) {
            res.send('Updated successfully');
            const run = async () => {
                // Producing
                await producer.connect()
                await producer.send({
                    topic: 'fdsTopic',
                    messages: [{
                        value: 'Order dispatched!'
                    }]
                });
            }
            run().catch((e) => console.error(e));
        }
        else {
            alert('Oops there is an error!' + err)
            console.log(err);
        }
    })
});


const Data = require('../models/data'),
    kafka = require('kafka-node'),
    configFile = require('../../shared/config'),
    Toolpath = require('gcode-toolpath');

const zookeeperAddress = configFile.middlewares.zookeeper.address,
    topic = configFile.topics.test,
    kafkaClient = new kafka.Client(zookeeperAddress),
    HighLevelProducer = kafka.HighLevelProducer,
    producer = new HighLevelProducer(kafkaClient);

let producerReady = false;

producer.on('ready', () => {
    producerReady = true;
});
producer.on('error', err => {
    producerReady = false;
    console.log('error', err);
});

exports.all = (req, res) => {
    Data.find({}, function (err, docs) {
        if (err) throw err;
        res.json(docs);
    });
};

exports.write = (req, res, next) => {
    const dataJson = req.body;

    const newData = new Data({
        deviceName: dataJson["deviceName"],
        attributes: dataJson["attributes"],
        timestamp: dataJson["timestamp"],
    });

    if (producerReady) {
        const payloads = [
            {topic: topic, messages: JSON.stringify(newData)},
        ];
        producer.send(payloads, (err, data) => {

        });
    }
    newData.save(err => {
        if (err) throw err;
        res.end("Post succesfull");
    });
};

exports.delete = (req, res, next) => {
    Data.find({}).remove(function (err) {
        if (err) throw err;
        res.end('data deleted');
    });
};

exports.gcode = (req, res, next) => {
    const deviceGcodeJson = req.body;
    const deviceName = deviceGcodeJson["device"];
    const deviceGcode = deviceGcodeJson["gcode"];

    const toolpaths = [];
    const toolpath = new Toolpath({
        // @param {object} modal The modal object.
        // @param {object} v1 A 3D vector of the start point.
        // @param {object} v2 A 3D vector of the end point.
        addLine: (modal, v1, v2) => {
            const motion = modal.motion;
            const tool = modal.tool;
            toolpaths.push({motion: motion, tool: tool, v1: v1, v2: v2});
        },
        // @param {object} modal The modal object.
        // @param {object} v1 A 3D vector of the start point.
        // @param {object} v2 A 3D vector of the end point.
        // @param {object} v0 A 3D vector of the fixed point.
        addArcCurve: (modal, v1, v2, v0) => {
            const motion = modal.motion;
            const tool = modal.tool;
            toolpaths.push({motion: motion, tool: tool, v1: v1, v2: v2, v0: v0});
        }
    });

    toolpath.loadFromString(deviceGcode, (err, results) => {
        res.json(toolpaths);
    }).on('data', (data) => {
        // 'data' event listener
    }).on('end', (results) => {
        // 'end' event listener
    });
};

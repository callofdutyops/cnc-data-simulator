module.exports = {
    credentials: {
        mongodb: {
            url: process.env.MONGODB_URI || "mongodb://192.168.1.199/simulator"
        },
        redis: {
            url: process.env.REDISTOGO_URL || "redis://192.168.1.199:6379"
        },
    },
    middlewares: {
        kafka: {
            address: process.env.KAFKA_ADDRESS || "192.168.1.199:9092"
        },
        zookeeper: {
            address: process.env.ZOOKEEPER_ADDRESS || "192.168.1.199:2181"
        },
    },
    topics: {
        test: "test",
    },
    settings: {}
};

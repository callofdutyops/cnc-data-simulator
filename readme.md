[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

# CNC data simulator
Simulate a CNC to stream data to Kafka.

## Main functions
1. Add multiple CNCs.
2. Add metrics of CNCs.
2. Stream data to Kafka.

## Use
1. Setup Kafka.

[Kafka manual](http://kafka.apache.org/)

2. Clone the project.
```shell
$ git clone https://github.com/callofdutyops/cnc-data-simulator.git && cd cnc-data-simulator
```
    
3. Install all the necessary libs.
```shell
$ npm install
```
    
4. Start the local server.
```shell
$ npm run dev
```
    
5. Navigate to the following url.

[http://localhost:3000/simulator](http://localhost:3000/simulator)

## Other
**Check out this demo video right here (from @Temmermans): [example no SDS](https://vimeo.com/216167084)**

# Contributions
Contributions and ideas are more than welcome!

# Troubleshooting / FAQ
If you an access-Control-Allow-Origin error install following chrome extension: Allow-Control-Allow-Origin and enable it, make sure the icon is green and then try again.
If using other sites, makes sure to turn it off again.

# Special thanks
@Temmermans
Main reference is his repo of [iot-device-simulator](https://github.com/Temmermans/iot-device-simulator).

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

# CNC data simulator

Simulate a CNC to stream data to MongoDB and Kafka.

## Main functions

1. Add multiple CNCs.
2. Add metrics of CNCs.
3. Gcode toolpath generate and stream integrated.
4. Stream data to Kafka.

## Use

1. Setup Kafka.

    1. [Kafka manual](http://kafka.apache.org/)
    2. create a topic and modify the [config file](app/shared/config.js)
        (both the address of middleware and topic name)
    

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
    If you want the server auto restart when you coding, just start
    `watch` script.
    ```shell
    $ npm run watch
    ```
    
5. Navigate to the following url.

    http://`local_ip`:3000/simulator 
    (`local_ip` is defined in the [config file](app/shared/config.js))

## Other

**Check out this demo video right here (from @Temmermans): [example no SDS](https://vimeo.com/216167084)**

# Contributions

Contributions and ideas are more than welcome!

# TODO
- [x] Gcode toolpath generate
- [ ] Store CNC and attributes in database

# Troubleshooting / FAQ

Don't forget to modify the `local_ip` in [config file](app/shared/config.js) 
(localhost or your real ip)

# Special thanks

@Temmermans

Main reference is his repo of [iot-device-simulator](https://github.com/Temmermans/iot-device-simulator).

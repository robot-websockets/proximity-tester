const rp = require('request-promise-native');
const argv = require('yargs').argv;

let websocket_address = '192.168.55.5:5001';
if (argv.websocket_address) {
    websocket_address = argv.websocket_address;
}

const full_address = `http://${websocket_address}/api/proximity/`;
console.log(full_address);

setInterval(() => {
    value = Math.floor(Math.random() * 100 + 1);

    var options = {
        method: 'POST',
        uri: full_address,
        body: { proximity: value },
        json: true
    };

    rp(options)
        .then(res => {
            // console.log(res);
        })
        .catch(err => {
            console.log(
                `error sending data to: ${options.uri} data: ${JSON.stringify(
                    options.body
                )}`
            );
        });
}, 3000);

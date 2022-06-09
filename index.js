const request = require("request");

request({
    url: "https://swapi.dev/api/people/12",
    json: true
}, (err, response, body) => {
    console.log(JSON.stringify(body, undefined, 4));
});
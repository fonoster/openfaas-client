"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const username = "admin";
const secret = "N4iuzYIh2IZJ0ZPMoJQH1xOLlUIhOBvTvruXzjT4LIhD3Lfr4RbuFc7PPv8V8Uk";
const faas = new api_1.DefaultApi(username, secret, "http://faasd.fonoster.net:8080");
faas
    .healthzGet()
    .then(result => {
    console.debug(result.response.statusMessage);
})
    .catch(e => {
    console.error(e);
});

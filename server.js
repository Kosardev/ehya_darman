require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const next = require("next");

const port = 5000
const host = "127.0.0.1";

const next_dev = process.env.NEXT_DEV == "true";//process.env.NODE_ENV !== 'production'
const app = next({ dev: next_dev });
const handle = app.getRequestHandler();

if (process.env.DISABLE_LOGS == "true") {
    // console.log = function () {};
    // console.error = function () {};
    // console.info = function () {};
    // console.table = function () {};
}

app.prepare().then(() => {
    const server = express();

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

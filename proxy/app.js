const express = require("express")
var app = express()
var request = require("request");
const cors = require("cors")

app.use(cors())
app.get("*", (req, res) => {
    const {desc, page} = req.query

    var options = {
        method: 'GET',
        url: 'https://jobs.github.com/positions.json',
        qs: {description: desc, page: page},
        headers:
            {
                Host: 'jobs.github.com',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.19.0'
            }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body);
    });
})

app.listen(4000)

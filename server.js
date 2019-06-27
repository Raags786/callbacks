var express = require('express')
var OtpCommonController = require('./Controller/OtpCommonController')
var CommonController = require('./Controller/CommonController')

var async = require('async');



const bodyParser = require('body-parser')
// connection = require('./connection/Connection')
// const DOA = require('./DOAManager').queries
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/callback_value', (req, res) => {

    async.waterfall([

        function (callback) {
            console.log('======check second callback =====', req.body)
            var otp_value = OtpCommonController.sendMessage(req.body, callback)
        },
        function (callback) {
            // console.log('=====check  data=====', req.body)
            var email_value = CommonController.sendemail(req.body, callback)
            // callback(null,email_value)
        },

    ], function (error, data) {
         console.log('check error detail:',error)
        console.log("check detail of result:", data);
    });
})

app.listen(3000, () => {
    console.log('port is running on 3000')
})
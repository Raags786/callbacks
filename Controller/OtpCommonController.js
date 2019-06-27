
var client = require('twilio')("AC9b96166cac30f6fe0a6df2961494b13a", "3248c2afc8cad0dab8eb8cd2e8ff145f")
var sendMessage = (body, callback) => {
  
    client.messages.create(
        {
            to: body.to,
            from: body.from,
            body:body.message,
            subject: body.subject
        },
        function (err, data) {
            if (err) {
                // console.log('=============check error',err)
                throw err
            }
            else {
                // console.log('=============check result',data)
                callback(null)
            }
        })
    // })
}

module.exports = {
    sendMessage: sendMessage
}
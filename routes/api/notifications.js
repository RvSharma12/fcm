let express = require('express')
const fetch = require('node-fetch')
const router = express.Router()

var FCM = require('fcm-node');
var serverKey = 'AAAAn3_JRCQ:APA91bHxzsIWqyM6LBMfm9IQ14yIZFUpmeMfIEy-dUWE0wS1hqmIqtpf_5PnzV1Po0J1IJtCpyRiHHyGtqMHH4kvq4EhbUI36mDBqOqYeXUbyZi4SNINsRyWrrR9zpBvXfwDNujREWHz';
var fcm = new FCM(serverKey);


router.route('/send').post(async(req,res)=>{
    var message = {
        to:req.body.to,
            notification: {
                title: 'NotifcatioTestAPP',
                body: '{"Message from node js app"}',
            },
    
            data: { //you can send only notification or only data(or include both)
                title: 'ok cdfsdsdfsd',
                body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}'
            }
    
        };
    
        fcm.send(message, function(err, response) {
            if (err) {
                console.log("Something has gone wrong!"+err);
                console.log("Respponse:! "+response);
                returnres.status(500).json(err)
            } else {
                // showToast("Successfully sent with response");
                console.log("Successfully sent with response: ", response);
                return res.status(200).json(response)
            }
    
        });
})
   

module.exports =router
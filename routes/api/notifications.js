let express = require('express')
const fetch = require('node-fetch')
const router = express.Router()




router.route('/send').post(async(req,res)=>{
    let notification ={
        title:'notifications send',
        subtitle:'first task'
    }

    let fcm_token = ['cdZyqL3vSIaQJeQ0B01wDI:APA91bE2MVGeV1GdvUtr_bCNcHg1bjWzgw4krXEg6HOleMFSwB48Gc3b_3VeJcXH_yJuJEgl5vlV-qgli9Ud5Xv07j6Clks9ZZS2hZNBwL1uisXRqK8AFQ60oe7jfob4NggGQtwJ77pu']

    let notification_body ={

        'notifcations':notification,

        'regestration_ids':fcm_token
    }

    fetch('https://fcm.googleapis.com/fcm/send',{

        'method':'Post',
        'header':{
            'Authorization':'keys'+'BC4JV9iJ03AZAU73KCiDjJOpPwhlIaHH3QfbpVty1fK5TXak-K36LhT1hbg4GOoioUHi1dDBRDz-PBOUTMwp_r4',
            'Content-Type':'application/json'
        },
        'body':JSON.stringify(notification_body)
    })
    .then(()=>{

        res.status(200).send('Notifications Send Sucessfully')
      
    })
        
    .catch((err)=>{

        res.status(400).send('Something Wwent wrong')
        console.log(err)
        
    })
})

module.exports =router
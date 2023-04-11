const request = require('request')


const forecast = (latitude,longitude,callback) =>{

const url = 'http://api.weatherstack.com/current?access_key=6406b2a44944c02e7a25cd7121817c97&query=' + latitude + ',' + longitude + '&units=f';

    
    request({ url: url,json:true},(err,res)=>{
   
           if(err)
           {
              callback('unable',undefined)
           }
           else if(res.body.err)
           {
               callback('another',undefined)
           }
           else
           {
   
               callback(undefined,

                console.log("current temp " + res.body.current.temperature + " chance of rain " + res.body.current.precip))
           
               
               }
   
           })
   
       }
   
   
   
   module.exports = forecast
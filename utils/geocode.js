const request = require('request')

const geocode  = (address,callback) =>{

    const geourl = 'http://api.weatherstack.com/current?access_key=6406b2a44944c02e7a25cd7121817c97&query='+ address;
    
    request({ url: geourl,json:true},(err,res)=>{
   
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
   
               callback(undefined,{
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name,
            
               })}
   
           })
   
       }
   
  
   
   module.exports = geocode
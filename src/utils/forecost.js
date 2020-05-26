const request = require("request")


const foreCost = (longtitude,latitude, callback) =>{
    var url = "http://api.weatherstack.com/current?access_key=17f2aa3405fb897a2d699d41e84008c1&query="+longtitude+","+latitude
    request({url, json:true},(error,{body}) => {
        if (error){
            callback("unable to connect the server",undefined)
        }else if(body.error){
            callback("unable to find the location", undefined)

        }else {
            
            callback(undefined,body.current.weather_descriptions[0] + ".The current temprarute is " + body.current.temperature + ". Its feels like " + body.current.feelslike + "!!")
        }
    })
}

module.exports = foreCost
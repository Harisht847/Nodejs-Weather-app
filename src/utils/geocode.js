var request = require("request")


const geoCode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +address+".json?access_token=pk.eyJ1IjoiaGFyaXNodDg0NyIsImEiOiJja2EzYWFobnEwZThpM2tsOTV5ZDBjOXZxIn0.2Vqez0uY5qy7cam2hCDiMQ&limit=1" 
    request({url, json:true},(error, {body}) => {
        if (error){ 
            callback("Unable to find the location service", undefined)
        }else if(body.features.length === 0){
            callback("Unable to find the location. Try another search", undefined)

        }else{ 
            callback(undefined,{
                latitude : body.features[0].center[0],
                longtitude : body.features[0].center[1],
                location : body.features[0].place_name
            })
        }
        
    })

}


module.exports = geoCode
        

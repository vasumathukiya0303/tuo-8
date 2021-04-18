const jwt = require('jsonwebtoken')
module.exports = function(req,res,next){

    const Authorizationtoken=req.header('Authorization')
    if(!Authorizationtoken)
    {
        return res.status(404).send({"Error":"No token found"})
    }
    try
    {
        token=Authorizationtoken.split(' ')[1]
        jwt.verify(token,"privatekey")
        next()
    }
    catch(error)
    {   
        return res.status(404).send({"Error":"Invalid token"})
    }
}
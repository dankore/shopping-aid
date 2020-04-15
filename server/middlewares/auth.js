module.exports = function loginToApp(req, res, next){
     res.set("WWW-Authenticate", "Basic realm='Shopping-Aid'");
    console.log(req.headers.authorization)
     if (req.headers.authorization == "ll"){
        next();
    } else {
        res.status(401).send("Login required!")
    }
}
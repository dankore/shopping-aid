module.exports = function loginToApp(req, res, next){
     res.set("WWW-Authenticate", "Basic realm='Shopping-Aid'");
     if (req.headers.authorization == "Basic YWRtaW46NTY1NjU2"){
        next();
    } else {
        res.status(401).send("Login required!")
    }
}
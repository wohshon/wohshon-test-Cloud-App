module.exports = function (req,res,next) {
  if (req.headers.authorization && req.headers.authorization =="secretz") {
    //todo
    return next();
  }  
  
  res.status(401).json({message: "need authorization"});
};
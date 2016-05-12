module.exports = function (req,res,next) {
  if (req.header.authorization && req.header.authorization =="secretz") {
    //todo
    return next();
  }  
  
  res.status(401).json({message: "need authorization"});
};
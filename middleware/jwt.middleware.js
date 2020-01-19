module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if(!authHeader) return res.sendStatus(401);

  const bearerToken = authHeader.split(" ");

  if(bearerToken.length !== 2 || bearerToken[1] !== "Authorized") return res.sendStatus(401);

  next();
}

const jwt = require("jsonwebtoken");
const { promisify } = require("util"); // importado para que pudesse utilizar
const authConfig = require("../config/auth");

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    console.log(req.userId); // após decodificação recupero o id que vem codificado no token
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token Invalid" });
  }
};

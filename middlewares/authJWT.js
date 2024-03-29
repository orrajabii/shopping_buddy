import jwt from "jsonwebtoken"
import config from "../config.js"
import db from "../Services/userService.js"
const User = db.user;
const Role = db.role;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = (req, res, next) => {
  console.log("admin -hit");
  User.findById(req.userId).exec(async (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    for (let roleId of user.roles) {
      const role = await Role.findOne({ _id: roleId })
      if (role) {
        if (role.name == 'admin') {
          next()
          return
        }
      }
    }
    res.status(403).send({ message: "You are not autherized!" });
    return;
  });
};

const isShopOwner = async (req, res, next) => {
  const user = await User.findOne({ _id: req.userId, shops: req.parma.ShopId })
  if (!user) {
    isAdmin(req, res, next);
    return;
  }
  next();
  return;
}

const authJwt = {
  verifyToken,
  isAdmin,
  isShopOwner
};
export default authJwt
import * as userController from '../Controllers/UserSettings.controller.js'
import middleware from "../middlewares/index.js";
const { authJwt } = middleware

const UserSettings = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/api/users/', [authJwt.verifyToken, authJwt.isAdmin], userController.getAllUsers);
  app.get('/api/user/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.getOneUser);
  app.delete("/api/user/:id", [authJwt.verifyToken], userController.deleteUser);
  app.put("/api/user/:id", [authJwt.verifyToken], userController.updateUser);
  app.post("/api/changePassword/:id", [authJwt.verifyToken], userController.changePassword);
};

export default UserSettings
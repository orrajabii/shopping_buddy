import * as userController from '../Controllers/UserSettings.controller.js' 
import middleware from "../middlewares/index.js";
const { authJwt } = middleware

const UserSettings = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.delete("/api/user/:id", [authJwt.verifyToken], userController.deleteUser);
  app.put("/api/user/:id", [authJwt.verifyToken], userController.updateUser)

//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};

export default UserSettings
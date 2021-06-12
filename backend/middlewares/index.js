import authJwt from "./authJWT.js"
import verifySignUp from "./VerifySignUp.js"

const middleware = {
  authJwt,
  verifySignUp
};

export default middleware
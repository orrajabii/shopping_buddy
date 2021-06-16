import authRoute from "./auth.routes.js";
import userSettings from './userSettings.routes.js';

const routes = (app) => {
    authRoute(app)
    userSettings(app)
}

export default routes
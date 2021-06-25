import AuthRoute from "./auth.routes.js";
import ProductRoutes from "./product.routes.js";
import RetailerRoute from "./retailer.routes.js";
import UserSettings from './userSettings.routes.js';

const routes = (app) => {
    AuthRoute(app)
    UserSettings(app)
    RetailerRoute(app)
    ProductRoutes(app)
}

export default routes
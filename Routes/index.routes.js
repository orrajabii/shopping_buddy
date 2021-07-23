import AuthRoute from "./auth.routes.js";
import ProductRoutes from "./product.routes.js";
import productCatRoutes from "./productCategory.routes.js";
import ShopRoutes from "./Shop.routes.js";
// import RetailerRoute from "./retailer.routes.js";
import UserSettings from './userSettings.routes.js';

const routes = (app) => {
    AuthRoute(app)
    UserSettings(app)
    ShopRoutes(app)
    ProductRoutes(app)
    productCatRoutes(app)
}

export default routes
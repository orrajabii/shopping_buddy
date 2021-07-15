import { AddShop, deleteShop, GetAllShops, GetOneShop, updateOne } from '../Controllers/Shop.controllers.js';
import authJwt from '../middlewares/authJWT.js';

const ShopRoutes = (app) => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/api/shops/:id', GetOneShop)
    app.get('/api/shops/', GetAllShops)
    app.post('/api/shops/add', [authJwt.verifyToken], AddShop)
    app.put('/api/shops/:id', [authJwt.verifyToken, authJwt.isOwner], updateOne)
    app.delete('/api/shops/:id', [authJwt.verifyToken, authJwt.isOwner], deleteShop)
}

export default ShopRoutes
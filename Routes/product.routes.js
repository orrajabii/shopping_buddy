import ProductController from '../Controllers/Product.controller.js';
import authJwt from '../middlewares/authJWT.js';

const productRoutes = (app) => {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
        );
        next();
    });

    app.get('/api/products', ProductController.getAll);
    app.get('/api/shops/:ShopId/products', ProductController.getShopProducts)
    app.get('/api/products/:id', ProductController.getOne);
    app.post('/api/shops/:shopId/add/product', [authJwt.verifyToken, authJwt.isShopOwner], ProductController.add);
    app.put('/api/shops/:shopId/update/products/:id', [authJwt.verifyToken, authJwt.isShopOwner], ProductController.update);
    app.delete('/api/shops/:shopId/delete/products/:id', [authJwt.verifyToken, authJwt.isShopOwner], ProductController.remove);
};

export default productRoutes;
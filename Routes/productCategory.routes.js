import ProductCategory from '../Controllers/productCategory.js';
import authJwt from '../middlewares/authJWT.js';

const productCatRoutes = (app) => {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
        );
        next();
    });

    // app.get('/api/products', );
    // app.get('/api/products/:id',);
    app.post('/api/shop/category', [authJwt.verifyToken, authJwt.isAdmin], ProductCategory.add);
    // app.put('/api/products/:id', [authJwt.verifyToken, authJwt.isAdmin], ProductController.update);
    // app.delete('/api/products/:id', [authJwt.verifyToken, authJwt.isAdmin], ProductController.remove);
};

export default productCatRoutes;
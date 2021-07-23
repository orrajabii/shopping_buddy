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

    app.get('/api/categories', ProductCategory.getAllCat);
    app.get('/api/category/:id', ProductCategory.getOne);
    app.post('/api/shop/category', [authJwt.verifyToken], ProductCategory.add);
    app.put('/api/category/:id', [authJwt.verifyToken], ProductCategory.update);
    app.delete('/api/category/:id', [authJwt.verifyToken], ProductCategory.deleteCat);
};

export default productCatRoutes;
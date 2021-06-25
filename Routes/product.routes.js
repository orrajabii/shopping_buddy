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
    app.get('/api/products/:id', ProductController.getOne);
    app.post('/api/products', [authJwt.verifyToken, authJwt.isAdmin], ProductController.add);
    app.put('/api/products/:id', [authJwt.verifyToken, authJwt.isAdmin], ProductController.update);
    app.delete('/api/products/:id', [authJwt.verifyToken, authJwt.isAdmin], ProductController.remove);
};

export default productRoutes;
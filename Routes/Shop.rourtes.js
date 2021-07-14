import { AddRetailer, deleteRetailerById, getAllRetailer, getRetailer, UpdateRetailer } from '../Controllers/Retailer.controller.js'
import authJwt from '../middlewares/authJWT.js';

const RetailerRoute = (app) => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/api/shops/:id', getRetailer)
    app.get('/api/shops/', getAllRetailer)
    app.post('/api/shops/add', [authJwt.verifyToken, authJwt.isAdmin], AddRetailer)
    app.put('/api/shops/:id', [authJwt.verifyToken, authJwt.isAdmin], UpdateRetailer)
    app.delete('/api/shops/:id', [authJwt.verifyToken, authJwt.isAdmin], deleteRetailerById)
}

export default RetailerRoute
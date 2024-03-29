import ShopService from '../Services/Shops.service.js';
import UserServices from '../Services/User.services.js';
import ProductService from '../Services/Product.service.js';

export const AddShop = async (req, res) => {
    const userId = req.userId;
    const newShop = await ShopService.addOne(req.body);
    if (!newShop || !newShop._id) res.status(500).json({ message: 'Problem in adding shop' });
    const [err, upd] = await UserServices.udpateOne(userId, { $push: { shops: newShop._id } }, (err, upd) => [err, upd])
    if (err) res.status(500).json({ message: 'Shop created successfully but shop addition to user Failed ' + err.message })
    let message = upd.nModified >= 1 ? 'Shop added successfully' : 'Shop added successfully But attachment to user failed';
    res.status(200).json({ message });
}

export const GetOneShop = async (req, res) => {
    const shopId = req.params.id;
    const shop = await ShopService.getOne(shopId, 'products')
    if (!shop) res.status(404).json({ message: 'Shop not found!' })
    res.status(200).json({ shop: shop })
}

export const GetAllShops = async (req, res) => {
    const shops = await ShopService.getAll('products')
    if (!shops) res.status(404).json({ message: 'No shop found!' })
    res.status(200).json({ shops })
}

export const updateOne = async (req, res) => {
    const updates = req.body;
    const shopId = req.params.id;
    const [err, update] = await ShopService.updateOne(shopId, updates, (err, upd) => [err, upd])
    if (err) res.status(500).json({ message: 'Update Failed ' + err.message })
    let message = update.nModified >= 1 ? 'Updates Success Full' : 'Updates Did not Modify anything';
    res.status(200).json({ message })
}

export const deleteShop = async (req, res) => {
    const id = req.params.id;
    const shop = await ShopService.getOne(id, '');
    if (!shop) res.status(400).json({ message: "No shop found!" })
    const productIds = shop.products;
    const err = await ProductService.deleteMany(productIds, (err) => err);
    if (err) res.status(501).json({ err: err.message })
    const [sErr, del] = await ShopService.deleteShop(id, (err, del) => [err, del]);
    if (sErr) res.status(500).json({ sErr: sErr.message })
    let message = del.nDeleted >= 1 ? 'Shop delteted Successfully' : 'Deletion Failed'
    res.status(200).json({ message })
}
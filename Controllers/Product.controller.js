import ProductService from "../Services/Product.service.js";
import ShopsService from "../Services/Shops.service.js";

const getAll = async (req, res) => {
    try {
        const products = await ProductService.getMany();
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await ProductService.getOne({ _id: id }, {});
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const getShopProducts = async (req, res) => {
    try {
        const shopId = req.params.shopId;
        const { products } = await ShopsService.GetOneSHop(shopId, '')
        const AllProducts = await ProductService.getAll({ _id: { $in: products } }, 'Category');
        if (!AllProducts) res.status(404).json({ message: 'Products not found!' })

        res.status(200).json({ products: AllProducts });
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const add = async (req, res) => {
    try {
        const product = req.body;
        const isAdded = await ProductService.addOne(product, (prod) => console.log(prod));
        console.log(isAdded);
        return res.status(200).json(isAdded);
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;
        const isUpdated = await ProductService.updateOne({ _id: id }, product, (prod) => console.log(prod));
        return res.status(200).json(isUpdated);
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }

}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await ProductService.getOne({ _id: id });
        if (!product) throw new Error('No Product found with that id, aborting Delete!');
        const isDeleted = await ProductService.deleteOne({ _id: id }, (prod) => console.log(prod));
        if (!(isDeleted.nDeleted > 0)) throw new Error('Nothing Deleted, Tryu again!')
        // delte from shop
        const [err, upd] = await ShopsService.updateOne(req.params.shopId, { $pull: { products: id } }, (err, upd) => [err, upd])
        if (err || upd.nModified <= 0) throw new Error('Could not remove product id from shops products list, Remove Manualy product id: ' + id);

        res.status(200).json({ message: 'Product Delete Successfull!' })
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }

}

const ProductController = {
    getAll,
    getOne,
    add,
    update,
    remove,
    getShopProducts
}

export default ProductController
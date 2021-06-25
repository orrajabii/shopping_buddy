import ProductService from "../Services/Product.service";

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
        const isDeleted = await ProductService.deleteOne({ _id: id }, (prod) => console.log(prod));
        return res.status(200).json(isDeleted);
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }

}

const ProductController = {
    getAll,
    getOne,
    add,
    update,
    remove
}

export default ProductController
import Product from '../models/product.js';

const addOne = async (product, opt) => await Product(product).save(opt);
const updateOne = async (criteria, product, opt) => await Product.updateOne(criteria, product, opt);
const deleteOne = async (criteria, opt) => await Product.deleteOne(criteria, opt);
const getOne = async (criteria, opt) => await Product.findOne(criteria, opt);
const getMany = async () => await Product.find();

const ProductService = {
    addOne, updateOne, deleteOne, getOne, getMany
}

export default ProductService;
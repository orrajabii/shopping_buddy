import Product from '../models/product.js';

const addOne = async (product, opt) => await Product(product).save(opt);
const updateOne = async (criteria, product, opt) => await Product.updateOne(criteria, product, opt);
const deleteOne = async (criteria, opt) => await Product.deleteOne(criteria, opt);
const deleteMany = async (ids, opt) => await Product.delete({ _id: { $in: ids } }, opt);
const getOne = async (criteria, opt) => await Product.findOne(criteria, opt);
const getMany = async () => await Product.find();
const getAll = async (criteria, opt) => await Product.find(criteria).populate(opt);

const ProductService = {
    addOne, updateOne, deleteOne, getOne, getMany, deleteMany, getAll
}

export default ProductService;
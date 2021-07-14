import ProductCategory from '../models/ProductCategory.js';

const addOne = async (productCat, opt) => await ProductCategory(productCat).save(opt);
const updateOne = async (criteria, productCat, opt) => await ProductCategory.updateOne(criteria, productCat, opt);
const deleteOne = async (criteria, opt) => await ProductCategory.deleteOne(criteria, opt);
const getOne = async (criteria, opt) => await ProductCategory.findOne(criteria, opt);
const getMany = async () => await ProductCategory.find();

const ProductCatService = {
    addOne, updateOne, deleteOne, getOne, getMany
}

export default ProductCatService;
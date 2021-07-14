import ProductCatService from '../Services/ProductCategory.service.js'

const add = async (req, res) => {
    try {
        const productCat = req.body
        await ProductCatService.addOne(productCat, (err) => err ? console.error(err) : 'Added Product Category')
        return res.status(200).json({ msg: 'Added Product Category' })
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

// const ProductCategoryConstoller = {
//     add
// }

export default {
    add
}
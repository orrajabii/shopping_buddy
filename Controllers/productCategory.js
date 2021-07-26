// import ProductCatService from '../Services/ProductCategory.service.js'
const ProductCatService = ()=> {}

const getAllCat = async (req, res) => {
    try {
        const categories = await ProductCatService.getMany();
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const getOne = async (req, res) => {
    try {
        const category = await ProductCatService.getOne({ _id: req.params.id })
        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const add = async (req, res) => {
    try {
        const productCat = req.body
        await ProductCatService.addOne(productCat, (err) => err ? console.error(err) : 'Added Product Category')
        return res.status(200).json({ msg: 'Added Product Category' })
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const productCat = req.body
        const err = await ProductCatService.updateOne({ _id: id }, productCat, (err) => err)
        if (err) return res.status(500).json({ message: err.message })
        return res.status(200).json({ message: 'Product Category Updated' })
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

const deleteCat = async (req, res) => {
    try {
        const id = req.params.id;
        const [err, del] = await ProductCatService.deleteOne({ _id: id }, (err, del) => [err, del])
        if (err) return res.status(500).json({ message: err.message })
        if (del.nDeleted <= 0) return res.status(500).json({ message: 'Product Category Not Deleted' })
        return res.status(200).json({ message: 'Delted Product Category' })
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

export default {
    getAllCat,
    getOne,
    add,
    update,
    deleteCat
}
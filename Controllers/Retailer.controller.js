import RetailerService from "../Services/Retailer.service.js"

export const AddRetailer = async (req,res) => {
    try {
        const data = req.body;
        await RetailerService.addOne(data, (err) => {
            if(err) throw new Error('Error While adding Retailer')
            else console.log('Added Retailer');
        })

        res.status(200).json({message: 'Added Retailer'})   
    } catch (err) {
        res.status(500).json({message: 'error '+err.message})  
    }   
}

export const getRetailer = async (req,res) => {
    try {
        const id = req.params.id
        const retailer = await RetailerService.getOne({_id:id})
        res.status(200).json({ retailer : retailer })
    } catch (err) {
        res.status(500).json({message: 'error '+err.message})  
    }
}

export const getAllRetailer = async (req,res) => {
    try {
        const retailers = await RetailerService.getAll()
        res.status(200).json({ retailers : retailers })
    } catch (err) {
        res.status(500).json({message: 'error '+err.message})  
    }
}

export const UpdateRetailer = async (req,res) => {
    try {
        const id = req.params.id
        const updates = req.body
        await RetailerService.updateOne({_id:id}, updates, (response) => {
            console.log(response);
        })
        res.status(200).json({message: 'Updated Retailer'})
    } catch (err) {
        res.status(500).json({message: 'error '+err.message})  
    }  
}

export const deleteRetailerById = async (req,res) => {
    try {
        const id = req.params.id
        await RetailerService.deleteRetailer({_id:id}, (response) => {
            console.log(response);
        })
        res.status(200).json({message: 'Deleted Retailer'})
    } catch (err) {
        res.status(500).json({message: 'error '+err.message})  
    }
}
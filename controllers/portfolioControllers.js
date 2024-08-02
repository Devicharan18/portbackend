const contactModel = require('../models/contactModel');


const createContact = async (req, res) => {
    try {
        const body = req.body;
        const emp = new contactModel(body);

        await emp.save();
        res.status(201)
            .json({
                message: 'Contact Created',
                success: true
            });
    } catch (err) {
        console.log('Error ', err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}
module.exports=createContact
const db = require('../models')


// create main Model
const Customer = db.customers
const Transfer = db.transfers

// main work

// 1. Create customers
const addCustomer = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }


    const customer = await Customer.create(info)
    res.status(200).send(customer)
    console.log(customer)
}

// 2. get all Customers
const getAllCustomers = async (req, res) => {
    let customers = await Customer.findAll({})
    res.status(200).send(customers) 
}

// 3. get single customer
const getOneCustomer = async (req, res) => {
    let id = req.params.id
    let customer = await Customer.findOne({ where: { id: id}})
    res.status(200).send(customer)
}

// 4. update Customer
const updateCustomer = async(req, res) => {
    let id = req.params.id

    const customer = await Customer.update(req.body, {where: {id: id}})

    res.status(200).send(customer)
}


// 5. delete customer by id
const deleteCustomer = async (req, res) => {
    let id  = req.params.id

    await Customer.destroy({ where: {id: id }})

    res.status(200).send('Customer is deleted')
}



// 6. get published customer
const getPublishedCustomer = async (req, res) => {
    const customers = await Customer.findAll({ where: { published: true }})
    res.status(200).send(customers) 
}



// export them 
module.exports = {
    addCustomer,
    getAllCustomers,
    getOneCustomer,
    updateCustomer,
    deleteCustomer,
    getPublishedCustomer
}
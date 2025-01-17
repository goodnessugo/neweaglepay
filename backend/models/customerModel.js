module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define("customer", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER
        },
        decription: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    })

    return Customer
}
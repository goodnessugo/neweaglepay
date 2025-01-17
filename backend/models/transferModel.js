module.exports = (sequelize, DataTypes) => {

    const Transfer = sequelize.define("transfer", {
       price: {
            type: DataTypes.INTEGER
        },
        decription: {
            type: DataTypes.TEXT
        }
       
    })

    return Transfer
}
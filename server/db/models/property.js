const Sequelize = require("sequelize");
const db = require("../db");

const Property = db.define("property", {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    imageURL: {
        type: Sequelize.TEXT
    }
});

module.exports = Property
const db = require("./db");
const Property = require("./models/property.js")

module.exports = {
    db, 
    models: {
        Property
    },
};
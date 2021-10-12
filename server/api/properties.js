const router = require("express").Router();
const {
    models: { Property }
} = require("../db");

module.exports = router;

router.get("/", async (req, res, next) => {
    try {
        console.log("hit in api route")
        const property = await Property.findAll();
        res.json(property);
    } catch (error) {
        console.log("hit in api error")
        next(error);
    }
})
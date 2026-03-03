import express from "express"
import { db } from "../index.js"
import { ProductTable } from "../db/schema.js"

const router = express.Router()

// 📝 Route to create a new product listing
router.post("/new", async (req, res) => {
    // 📦 Destructure product details from request body
    const { title, min_price, description, email, img } = req.body
    // console.log(title,min_price,description,email,img)
    try {
        // 💾 Insert product data into database
        const response = await db.insert(ProductTable).values({ title, min_price, description, email, img })
        // console.log(response)
        // ✅ Send success response
        res.status(200).json(
            { "message": "Product Created Successfully" }
        )
    } catch (error) {
        // ❌ Handle errors and send error response
        res.status(400).json(
            { "message": "Internal Server Error" }
        )
    }

})

export default router
// 📦 Import required dependencies
import express from "express";
import SellerRouter from "./routes/SellerRoute.js"
import cors from "cors"

// 🚀 Initialize Express app
const app = express();

// 🔧 Middleware setup
app.use(express.json())
app.use(cors())

// 🎧 Start server on port 8080
app.listen(8080,()=>{
    console.log("port is running at 8080");
})

// 🏠 Welcome route
app.get("/", async () => {
    console.log("Welcome to Auctane")
})

// 👤 Seller routes
app.use("/seller",SellerRouter)
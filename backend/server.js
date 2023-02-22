import express from 'express'
import dotenv from 'dotenv'
import  connectDB  from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()


const app = express()

app.get('/', (req, res) =>{
    res.send('API is running...')
})

app.use('/api/products', productRoutes)

process.on("unhandledRejection", err => {
    // if you want a stack always throw a error
    console.log(`Send this to error tracking: ${err.stack}`);
    console.log("____________");
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NOD_ENV} on port ${PORT}`))
const dotenv = require('dotenv');
dotenv.config();
require("./database/associations");

const express = require('express');
const cors = require('cors');
const imagePlaceholder = require('./middleware/image-placeholder')
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/public', imagePlaceholder, express.static('public'));


const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');
const categoryRoutes = require('./routes/category-routes');
const optionsRoutes = require('./routes/options-routes');

app.use(userRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(optionsRoutes);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
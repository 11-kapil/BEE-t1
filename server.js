const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://kapil:8279a8PKwHyRWSKq@cluster0.l3geqbo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("connection is successful");
}).catch((e)=>{
  console.log("tumnse na ho payega");
});

app.use(bodyParser.json());

const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/api/products', productRoutes);
app.use('/api/products', reviewRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

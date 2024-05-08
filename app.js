const express = require('express');
const app = express();
const countriesRoutes = require('./routes/countries-routes');

app.use('/api/countries', countriesRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

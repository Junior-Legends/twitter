require('dotenv').config();

const app = require('./app');

// Running Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Running On ${PORT}`));

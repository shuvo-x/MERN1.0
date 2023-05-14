const app = require('./app');
require('dotenv').config();
const connectDatabase = require('./config/database');



//Database connection
connectDatabase();

app.listen(process.env.PORT,(req, res) => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
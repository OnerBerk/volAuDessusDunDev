require('dotenv').config();
import express from 'express';
const cors = require('cors');
const global_routes = require('./routes/global-routes');

const app = express();
const PORT = 8080 || process.env;

app.use(cors());

/* Routes */
app.use('/api/v1', global_routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(` api listen on ${PORT}`);
});

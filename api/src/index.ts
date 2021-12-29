import express from 'express';

const app = express();
const PORT = 8080 || process.env;
const global_routes = require('./routes/global-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(` api listen on ${PORT}`);
});
app.use('/api/v1', global_routes);

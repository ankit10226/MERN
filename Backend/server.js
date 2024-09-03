const dotenv = require('dotenv');
dotenv.config({ path: ".env" });

const app = require('./app');
const sequelize = require("./config/sequelize");

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successful!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Listening to port ${PORT}`);
})
 


 
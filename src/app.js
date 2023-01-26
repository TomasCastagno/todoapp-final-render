const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const userRoutes = require("./routes/users.routes");
const taskRoutes = require("./routes/tasks.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log("Autenticación exitosa."))
  .catch((error) => console.log(error));

initModels();

db.sync({ alter: false })
  .then(() => console.log("Base de datos sincronizada."))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use("/api/v1", userRoutes, taskRoutes, authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

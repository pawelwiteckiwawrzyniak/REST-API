import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import api from "./Routes/api/index.js";
import setJWTStrategy from "./Config/config-passport.js";
import { configDotenv } from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
configDotenv();
setJWTStrategy();

const uriDb = process.env.DB_HOST;
const connection = mongoose.connect(uriDb);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Backend for Phonebook App",
      version: "1.0.0",
      description: "Backend for a theoritical Phonebook App",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./Routes/api/*.js"],
};

const specs = swaggerJsdoc(options);

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

connection
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });

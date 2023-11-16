import { app } from "./app.js";
import mongoose from "mongoose";

const uriDb =
  "mongodb+srv://pawelwiteckiwawrzyniak:kjYjdu5wnP4DA@cluster0.shkvijw.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose.connect(uriDb, {
  useUnifiedTopology: true,
  /* useFindAndModify: false, */
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

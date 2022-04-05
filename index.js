const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://EveryOne:newpswd@pjs.qz9je.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(port, () => {
      console.log(`Server has started! Port: ${port}`);
    });
  });

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const port = 5000;

// use mongoose to connect to a mongodb server (here I used mongo atlas - online mongodb server)
mongoose
  .connect(
    "mongodb+srv://EveryOne:newpswd@pjs.qz9je.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    // make the server run at a specific port (i.e In this case 5000)
    app.listen(port, () => {
      console.log(`Server has started! Port: ${port}`);
    });
  });

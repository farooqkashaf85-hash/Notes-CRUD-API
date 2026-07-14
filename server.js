require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use(express.json());
const noteRoutes = require("./routes/noteroutes");
app.use("/notes", noteRoutes);

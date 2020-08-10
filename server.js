const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const authRoute = require("./routes/auth");

app.use(express.static(path.join(__dirname, "client/dist")));
app.use("/api/user", authRoute);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

//Probably need to make this more secure?
const uri =
  "mongodb+srv://rodney:gkuowtYm4YES4z7X@cluster0.msl4r.mongodb.net/UserDatabase?retryWrites=true&w=majority";

// Database initialization
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to db")
);

app.listen(port, () => console.log(`App listening at port:${port}`));

import express from "express";
import mongoose from "mongoose";
import router from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import requrieAuth from "./middleware/authMiddleware.js";

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = "mongodb://localhost:27017/nodeAuth";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
//ghfvhjbvh

app.get("/", (req, res) => res.send("this is version v6.5 released by shell script"));
app.get("/smoothies", requrieAuth, (req, res) => res.render("smoothies"));
app.use(router);

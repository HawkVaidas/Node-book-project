
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import booksRouter from "./src/route/book.js";
import usersRouter from "./src/route/user.js";

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_CONNECTION)
.then(() => console.log("Connected!"))
.catch((err) => {
  console.log(err);
});
app.use(booksRouter);
app.use(usersRouter);

app.use((req, res) => {
    return res.status(4004).json({message: "this enpoint does not exist"});
});

app.listen(process.env.PORT, () => {
    console.log(`you app is started on port ${process.env.PORT}`);
});
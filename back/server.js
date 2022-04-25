const express = require("express");
const notes = require("./data/Notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// __dirname=path.resolve()

// __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

app.get("/", (req, res) => {
    res.send("API is running..");
  });


const PORT = process.env.PORT || 8080;

// app.use("/division", division_model);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("Server started on PORT 5000"));

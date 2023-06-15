const express = require("express");
const cors = require("cors");
const server = require("./server.js");
const { user } = require("./routes/user.routes.js");
const { blogs } = require("./routes/blogs.routes.js");
const { auth } = require("./middleware/auth.middleware.js");


require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(auth)



app.use("/api",user)
app.use("/api/blogs",blogs)


app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(process.env.PORT_NUMBER, server);

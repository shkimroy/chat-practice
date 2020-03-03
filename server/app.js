const express = require("express");
const app = express();
const cors = require("cors");

const apiRouter = require("./routes/index");
const chatRouter = require("./routes/chat");

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.use("/api/chat", chatRouter);

// const port = process.env.PORT || 3001;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
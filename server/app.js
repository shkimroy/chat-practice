const express = require("express");
const app = express();
const apiRouter = require("./routes/index");

app.use(express.json());
app.use("/api", apiRouter);

// const port = process.env.PORT || 3001;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

const taskRoutes = require("./routes/taskRoutes");
app.use("/", taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

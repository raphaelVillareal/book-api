require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());



const booksRoutes = require("./routes/booksRoutes");
app.use("/", booksRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());           // allow React (another port) to call us
app.use(express.json());   // let us read JSON bodies

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

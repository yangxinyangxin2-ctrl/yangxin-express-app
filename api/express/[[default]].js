import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Node Functions!" });
});

// No app.listen() — just export
export default app;

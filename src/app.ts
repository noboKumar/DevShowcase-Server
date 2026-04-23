import cors from "cors";
import express, { Application } from "express";
const app: Application = express();

// parsers
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevShowCase Server Running...");
});

export default app;

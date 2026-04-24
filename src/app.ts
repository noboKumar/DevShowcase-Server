import cors from "cors";
import express, { Application } from "express";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";

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

// auth
app.use("/api/auth", toNodeHandler(auth));

// server test
app.get("/", (req, res) => {
  res.send("DevShowCase Server Running...");
});

export default app;

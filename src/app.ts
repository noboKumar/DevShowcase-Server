import cors from "cors";
import express, { Application } from "express";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import { projectsRoute } from "./modules/projects/projects.route";

const app: Application = express();

// parsers
app.use(
  cors({
    origin: process.env.PORT || "http://localhost:3000",
    methods: ["GET", "POST", "PUT","PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

// auth
app.use("/api/auth", toNodeHandler(auth));

// projects
app.use("/api/projects", projectsRoute);

// server test
app.get("/", (req, res) => {
  res.send("DevShowCase Server Running...");
});

export default app;

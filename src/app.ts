import cors from "cors";
import express, { Application } from "express";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import { projectsRoute } from "./modules/projects/projects.route";

const app: Application = express();

// parsers
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
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

app.get("/debug-env", (req, res) => {
  res.json({
    FRONTEND_URL: process.env.FRONTEND_URL,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  });
});

export default app;

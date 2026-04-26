import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";
import { Request, Response, NextFunction } from "express";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!data) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = data.user;
    req.session = data.session;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
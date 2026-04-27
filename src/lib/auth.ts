import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import config from "../config";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins: [process.env.CORS_ORIGIN || "http://localhost:3000"],

  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:5000",
  secret: config.auth_secret,
});

// src/app.ts
import cors from "cors";
import express2 from "express";

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

// src/lib/prisma.ts
import { PrismaPg } from "@prisma/adapter-pg";

// generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.8.0",
  "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
  "activeProvider": "postgresql",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel User {\n  id            String     @id\n  name          String\n  email         String\n  emailVerified Boolean    @default(false)\n  image         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n  sessions      Session[]\n  accounts      Account[]\n  projects      Projects[]\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nmodel Projects {\n  id          String   @id @default(uuid())\n  userId      String\n  title       String\n  category    String\n  description String\n  githubRepo  String\n  liveLink    String\n  techStack   String[]\n  thumbnail   String?\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("projects")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"projects","kind":"object","type":"Projects","relationName":"ProjectsToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Projects":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"category","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"githubRepo","kind":"scalar","type":"String"},{"name":"liveLink","kind":"scalar","type":"String"},{"name":"techStack","kind":"scalar","type":"String"},{"name":"thumbnail","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ProjectsToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"projects"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","sessions","accounts","projects","_count","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_min","_max","User.groupBy","User.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","Projects.findUnique","Projects.findUniqueOrThrow","Projects.findFirst","Projects.findFirstOrThrow","Projects.findMany","Projects.createOne","Projects.createMany","Projects.createManyAndReturn","Projects.updateOne","Projects.updateMany","Projects.updateManyAndReturn","Projects.upsertOne","Projects.deleteOne","Projects.deleteMany","Projects.groupBy","Projects.aggregate","AND","OR","NOT","id","userId","title","category","description","githubRepo","liveLink","techStack","thumbnail","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","has","hasEvery","hasSome","identifier","value","expiresAt","accountId","providerId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","name","email","emailVerified","image","every","some","none","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","push"]'),
  graph: "hQIqUA0EAAChAQAgBQAAogEAIAYAAKMBACBeAACeAQAwXwAAEwAQYAAAngEAMGEBAAAAAWpAAJQBACFrQACUAQAhiQEBAJMBACGKAQEAAAABiwEgAJ8BACGMAQEAoAEAIQEAAAABACAMAwAApQEAIF4AAKgBADBfAAADABBgAACoAQAwYQEAkwEAIWIBAJMBACFqQACUAQAha0AAlAEAIXxAAJQBACGGAQEAkwEAIYcBAQCgAQAhiAEBAKABACEDAwAA8wEAIIcBAACpAQAgiAEAAKkBACAMAwAApQEAIF4AAKgBADBfAAADABBgAACoAQAwYQEAAAABYgEAkwEAIWpAAJQBACFrQACUAQAhfEAAlAEAIYYBAQAAAAGHAQEAoAEAIYgBAQCgAQAhAwAAAAMAIAEAAAQAMAIAAAUAIBEDAAClAQAgXgAApgEAMF8AAAcAEGAAAKYBADBhAQCTAQAhYgEAkwEAIWpAAJQBACFrQACUAQAhfQEAkwEAIX4BAJMBACF_AQCgAQAhgAEBAKABACGBAQEAoAEAIYIBQACnAQAhgwFAAKcBACGEAQEAoAEAIYUBAQCgAQAhCAMAAPMBACB_AACpAQAggAEAAKkBACCBAQAAqQEAIIIBAACpAQAggwEAAKkBACCEAQAAqQEAIIUBAACpAQAgEQMAAKUBACBeAACmAQAwXwAABwAQYAAApgEAMGEBAAAAAWIBAJMBACFqQACUAQAha0AAlAEAIX0BAJMBACF-AQCTAQAhfwEAoAEAIYABAQCgAQAhgQEBAKABACGCAUAApwEAIYMBQACnAQAhhAEBAKABACGFAQEAoAEAIQMAAAAHACABAAAIADACAAAJACAPAwAApQEAIF4AAKQBADBfAAALABBgAACkAQAwYQEAkwEAIWIBAJMBACFjAQCTAQAhZAEAkwEAIWUBAJMBACFmAQCTAQAhZwEAkwEAIWgAAIYBACBpAQCgAQAhakAAlAEAIWtAAJQBACECAwAA8wEAIGkAAKkBACAPAwAApQEAIF4AAKQBADBfAAALABBgAACkAQAwYQEAAAABYgEAkwEAIWMBAJMBACFkAQCTAQAhZQEAkwEAIWYBAJMBACFnAQCTAQAhaAAAhgEAIGkBAKABACFqQACUAQAha0AAlAEAIQMAAAALACABAAAMADACAAANACABAAAAAwAgAQAAAAcAIAEAAAALACABAAAAAQAgDQQAAKEBACAFAACiAQAgBgAAowEAIF4AAJ4BADBfAAATABBgAACeAQAwYQEAkwEAIWpAAJQBACFrQACUAQAhiQEBAJMBACGKAQEAkwEAIYsBIACfAQAhjAEBAKABACEEBAAA8AEAIAUAAPEBACAGAADyAQAgjAEAAKkBACADAAAAEwAgAQAAFAAwAgAAAQAgAwAAABMAIAEAABQAMAIAAAEAIAMAAAATACABAAAUADACAAABACAKBAAA7QEAIAUAAO4BACAGAADvAQAgYQEAAAABakAAAAABa0AAAAABiQEBAAAAAYoBAQAAAAGLASAAAAABjAEBAAAAAQENAAAYACAHYQEAAAABakAAAAABa0AAAAABiQEBAAAAAYoBAQAAAAGLASAAAAABjAEBAAAAAQENAAAaADABDQAAGgAwCgQAAMYBACAFAADHAQAgBgAAyAEAIGEBAK0BACFqQACwAQAha0AAsAEAIYkBAQCtAQAhigEBAK0BACGLASAAxQEAIYwBAQCvAQAhAgAAAAEAIA0AAB0AIAdhAQCtAQAhakAAsAEAIWtAALABACGJAQEArQEAIYoBAQCtAQAhiwEgAMUBACGMAQEArwEAIQIAAAATACANAAAfACACAAAAEwAgDQAAHwAgAwAAAAEAIBQAABgAIBUAAB0AIAEAAAABACABAAAAEwAgBAcAAMIBACAaAADEAQAgGwAAwwEAIIwBAACpAQAgCl4AAJoBADBfAAAmABBgAACaAQAwYQEAhQEAIWpAAIgBACFrQACIAQAhiQEBAIUBACGKAQEAhQEAIYsBIACbAQAhjAEBAIcBACEDAAAAEwAgAQAAJQAwGQAAJgAgAwAAABMAIAEAABQAMAIAAAEAIAEAAAAFACABAAAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgCQMAAMEBACBhAQAAAAFiAQAAAAFqQAAAAAFrQAAAAAF8QAAAAAGGAQEAAAABhwEBAAAAAYgBAQAAAAEBDQAALgAgCGEBAAAAAWIBAAAAAWpAAAAAAWtAAAAAAXxAAAAAAYYBAQAAAAGHAQEAAAABiAEBAAAAAQENAAAwADABDQAAMAAwCQMAAMABACBhAQCtAQAhYgEArQEAIWpAALABACFrQACwAQAhfEAAsAEAIYYBAQCtAQAhhwEBAK8BACGIAQEArwEAIQIAAAAFACANAAAzACAIYQEArQEAIWIBAK0BACFqQACwAQAha0AAsAEAIXxAALABACGGAQEArQEAIYcBAQCvAQAhiAEBAK8BACECAAAAAwAgDQAANQAgAgAAAAMAIA0AADUAIAMAAAAFACAUAAAuACAVAAAzACABAAAABQAgAQAAAAMAIAUHAAC9AQAgGgAAvwEAIBsAAL4BACCHAQAAqQEAIIgBAACpAQAgC14AAJkBADBfAAA8ABBgAACZAQAwYQEAhQEAIWIBAIUBACFqQACIAQAha0AAiAEAIXxAAIgBACGGAQEAhQEAIYcBAQCHAQAhiAEBAIcBACEDAAAAAwAgAQAAOwAwGQAAPAAgAwAAAAMAIAEAAAQAMAIAAAUAIAEAAAAJACABAAAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgDgMAALwBACBhAQAAAAFiAQAAAAFqQAAAAAFrQAAAAAF9AQAAAAF-AQAAAAF_AQAAAAGAAQEAAAABgQEBAAAAAYIBQAAAAAGDAUAAAAABhAEBAAAAAYUBAQAAAAEBDQAARAAgDWEBAAAAAWIBAAAAAWpAAAAAAWtAAAAAAX0BAAAAAX4BAAAAAX8BAAAAAYABAQAAAAGBAQEAAAABggFAAAAAAYMBQAAAAAGEAQEAAAABhQEBAAAAAQENAABGADABDQAARgAwDgMAALsBACBhAQCtAQAhYgEArQEAIWpAALABACFrQACwAQAhfQEArQEAIX4BAK0BACF_AQCvAQAhgAEBAK8BACGBAQEArwEAIYIBQAC6AQAhgwFAALoBACGEAQEArwEAIYUBAQCvAQAhAgAAAAkAIA0AAEkAIA1hAQCtAQAhYgEArQEAIWpAALABACFrQACwAQAhfQEArQEAIX4BAK0BACF_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_wEAIJIBAAD9AQAgkwEAAP4BACCYAQAAAQAgAxQAAPwBACCSAQAA_QEAIJgBAAABACAAAAAFFAAA9wEAIBUAAPoBACCSAQAA-AEAIJMBAAD5AQAgmAEAAAEAIAMUAAD3AQAgkgEAAPgBACCYAQAAAQAgAAAAAZUBIAAAAAELFAAA4QEAMBUAAOYBADCSAQAA4gEAMJMBAADjAQAwlAEAAOQBACCVAQAA5QEAMJYBAADlAQAwlwEAAOUBADCYAQAA5QEAMJkBAADnAQAwmgEAAOgBADALFAAA1QEAMBUAANoBADCSAQAA1gEAMJMBAADXAQAwlAEAANgBACCVAQAA2QEAMJYBAADZAQAwlwEAANkBADCYAQAA2QEAMJkBAADbAQAwmgEAANwBADALFAAAyQEAMBUAAM4BADCSAQAAygEAMJMBAADLAQAwlAEAAMwBACCVAQAAzQEAMJYBAADNAQAwlwEAAM0BADCYAQAAzQEAMJkBAADPAQAwmgEAANABADAKYQEAAAABYwEAAAABZAEAAAABZQEAAAABZgEAAAABZwEAAAABaAAAsgEAIGkBAAAAAWpAAAAAAWtAAAAAAQIAAAANACAUAADUAQAgAwAAAA0AIBQAANQBACAVAADTAQAgAQ0AAPYBADAPAwAApQEAIF4AAKQBADBfAAALABBgAACkAQAwYQEAAAABYgEAkwEAIWMBAJMBACFkAQCTAQAhZQEAkwEAIWYBAJMBACFnAQCTAQAhaAAAhgEAIGkBAKABACFqQACUAQAha0AAlAEAIQIAAAANACANAADTAQAgAgAAANEBACANAADSAQAgDl4AANABADBfAADRAQAQYAAA0AEAMGEBAJMBACFiAQCTAQAhYwEAkwEAIWQBAJMBACFlAQCTAQAhZgEAkwEAIWcBAJMBACFoAACGAQAgaQEAoAEAIWpAAJQBACFrQACUAQAhDl4AANABADBfAADRAQAQYAAA0AEAMGEBAJMBACFiAQCTAQAhYwEAkwEAIWQBAJMBACFlAQCTAQAhZgEAkwEAIWcBAJMBACFoAACGAQAgaQEAoAEAIWpAAJQBACFrQACUAQAhCmEBAK0BACFjAQCtAQAhZAEArQEAIWUBAK0BACFmAQCtAQAhZwEArQEAIWgAAK4BACBpAQCvAQAhakAAsAEAIWtAALABACEKYQEArQEAIWMBAK0BACFkAQCtAQAhZQEArQEAIWYBAK0BACFnAQCtAQAhaAAArgEAIGkBAK8BACFqQACwAQAha0AAsAEAIQphAQAAAAFjAQAAAAFkAQAAAAFlAQAAAAFmAQAAAAFnAQAAAAFoAACyAQAgaQEAAAABakAAAAABa0AAAAABDGEBAAAAAWpAAAAAAWtAAAAAAX0BAAAAAX4BAAAAAX8BAAAAAYABAQAAAAGBAQEAAAABggFAAAAAAYMBQAAAAAGEAQEAAAABhQEBAAAAAQIAAAAJACAUAADgAQAgAwAAAAkAIBQAAOABACAVAADfAQAgAQ0AAPUBADARAwAApQEAIF4AAKYBADBfAAAHABBgAACmAQAwYQEAAAABYgEAkwEAIWpAAJQBACFrQACUAQAhfQEAkwEAIX4BAJMBACF_AQCgAQAhgAEBAKABACGBAQEAoAEAIYIBQACnAQAhgwFAAKcBACGEAQEAoAEAIYUBAQCgAQAhAgAAAAkAIA0AAN8BACACAAAA3QEAIA0AAN4BACAQXgAA3AEAMF8AAN0BABBgAADcAQAwYQEAkwEAIWIBAJMBACFqQACUAQAha0AAlAEAIX0BAJMBACF-AQCTAQAhfwEAoAEAIYABAQCgAQAhgQEBAKABACGCAUAApwEAIYMBQACnAQAhhAEBAKABACGFAQEAoAEAIRBeAADcAQAwXwAA3QEAEGAAANwBADBhAQCTAQAhYgEAkwEAIWpAAJQBACFrQACUAQAhfQEAkwEAIX4BAJMBACF_AQCgAQAhgAEBAKABACGBAQEAoAEAIYIBQACnAQAhgwFAAKcBACGEAQEAoAEAIYUBAQCgAQAhDGEBAK0BACFqQACwAQAha0AAsAEAIX0BAK0BACF-AQCtAQAhfwEArwEAIYABAQCvAQAhgQEBAK8BACGCAUAAugEAIYMBQAC6AQAhhAEBAK8BACGFAQEArwEAIQxhAQCtAQAhakAAsAEAIWtAALABACF9AQCtAQAhfgEArQEAIX8BAK8BACGAAQEArwEAIYEBAQCvAQAhggFAALoBACGDAUAAugEAIYQBAQCvAQAhhQEBAK8BACEMYQEAAAABakAAAAABa0AAAAABfQEAAAABfgEAAAABfwEAAAABgAEBAAAAAYEBAQAAAAGCAUAAAAABgwFAAAAAAYQBAQAAAAGFAQEAAAABB2EBAAAAAWpAAAAAAWtAAAAAAXxAAAAAAYYBAQAAAAGHAQEAAAABiAEBAAAAAQIAAAAFACAUAADsAQAgAwAAAAUAIBQAAOwBACAVAADrAQAgAQ0AAPQBADAMAwAApQEAIF4AAKgBADBfAAADABBgAACoAQAwYQEAAAABYgEAkwEAIWpAAJQBACFrQACUAQAhfEAAlAEAIYYBAQAAAAGHAQEAoAEAIYgBAQCgAQAhAgAAAAUAIA0AAOsBACACAAAA6QEAIA0AAOoBACALXgAA6AEAMF8AAOkBABBgAADoAQAwYQEAkwEAIWIBAJMBACFqQACUAQAha0AAlAEAIXxAAJQBACGGAQEAkwEAIYcBAQCgAQAhiAEBAKABACELXgAA6AEAMF8AAOkBABBgAADoAQAwYQEAkwEAIWIBAJMBACFqQACUAQAha0AAlAEAIXxAAJQBACGGAQEAkwEAIYcBAQCgAQAhiAEBAKABACEHYQEArQEAIWpAALABACFrQACwAQAhfEAAsAEAIYYBAQCtAQAhhwEBAK8BACGIAQEArwEAIQdhAQCtAQAhakAAsAEAIWtAALABACF8QACwAQAhhgEBAK0BACGHAQEArwEAIYgBAQCvAQAhB2EBAAAAAWpAAAAAAWtAAAAAAXxAAAAAAYYBAQAAAAGHAQEAAAABiAEBAAAAAQQUAADhAQAwkgEAAOIBADCUAQAA5AEAIJgBAADlAQAwBBQAANUBADCSAQAA1gEAMJQBAADYAQAgmAEAANkBADAEFAAAyQEAMJIBAADKAQAwlAEAAMwBACCYAQAAzQEAMAAAAAQEAADwAQAgBQAA8QEAIAYAAPIBACCMAQAAqQEAIAdhAQAAAAFqQAAAAAFrQAAAAAF8QAAAAAGGAQEAAAABhwEBAAAAAYgBAQAAAAEMYQEAAAABakAAAAABa0AAAAABfQEAAAABfgEAAAABfwEAAAABgAEBAAAAAYEBAQAAAAGCAUAAAAABgwFAAAAAAYQBAQAAAAGFAQEAAAABCmEBAAAAAWMBAAAAAWQBAAAAAWUBAAAAAWYBAAAAAWcBAAAAAWgAALIBACBpAQAAAAFqQAAAAAFrQAAAAAEJBQAA7gEAIAYAAO8BACBhAQAAAAFqQAAAAAFrQAAAAAGJAQEAAAABigEBAAAAAYsBIAAAAAGMAQEAAAABAgAAAAEAIBQAAPcBACADAAAAEwAgFAAA9wEAIBUAAPsBACALAAAAEwAgBQAAxwEAIAYAAMgBACANAAD7AQAgYQEArQEAIWpAALABACFrQACwAQAhiQEBAK0BACGKAQEArQEAIYsBIADFAQAhjAEBAK8BACEJBQAAxwEAIAYAAMgBACBhAQCtAQAhakAAsAEAIWtAALABACGJAQEArQEAIYoBAQCtAQAhiwEgAMUBACGMAQEArwEAIQkEAADtAQAgBgAA7wEAIGEBAAAAAWpAAAAAAWtAAAAAAYkBAQAAAAGKAQEAAAABiwEgAAAAAYwBAQAAAAECAAAAAQAgFAAA_AEAIAMAAAATACAUAAD8AQAgFQAAgAIAIAsAAAATACAEAADGAQAgBgAAyAEAIA0AAIACACBhAQCtAQAhakAAsAEAIWtAALABACGJAQEArQEAIYoBAQCtAQAhiwEgAMUBACGMAQEArwEAIQkEAADGAQAgBgAAyAEAIGEBAK0BACFqQACwAQAha0AAsAEAIYkBAQCtAQAhigEBAK0BACGLASAAxQEAIYwBAQCvAQAhCQQAAO0BACAFAADuAQAgYQEAAAABakAAAAABa0AAAAABiQEBAAAAAYoBAQAAAAGLASAAAAABjAEBAAAAAQIAAAABACAUAACBAgAgAwAAABMAIBQAAIECACAVAACFAgAgCwAAABMAIAQAAMYBACAFAADHAQAgDQAAhQIAIGEBAK0BACFqQACwAQAha0AAsAEAIYkBAQCtAQAhigEBAK0BACGLASAAxQEAIYwBAQCvAQAhCQQAAMYBACAFAADHAQAgYQEArQEAIWpAALABACFrQACwAQAhiQEBAK0BACGKAQEArQEAIYsBIADFAQAhjAEBAK8BACEEBAYCBQoDBg4EBwAFAQMAAQEDAAEBAwABAwQPAAUQAAYRAAAAAAMHAAoaAAsbAAwAAAADBwAKGgALGwAMAQMAAQEDAAEDBwARGgASGwATAAAAAwcAERoAEhsAEwEDAAEBAwABAwcAGBoAGRsAGgAAAAMHABgaABkbABoAAAADBwAgGgAhGwAiAAAAAwcAIBoAIRsAIgEDAAEBAwABAwcAJxoAKBsAKQAAAAMHACcaACgbACkIAgEJEgEKFQELFgEMFwEOGQEPGwYQHAcRHgESIAYTIQgWIgEXIwEYJAYcJwkdKA0eKQIfKgIgKwIhLAIiLQIjLwIkMQYlMg4mNAInNgYoNw8pOAIqOQIrOgYsPRAtPhQuPwMvQAMwQQMxQgMyQwMzRQM0RwY1SBU2SgM3TAY4TRY5TgM6TwM7UAY8Uxc9VBs-Vhw_VxxAWhxBWxxCXBxDXhxEYAZFYR1GYxxHZQZIZh5JZxxKaBxLaQZMbB9NbSNObgRPbwRQcARRcQRScgRTdARUdgZVdyRWeQRXewZYfCVZfQRafgRbfwZcggEmXYMBKg"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/config/index.ts
import dotenv from "dotenv";
import path2 from "path";
dotenv.config({ path: path2.join(process.cwd(), ".env") });
var config_default = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  auth_secret: process.env.BETTER_AUTH_SECRET
};

// src/lib/prisma.ts
var adapter = new PrismaPg({
  connectionString: config_default.database_url
});
var prisma = new PrismaClient({ adapter });

// src/lib/auth.ts
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true
  },
  trustedOrigins: [process.env.CORS_ORIGIN || "http://localhost:3000"],
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:5000",
  secret: config_default.auth_secret
});

// src/app.ts
import { toNodeHandler } from "better-auth/node";

// src/modules/projects/projects.route.ts
import express from "express";

// src/modules/projects/projects.service.ts
var addProject = async (payload) => {
  const result = await prisma.projects.create({
    data: {
      ...payload
    }
  });
  return result;
};
var getProjects = async (featured) => {
  const result = await prisma.projects.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true
        }
      }
    }
  });
  if (featured) {
    return result.slice(0, 3);
  }
  return result;
};
var getProjectDetails = async (id) => {
  const result = await prisma.projects.findUnique({
    where: {
      id
    }
  });
  return result;
};
var getMyProjects = async (userId) => {
  const result = await prisma.projects.findMany({
    where: {
      userId
    }
  });
  return result;
};
var updateProject = async (id, payload) => {
  const result = await prisma.projects.update({
    where: {
      id
    },
    data: {
      ...payload
    }
  });
  return result;
};
var deleteProject = async (id) => {
  const result = await prisma.projects.delete({
    where: {
      id
    }
  });
  return result;
};
var projectService = {
  addProject,
  getProjects,
  getProjectDetails,
  getMyProjects,
  updateProject,
  deleteProject
};

// src/modules/projects/projects.controller.ts
import { fromNodeHeaders } from "better-auth/node";
var addProjects = async (req, res) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers)
    });
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userId = session.user.id;
    req.body.userId = userId;
    const result = await projectService.addProject(req.body);
    res.status(200).json({
      success: true,
      message: "Project added successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};
var getProjects2 = async (req, res) => {
  const featured = req.query.featured === "true";
  try {
    const result = await projectService.getProjects(featured);
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};
var getProjectDetails2 = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await projectService.getProjectDetails(id);
    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};
var getMyProjects2 = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await projectService.getMyProjects(userId);
    res.status(200).json({
      success: true,
      message: "My projects fetched successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};
var updateProject2 = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await projectService.updateProject(id, req.body);
    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: result
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};
var deleteProject2 = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await projectService.deleteProject(id);
    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};
var projectsController = {
  addProjects,
  getProjects: getProjects2,
  getProjectDetails: getProjectDetails2,
  getMyProjects: getMyProjects2,
  updateProject: updateProject2,
  deleteProject: deleteProject2
};

// src/middleware/authMiddleware.ts
import { fromNodeHeaders as fromNodeHeaders2 } from "better-auth/node";
var authMiddleware = async (req, res, next) => {
  try {
    const data = await auth.api.getSession({
      headers: fromNodeHeaders2(req.headers)
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
var authMiddleware_default = authMiddleware;

// src/modules/projects/projects.route.ts
var router = express.Router();
router.post("/add-project", projectsController.addProjects);
router.get("/get-projects", projectsController.getProjects);
router.get("/get-projects/:id", projectsController.getProjectDetails);
router.get("/my-projects", authMiddleware_default, projectsController.getMyProjects);
router.patch("/update-project/:id", projectsController.updateProject);
router.delete("/delete-project/:id", projectsController.deleteProject);
var projectsRoute = router;

// src/app.ts
var app = express2();
app.use(
  cors({
    origin: process.env.PORT || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
  })
);
app.use(express2.json());
app.use("/api/auth", toNodeHandler(auth));
app.use("/api/projects", projectsRoute);
app.get("/", (req, res) => {
  res.send("DevShowCase Server Running...");
});
var app_default = app;

// src/vercel.ts
var vercel_default = app_default;
export {
  vercel_default as default
};

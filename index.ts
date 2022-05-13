import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as RequirementController from "./src/api/RequirementController";

const PORT = process.env.PORT || 3000;

const startup = async () => {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.post("/requirements", RequirementController.saveNewRequirement);
  app.get("/requirements", RequirementController.getAllRequirements);
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startup();

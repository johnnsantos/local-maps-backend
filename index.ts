import * as RequirementController from "./src/api/RequirementController";
import "reflect-metadata";
require("dotenv").config();
import express from "express";
import cors from "cors";

import "./src/database";

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.post("/requirements", RequirementController.saveNewRequirement);
app.get("/requirements", RequirementController.getAllRequirements);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

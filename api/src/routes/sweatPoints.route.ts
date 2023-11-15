import express from "express";
import SweatPointsController from "@controllers/sweatPoints.controller";

class SweatPointsRouter {
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", SweatPointsController.get);
    this.router.get("/:id", SweatPointsController.getById);
    this.router.post("/", SweatPointsController.create);
    this.router.put("/:id", SweatPointsController.update);
    this.router.delete("/:id", SweatPointsController.remove);
  }
}

export default SweatPointsRouter;
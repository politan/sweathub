import "module-alias/register";
import express, { Express, Request, Response } from "express";
import { ServerConfiguration } from "@configs/server.config";
import { SupabaseService } from "@services/supabase.service";
import SweatPointsRouter from "@routes/sweatPoints.route";

const app: Express = express();
const port = ServerConfiguration.port;

// TODO: Create some application facade to handle all the routes

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome on SweatHub API v1!");
});

var sweatPointRouter = new SweatPointsRouter();

app.use("/sweat-points", sweatPointRouter.router);

app.listen(port, async () => {
  console.log(`Swethub API listening on port ${port}`);
});

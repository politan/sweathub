import 'module-alias/register';
import express, { Express, Request, Response } from "express";
import { ServerConfiguration } from "@configs/server.config";
import { SupabaseService } from "@services/supabase.service";

const app: Express = express();
const port = ServerConfiguration.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome on SweatHub API!");

  SupabaseService.from("test").select().then(({ data, error }) => {
    if (error) {
      console.log("Error: ");
      console.log(error);
    } else {
      console.log("Retrieved data: ");
      console.log(data);
    }
  });
});

app.listen(port, async () => {
  console.log(`Swethub API listening on port ${port}`);
});

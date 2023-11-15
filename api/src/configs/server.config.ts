import dotenv from "dotenv";

const env = process.env;

dotenv.config();

export const ServerConfiguration: ServerConfiguration = {
  port: env.APP_PORT,
};

type ServerConfiguration = {
  port: string | undefined;
};

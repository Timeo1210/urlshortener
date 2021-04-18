import { Sequelize } from "sequelize";

import HashlinkMigration from "./migrations/20210418015945-Hashlink";

const isProd = process.env.NODE_ENV === "production" ? true : false;
const uri =
  process.env.POSTGRESQL_URI ||
  "postgresql://postgres:postgres@localhost:5432/urlshortener";

export const db = new Sequelize(uri);

export const postgresqlRepository = {
  run: async (): Promise<void> => {
    // const uri =
    //   process.env.POSTGRESQL_URI ||
    //   "postgresql://postgres:postgres@localhost:5432/urlshortener";
    // db = new Sequelize(uri);
    await db.authenticate();
    await db.sync({ force: !isProd });
    await HashlinkMigration.up(db.getQueryInterface());
    console.log("Connected to Postgresql");
  },
};

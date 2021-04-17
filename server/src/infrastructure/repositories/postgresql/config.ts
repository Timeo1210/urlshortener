import { Sequelize } from "sequelize";

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
    console.log("Connected to Postgresql");
  },
};

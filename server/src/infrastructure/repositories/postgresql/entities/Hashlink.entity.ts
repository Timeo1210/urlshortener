import { db } from "../config";
import { DataTypes, Model } from "sequelize";
import {
  hashValidation,
  urlValidation,
} from "@/infrastructure/repositories/validations/Hashlink.validation";

// can use validator.js isUrl
export class Hashlink extends Model {
  id!: number;
  hash!: string;
  url!: string;
}

Hashlink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { hashValidation },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        urlValidation,
      },
    },
  },
  { freezeTableName: true, sequelize: db }
);

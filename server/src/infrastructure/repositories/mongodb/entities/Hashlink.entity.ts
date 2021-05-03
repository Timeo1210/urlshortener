import mongoose from "mongoose";
import {
  hashValidation,
  urlValidation,
} from "@/infrastructure/repositories/validations/Hashlink.validation";

const HashlinkSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
    validate: hashValidation,
  },
  url: {
    type: String,
    required: true,
    validate: urlValidation,
  },
});

export const Hashlink = mongoose.model("Hashlink", HashlinkSchema);

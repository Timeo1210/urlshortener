import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/urlshortener";
// mongoose.connect(uri);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

export const mongodbRepository = {
  run: (): void => {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
};

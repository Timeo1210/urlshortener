import cors from "cors";
import express from "express";
import { ControllersRoutes } from "./controllers.routes";

const app = express();

app.use(cors());

app.use(express.json());

// use controllers
ControllersRoutes.forEach((controllerRoutes) => {
  app.use(controllerRoutes);
});

// catch 404
app.use((_, res) => {
  const err = new Error("Not Found");

  res.status(404);
  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

const port = process.env.PORT || 3000;
export const expressController = {
  run: (): void => {
    app.listen(port, () => {
      console.log("Listening on port", port);
    });
  },
};

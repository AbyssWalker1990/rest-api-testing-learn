 import express from "express";
import routes from "../routes";
import deserializeUser from "../middleware/deserializeUser";

function createServer() {
  const app = express();

  app.use(express.json());

  app.use(deserializeUser);

  routes(app);

  app.listen(3500, async () => {
    console.log(`App is running at http://localhost: 3500`);
  });

  return app;
}

export default createServer;

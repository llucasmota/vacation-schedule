import { Router } from "express";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/auth";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();



routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/", (req, res) => {
  return res.json({ message: "hello" });
});
export default routes;

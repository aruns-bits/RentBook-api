import { addCart, getCart } from "../controllers/controller"

const routes = (app) => {
  app.route("/cart")
  .get(getCart)
  .post(addCart)
}

export default routes

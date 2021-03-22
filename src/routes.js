import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";

import urls from "./urls";

const routes = [
  {
    path: urls.home,
    exact: true,
    component: Home,
  },
  {
    path: urls.products,
    exact: true,
    component: Products,
  },
  {
    path: urls.products + "/:id",
    exact: true,
    component: ProductPage,
  },
];

const Routes = routes.map((route) => {
  return route;
});

export default Routes;

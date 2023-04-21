import mainLayout from "layouts/MainLayout";
import paginaFora from "pages/PaginaFora";
import indexPage from "pages/IndexPage";
import paginaDentro from "pages/PaginaDentro";
import ICard from "components/ICard";
import AxiosDentro from "pages/AxiosDentro";
import AxiosFora from "pages/AxiosFora";

const routes = [
  {
    path: "/pagina-fora",
    component: paginaFora,
  },
  {
    path: "/axios-fora",
    component: AxiosFora,
    name: "AxiosFora",
  },
  {
    path: "/",
    component: mainLayout,

    children: [
      { path: "/", component: indexPage, name: "indexPage" },
      {
        path: "/pagina-dentro",
        component: paginaDentro,
        name: "pagina-dentro",
      },
      {
        path: "/i-card",
        component: ICard,
        name: "i-card",
      },
      {
        path: "/axios-dentro",
        component: AxiosDentro,
        name: "AxiosDentro",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

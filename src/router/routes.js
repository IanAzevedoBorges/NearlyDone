import mainLayout from "layouts/MainLayout";
import paginaFora from "pages/PaginaFora";
import indexPage from "pages/IndexPage";
import paginaDentro from "pages/PaginaDentro";
import ICard from "components/ICard";

const routes = [
  {
    path: "/pagina-fora",
    component: paginaFora,
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

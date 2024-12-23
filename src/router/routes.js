const routes = [
  { path: "/loading", component: () => import("src/pages/LoadingPage.vue") },
  { path: "/login", component: () => import("src/pages/LoginPage.vue") },
  { path: "/recover", component: () => import("src/pages/RecoverPage.vue") },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") }, // Tela 1
      { path: "tela2", component: () => import("src/pages/Tela2Page.vue") }, // Tela 2
      { path: "tela3", component: () => import("src/pages/Tela3Page.vue") }, // Tela 3
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

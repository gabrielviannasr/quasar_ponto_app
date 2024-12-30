const routes = [
  { path: "/", component: () => import("src/pages/LoadingPage.vue") },
  { path: "/login", component: () => import("src/pages/LoginPage.vue") },
  { path: "/recover", component: () => import("src/pages/RecoverPage.vue") },
  { path: "/register", component: () => import("src/pages/RegisterPage.vue") },
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") }, // Tela 1
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

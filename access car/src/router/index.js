import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Entradas from "../views/Entradas.vue";
import Salidas from "../views/Salidas.vue";
import PagosResidentes from "../views/PagosResidentes.vue";
import Profile from "../views/Profile.vue";
import Signin from "../views/Signin.vue";
import Vehiculos from "../views/Vehiculos"
import AltaVehiculos from "../views/AltaVehiculo"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/entradas",
    name: "Registro de entradas",
    component: Entradas,
  },
  {
    path: "/vehiculos",
    name: "Vehiculos",
    component: Vehiculos,
  },
  {
    path: "/alta",
    name: "AltaVehiculos",
    component: AltaVehiculos,
  },
  {
    path: "/salidas",
    name: "Registro de salidas",
    component: Salidas,
  },
  {
    path: "/pagosresidentes",
    name: "PagosResidentes",
    component: PagosResidentes,
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;

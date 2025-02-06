import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";
import Signup from "../views/SignupPage.vue";
import Internship from "../views/InternshipPage.vue";
import Rental from "../views/RentalPage.vue";
import Dashboard from "../views/DashboardPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/internship", name: "Internship", component: Internship },
  { path: "/rental", name: "Rental", component: Rental },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import App from "@/App.vue";
import Cart from "@/views/Cart.vue";
import Index from "@/views/Index.vue";
import OrderAddress from "@/views/OrderAddress.vue";
import OrderConfirmed from "@/views/OrderConfirmed.vue";
import OrderPayment from "@/views/OrderPayment.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ProductList from "@/views/ProductList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },
    {
      path: "/productlist",
      name: "productlist",
      component: ProductList,
    },
    {
      path: "/productdetail",
      name: "productdetail",
      component: ProductDetail,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/orderaddress",
      name: "orderaddress",
      component: OrderAddress,
    },
    {
      path: "/orderpayment",
      name: "orderpayment",
      component: OrderPayment,
    },
    {
      path: "/orderconfirmed",
      name: "orderconfirmed",
      component: OrderConfirmed,
    },
  ],
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100)
  }
});

export default router;

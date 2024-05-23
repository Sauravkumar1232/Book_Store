import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
// import Vue from "vue";
// import VueRouter from "vue-router";
// import dashboard from "../views/dashboard";
const routes = [
  {
    path: "",
    component: Dashboard,
    children: [
      {
        path: "/book/create",
        component: () =>
          import(
            /* webpackChunkName: "Overview" */ "./components/Book/BookCreate.vue"
          ),
      },
      {
        path: "/book/list",
        component: () =>
          import(
            /* webpackChunkName: "Messages" */ "./components/Book/BookList.vue"
          ),
      },
      {
        path: "/coupon/create",
        component: () =>
          import(
            /* webpackChunkName: "Overview" */ "./components/Coupon/CouponCreate.vue"
          ),
      },
      {
        path: "/coupon/list",
        component: () =>
          import(
            /* webpackChunkName: "Messages" */ "./components/Coupon/CouponList.vue"
          ),
      },
      {
        path: "/user/Create",
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "./components/User/UserCreate.vue"
          ),
      },
      {
        path: "/user/list",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "./components/User/UserList.vue"
          ),
      },
      //   {
      //     path: "/courseEdit/:id",
      //     name: "CourseEdit",
      //     component: () => import("./components/Course/CourseEdit"),
      //   },
      //   {
      //     path: "/subject/Create",
      //     component: () =>
      //       import(
      //         /* webpackChunkName: "Profile" */ "./components/Subject/SubjectCreate.vue"
      //       ),
      //   },
      //   {
      //     path: "/subject/list",
      //     component: () =>
      //       import(
      //         /* webpackChunkName: "Settings" */ "./components/Subject/SubjectList.vue"
      //       ),
      //   },
      //   {
      //     path: "/subjectMapping/Create",
      //     component: () =>
      //       import(
      //         /* webpackChunkName: "Profile" */ "./components/Subject/SubjectMappingCreate.vue"
      //       ),
      //   },
      //   {
      //     path: "/subjectMapping/list",
      //     component: () =>
      //       import(
      //         /* webpackChunkName: "Settings" */ "./components/Subject/SubjectMappingList.vue"
      //       ),
      //   },
    ],
  },

  //   {
  //     path: "/course/Create",
  //     name: "CourseCreate",
  //     component: () => import("./components/Course/CourseCreate"),
  //   },
  //   {
  //     path: "/book/list",
  //     name: "bookList",
  //     component: () => import("./components/book/bookList"),
  //   },
  //   {
  //     path: "/course/list",
  //     name: "CourseList",
  //     component: () => import("./components/Course/CourseList"),
  //   },
  // {
  //   path: "/dashboard",
  //   name: "CourseEx",
  //   component: () => import("./components/Course/CourseEx"),
  // },
  // {
  //   path: "/courseList",
  //   name: "CourseList",
  //   component: () => import("./components/Course/CourseList"),
  // },
  // {
  //   path: "/courseEdit/:id",
  //   name: "CourseEdit",
  //   component: () => import("./components/Course/CourseEdit"),
  // },
  //   {
  //     path: "/bookEdit/:id",
  //     name: "bookEdit",
  //     component: () => import("./components/book/bookEdit"),
  //   },
  //   {
  //     path: "/book/create",
  //     name: "bookCreate",
  //     component: () => import("./components/book/bookCreate"),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;

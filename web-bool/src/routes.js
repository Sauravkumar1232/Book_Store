import { createRouter, createWebHistory } from "vue-router";
const routes = [
  //   {
  //     path: "",
  //     component: Dashboard,
  //     children: [
  //       {
  //         path: "/book/create",
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "Overview" */ "./components/Book/BookCreate.vue"
  //           ),
  //       },
  //       {
  //         path: "/book/list",
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "Messages" */ "./components/Book/BookList.vue"
  //           ),
  //       },
  //       {
  //         path: "/coupon/create",
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "Overview" */ "./components/Coupon/CouponCreate.vue"
  //           ),
  //       },
  //       {
  //         path: "/coupon/list",
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "Messages" */ "./components/Coupon/CouponList.vue"
  //           ),
  //       },
  //       {
  //         path: "/user/Create",
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "Profile" */ "./components/User/UserCreate.vue"
  //           ),
  //       },
  //       {
  //         path: "/user/list",
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "Settings" */ "./components/User/UserList.vue"
  //           ),
  //       },
  //       //   {
  //       //     path: "/courseEdit/:id",
  //       //     name: "CourseEdit",
  //       //     component: () => import("./components/Course/CourseEdit"),
  //       //   },
  //       //   {
  //       //     path: "/subject/Create",
  //       //     component: () =>
  //       //       import(
  //       //         /* webpackChunkName: "Profile" */ "./components/Subject/SubjectCreate.vue"
  //       //       ),
  //       //   },
  //       //   {
  //       //     path: "/subject/list",
  //       //     component: () =>
  //       //       import(
  //       //         /* webpackChunkName: "Settings" */ "./components/Subject/SubjectList.vue"
  //       //       ),
  //       //   },
  //       //   {
  //       //     path: "/subjectMapping/Create",
  //       //     component: () =>
  //       //       import(
  //       //         /* webpackChunkName: "Profile" */ "./components/Subject/SubjectMappingCreate.vue"
  //       //       ),
  //       //   },
  //       //   {
  //       //     path: "/subjectMapping/list",
  //       //     component: () =>
  //       //       import(
  //       //         /* webpackChunkName: "Settings" */ "./components/Subject/SubjectMappingList.vue"
  //       //       ),
  //       //   },
  //     ],
  //   },

  {
    path: "/webPage",
    name: "WebPage",
    component: () => import("./components/WebPage.vue"),
  },
  //   {
  //     path: "/book/list",
  //
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;

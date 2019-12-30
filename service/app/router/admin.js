module.exports = app => {
  const { router, controller } = app;
  // console.log(app.middleware)
  var adminAuth = app.middleware.adminAuth()
  router.get("/admin/index", controller.admin.main.index);
  router.get("/admin/getTypeInfo",adminAuth,controller.admin.main.getTypeInfo)
  router.post("/admin/checkLogin", controller.admin.main.checkLogin);
  router.post("/admin/addArticle",adminAuth,controller.admin.main.addArticle);
  router.post("/admin/updateArticle",adminAuth,controller.admin.main.updateArticle);
  router.get("/admin/getArticleList",adminAuth,controller.admin.main.getArticleList);
  router.post("/admin/delArticle/:id",adminAuth,controller.admin.main.delArticle);
  router.get("/admin/getArticleById/:id",adminAuth,controller.admin.main.getArticleById);
}
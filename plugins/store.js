export default function (ctx) {
  //    离开页面
  window.addEventListener('beforeunload', () => {
    localStorage.setItem("store", JSON.stringify(ctx.store.state))
  });
  //      页面加载完成
  window.addEventListener('load', () => {
    if (localStorage.getItem("store")) {
      ctx.store.replaceState(
        Object.assign({},
          ctx.store.state,
          JSON.parse(localStorage.getItem("store"))
        )
      );
    }
  });
}

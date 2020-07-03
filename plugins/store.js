export default function (ctx) {
  //    离开页面
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem("store", JSON.stringify(ctx.store.state))
  });
  //      页面加载完成
  window.addEventListener('load', () => {
    if (sessionStorage.getItem("store")) {
        ctx.store.replaceState(
        Object.assign({},
            ctx.store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
  });
}

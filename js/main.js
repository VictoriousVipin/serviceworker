if ("serviceWorker" in navigator) {
  console.log("Service Worker: Supported");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw.js")
      .then((res) => console.log("Service Worker: Register"))
      .catch((err) => console.log(`Service Worker: error: ${err}`));
  });
}

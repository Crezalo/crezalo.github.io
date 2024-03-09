(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [
      "static/chunks/963-7d41802608eeaced.js",
      s,
      "static/chunks/pages/index-ca1d48d12298077f.js",
    ],
    "/_error": ["static/chunks/pages/_error-2280fa386d040b66.js"],
    "/careers": [s, "static/chunks/pages/careers-02118ad0fd7095ba.js"],
    "/faq": [s, "static/chunks/pages/faq-979c738b6392a50b.js"],
    "/privacypolicy": [
      s,
      "static/chunks/pages/privacypolicy-7b9997bb33e25ad1.js",
    ],
    "/team": [s, "static/chunks/pages/team-2e12425facf1735b.js"],
    "/termsofservice": [
      s,
      "static/chunks/pages/termsofservice-7889354f90297a6e.js",
    ],
    sortedPages: [
      "/",
      "/_app",
      "/_error",
      "/careers",
      "/faq",
      "/privacypolicy",
      "/team",
      "/termsofservice",
    ],
  };
})("static/chunks/201-96dbb34bb3684c04.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();

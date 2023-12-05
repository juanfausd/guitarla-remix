var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload
} from "@remix-run/react";

// app/styles/index.css
var styles_default = "/build/_assets/index-ODVQFIHM.css";

// app/components/header.tsx
import { Link as Link2 } from "@remix-run/react";

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.tsx
import { Link, useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Navegacion = () => {
  let location = useLocation();
  return /* @__PURE__ */ jsxDEV2("nav", { className: "navegacion", children: [
    /* @__PURE__ */ jsxDEV2(Link, { to: "/", className: location.pathname === "/" ? "active" : "", children: "Inicio" }, void 0, !1, {
      fileName: "app/components/navegacion.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV2(Link, { to: "/nosotros", className: location.pathname === "/nosotros" ? "active" : "", children: "Nosotros" }, void 0, !1, {
      fileName: "app/components/navegacion.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV2(Link, { to: "/tienda", className: location.pathname === "/tienda" ? "active" : "", children: "Tienda" }, void 0, !1, {
      fileName: "app/components/navegacion.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV2(Link, { to: "/blog", className: location.pathname === "/blog" ? "active" : "", children: "Blog" }, void 0, !1, {
      fileName: "app/components/navegacion.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}, navegacion_default = Navegacion;

// app/components/header.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV3("header", { className: "header", children: /* @__PURE__ */ jsxDEV3("div", { className: "contenedor barra", children: [
  /* @__PURE__ */ jsxDEV3(Link2, { to: "/", children: /* @__PURE__ */ jsxDEV3("img", { className: "logo", src: logo_default, alt: "Imagen logo" }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV3(navegacion_default, {}, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/header.tsx",
  lineNumber: 9,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/header.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), header_default = Header;

// app/components/footer.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Footer = () => /* @__PURE__ */ jsxDEV4("footer", { className: "footer", children: /* @__PURE__ */ jsxDEV4("div", { className: "contenedor contenido", children: [
  /* @__PURE__ */ jsxDEV4(navegacion_default, {}, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV4("p", { className: "copyright", children: [
    "Todos los derechos reservados ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/footer.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/footer.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), footer_default = Footer;

// app/root.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function meta() {
  return [
    { title: "GuitarLA - Remix" },
    { property: "charset", content: "utf-8" },
    { property: "viewport", content: "witdh=device-width,initial-scale=1" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@700;900&family=Outfit:wght@400;700;900&display=swap"
    }
  ];
}
function App() {
  return /* @__PURE__ */ jsxDEV5(Document, { children: /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function Document(params) {
  return /* @__PURE__ */ jsxDEV5("html", { lang: "es", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { children: [
      /* @__PURE__ */ jsxDEV5(header_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      params.children,
      /* @__PURE__ */ jsxDEV5(footer_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/nosotros.tsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links2,
  meta: () => meta2
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-CXXP4N52.css";

// app/routes/nosotros.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function meta2() {
  return [
    {
      title: "GuitarLA - Nosotros",
      description: "Venta de guitarras"
    }
  ];
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
var Nosotros = () => /* @__PURE__ */ jsxDEV6("main", { className: "contenedor nosotros", children: [
  /* @__PURE__ */ jsxDEV6("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
    fileName: "app/routes/nosotros.tsx",
    lineNumber: 32,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ jsxDEV6("div", { className: "contenido", children: [
    /* @__PURE__ */ jsxDEV6("img", { src: nosotros_default, alt: "imagen sobre nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { children: [
      /* @__PURE__ */ jsxDEV6("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, void 0, !1, {
        fileName: "app/routes/nosotros.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, void 0, !1, {
        fileName: "app/routes/nosotros.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.tsx",
    lineNumber: 33,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/nosotros.tsx",
  lineNumber: 31,
  columnNumber: 5
}, this), nosotros_default3 = Nosotros;

// app/routes/tienda.tsx
var tienda_exports = {};
__export(tienda_exports, {
  default: () => tienda_default,
  links: () => links3,
  loader: () => loader,
  meta: () => meta3
});
import { useLoaderData } from "@remix-run/react";

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}

// app/components/guitarra.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Guitarra = (guitarra) => {
  let { descripcion, imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ jsxDEV7("div", { className: "guitarra", children: [
    /* @__PURE__ */ jsxDEV7("img", { src: imagen.data.attributes.format.medium.url, alt: `Imagen guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/components/guitarra.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "contenido", children: [
      /* @__PURE__ */ jsxDEV7("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/guitarra.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/components/guitarra.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Link3, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Producto" }, void 0, !1, {
        fileName: "app/components/guitarra.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}, guitarra_default = Guitarra;

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-KCBPK2OB.css";

// app/routes/tienda.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function meta3() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra coleccion de guitarras"
  };
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
async function loader() {
  return (await getGuitarras()).data;
}
var Tienda = () => {
  let guitarras = useLoaderData();
  return /* @__PURE__ */ jsxDEV8("main", { className: "contenedor", children: [
    /* @__PURE__ */ jsxDEV8("h2", { className: "heading", children: "Nuestra Coleccion" }, void 0, !1, {
      fileName: "app/routes/tienda.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    guitarras.length && /* @__PURE__ */ jsxDEV8("div", { className: "guitarras-grid", children: guitarras.map(
      (guitarra) => /* @__PURE__ */ jsxDEV8(
        guitarra_default,
        {
          guitarra: guitarra?.attributes
        },
        guitarra?.id,
        !1,
        {
          fileName: "app/routes/tienda.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/routes/tienda.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tienda.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, tienda_default = Tienda;

// app/routes/admin/index.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default
});
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Index = () => /* @__PURE__ */ jsxDEV9("div", { children: "Admin" }, void 0, !1, {
  fileName: "app/routes/admin/index.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), admin_default = Index;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Index2() {
  return /* @__PURE__ */ jsxDEV10("div", {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var routes_default = Index2;

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default
});
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Blog = () => /* @__PURE__ */ jsxDEV11("div", { children: "Blog" }, void 0, !1, {
  fileName: "app/routes/blog.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), blog_default = Blog;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QLWPUR6U.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-RV6WGORN.js", "/build/_shared/chunk-OZF2JEPJ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WV3BN3DM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-SJGM5ST6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-NL6FKSKH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-FOPJ75CM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-IEZRCPMZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/tienda": { id: "routes/tienda", parentId: "root", path: "tienda", index: void 0, caseSensitive: void 0, module: "/build/routes/tienda-IG2IVL2Y.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "f8f6bf0d", hmr: { runtime: "/build/_shared/chunk-OZF2JEPJ.js", timestamp: 1697762592201 }, url: "/build/manifest-F8F6BF0D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/tienda": {
    id: "routes/tienda",
    parentId: "root",
    path: "tienda",
    index: void 0,
    caseSensitive: void 0,
    module: tienda_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map

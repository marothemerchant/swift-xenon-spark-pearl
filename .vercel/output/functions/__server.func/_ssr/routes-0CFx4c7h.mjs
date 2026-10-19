import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0CFx4c7h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [src, setSrc] = (0, import_react.useState)("/code-studio.html");
	(0, import_react.useEffect)(() => {
		const apply = () => {
			const hash = window.location.hash;
			setSrc(hash ? `/code-studio.html${hash}` : "/code-studio.html");
		};
		apply();
		window.addEventListener("hashchange", apply);
		return () => window.removeEventListener("hashchange", apply);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		className: "studio-frame",
		title: "Code Studio",
		src
	});
}
//#endregion
export { Home as component };

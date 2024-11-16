export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cat.gif","favicon.png","lofigirl.png"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ChQVhm8s.js","app":"_app/immutable/entry/app.PPaYzp0A.js","imports":["_app/immutable/entry/start.ChQVhm8s.js","_app/immutable/chunks/entry.CytRNOod.js","_app/immutable/chunks/scheduler.Df_9wCsF.js","_app/immutable/entry/app.PPaYzp0A.js","_app/immutable/chunks/scheduler.Df_9wCsF.js","_app/immutable/chunks/index.CiKJv4EK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

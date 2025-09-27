export function ClosePlugin(): import("vite").PluginOption {
	return {
		name: "ClosePlugin",

		buildEnd(error?: Error) {
			if (error) {
				console.error("Error bundling");
				console.error(error);
				process.exit(1);
			} else {
				console.log("Build ended");
			}
		},

		closeBundle(error?: Error) {
			console.log("Bundle closed");
			process.exit(0);
		},
	};
}

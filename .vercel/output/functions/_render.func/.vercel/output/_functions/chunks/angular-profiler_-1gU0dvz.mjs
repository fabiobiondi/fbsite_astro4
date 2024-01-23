const angularProfiler = new Proxy({"src":"/_astro/angular-profiler.ZpAQ-3n5.png","width":1901,"height":993,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/angular-profiler.png";
							}
							
							return target[name];
						}
					});

export { angularProfiler as default };

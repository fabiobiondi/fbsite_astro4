const logoAngularFundamentals = new Proxy({"src":"/_astro/logo-angular-fundamentals.FLXBliOn.png","width":130,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/misc/logo-angular-fundamentals.png";
							}
							
							return target[name];
						}
					});

export { logoAngularFundamentals as default };

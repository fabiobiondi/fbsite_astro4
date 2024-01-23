const image = new Proxy({"src":"/_astro/image.WLnJba26.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };

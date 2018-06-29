# Hello World project with Fractal

- https://fractal.build/guide
- https://github.com/frctl/fractal

Setup: `npm i -g @frctl/fractal`

Getting started with a new project.

	fractal new hello-world
	cd hello-world
	fractal start --sync

	fractal start --watch

Build

	fractal build

Integrate into a project

- https://fractal.build/guide/integration/including

1. publish as npm module
2. install `npm i @frctl/fractal`
3. install your library `npm i hello-world-component-library`
4. create fractal.js

		// fractal.js
		const fractal = module.exports = require('foocorp-component-library');

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			precompress: true,
			trailingSlash: 'always',
			base: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: dev ? '' : '/portfolio'
		},
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},
		appDir: 'internal'
	}
};

export default config;

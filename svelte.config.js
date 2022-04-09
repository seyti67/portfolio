import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			precompress: true,
			pages: 'docs',
			assets: 'docs',
			trailingSlash: 'always',
			fallback: null
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};

export default config;

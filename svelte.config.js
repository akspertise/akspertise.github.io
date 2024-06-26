import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: {
			prependData: '@use "src/styles/_functions.scss";@use "@unsass/breakpoint";'
		}
	}),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			relative: false
		},
		alias: {
			$assets: 'src/lib/assets'
		}
	}
};

export default config;

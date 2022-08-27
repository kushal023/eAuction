import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		floc: true,
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$services: resolve('./src/services')
				}
			}
		}
	}
};

export default config;

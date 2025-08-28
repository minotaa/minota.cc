import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex({ extensions: ['.md'] })],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	}
};

export default config;

import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		sveltekit({
      adapter: adapter(),
      extensions: ['.svelte', '.md'],
      preprocess: [mdsvex({ extensions: ['.md'] })]
    }), 
		tailwindcss()
	],
	assetsInclude: ['**/*.md']
});

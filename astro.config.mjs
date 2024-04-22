import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const canEdit = true;

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: "standalone"
	}),
	server: {
		host: true
	},
	integrations: [
		starlight({
			title: 'F. Technology',
			description: 'F. Technology is a software development company that specializes in building web and mobile applications.',
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/houston.webp',
			},
			social: {
				linkedin: 'https://www.linkedin.com/company/ftechnology/',
				github: 'https://github.com/withastro/starlight',
			},
			...(canEdit && { editLink: {
				baseUrl: 'https://github.com/withastro/starlight/edit/main/',
			}}),
			locales: {
				root: {
					label: 'Italian',
					lang: 'it',
				}
			}
			// sidebar autogenerated and sorted by filename alphabetically
		}),
	]
})

import portfolio from './images/portfolio-new.png';
import lesbotoc from './images/lesbotoc.png';
import altira from './images/altira.png';
import adminpanel from './images/adminpanel.png';
import apis from './images/apis.png';
import dacapo from './images/dacapo.webp';
import kvirt2 from './images/kvirt2.webp';
import archive from './images/analog-archives.webp';

export const projectsData = [
	{
		title: 'Analog Archives',
		year: '2026',
		type: 'Next · Personal',
		tech: 'JavaScript | Next | SCSS | Tailwind',
		description: 'A personal archive of analog photography, featuring images I’ve taken with different cameras and film stocks. It includes albums, photos, and an upload section for creating new albums and adding images.',
		imageAlt: 'Analog Archives homepage featuring a film photograph of a train and links to Photos and About.',
		image: archive,
		github: 'https://github.com/queuing4oranges/analog-photography-gallery',
		live: 'https://analog.queuing4oranges.com/',
	},
	{
		title: 'dacapo-chor.de',
		year: '2025',
		type: 'Vue · Community',
		tech: 'Vue | JavaScript | SCSS | Vite',
		description: 'Website for the da capo choir in the Oberlausitz region, presenting the choir, its repertoire, performances, and contact information.',
		imageAlt: 'da capo choir website homepage with the choir logo, group photo, and links to repertoire, performances, and contact details.',
		image: dacapo,
		github: 'https://github.com/queuing4oranges/dacapo-chor',
		live: 'https://www.dacapo-chor.de/',
	},
	{
		title: 'Kvirtivity.cz',
		year: '2024',
		type: 'React · Community',
		tech: 'JavaScript | React | SCSS | Bootstrap | i18next',
		description: 'Landing page for a Prague-based group organising events for queer women, with Czech- and English-language navigation.',
		imageAlt: 'Kvirtivity website About section with a colorful design, Czech and English language options, and an illustrated graphic.',
		image: kvirt2,
		github: 'https://github.com/queuing4oranges/kvirtivity-website',
		live: 'https://test-cat.queuing4oranges.com/',
	},
	{
		title: 'Altira.cz',
		year: '2023',
		type: 'React · Startup',
		tech: 'JavaScript | React | SCSS | Figma',
		description: 'Landing page for a logistics startup, designed and wireframed in Figma. The project includes a custom logo and a contact form integrated with EmailJS.',
		imageAlt: 'Altira logistics website homepage with a Czech headline, service information, and a logistics-themed image.',
		image: altira,
		github: 'https://github.com/queuing4oranges/altira-website',
		live: 'https://www.altira.cz/',
	},
	{
		title: 'Lesbotoč.cz',
		year: '2023',
		type: 'React · Community',
		tech: 'JavaScript | React | SCSS | Bootstrap | Figma',
		description: 'Landing page for an organisation bringing queer women together in Prague, with an event calendar and sign-up, gallery, about, and contact sections.',
		imageAlt: 'Lesbotoč website homepage with its logo and a collage of colorful event and community photographs.',
		image: lesbotoc,
		github: 'https://github.com/queuing4oranges/lesbotoc-website',
		live: 'https://tb01.queuing4oranges.com/',
	},
	{
		title: 'Admin Panel',
		year: '2023',
		type: 'React · Dashboard',
		tech: 'JavaScript | React | SCSS | Bootstrap | Postman',
		description: 'Content management system for Lesbotoč organisers to manage contacts and events, and upload images to the photo gallery.',
		imageAlt: 'Lesbotoč admin panel showing a picture gallery with event photos and image upload controls.',
		image: adminpanel,
		github: 'https://github.com/queuing4oranges/lesbotoc-admin'
	},
	{
		title: 'PHP APIs',
		year: '2023',
		type: 'Rest · Backend',
		tech: 'PHP | MySQL | Postman',
		description: 'PHP and MySQL API endpoints for the Lesbotoč website, supporting CRUD operations for contacts and events, as well as image uploads.',
		imageAlt: 'API documentation page listing endpoints for reading, creating, updating, and deleting events and contacts.',
		image: apis,
		github: 'https://github.com/queuing4oranges/lesbotoc-backend-api',
	},
	{
		title: 'Portfolio',
		year: '',
		type: 'React · Personal',
		tech: 'JavaScript | React | SCSS | Tailwind',
		description: 'Personal portfolio presenting Katja Zenker, selected web development projects, technical skills, education, and contact information.',
		imageAlt: 'Katja Zenker portfolio homepage introducing her as a Prague-based developer, with links to projects and contact information.',
		image: portfolio,
		github: 'https://github.com/queuing4oranges/portfolio',
		live: 'https://www.queuing4oranges.com/',
	}
];
